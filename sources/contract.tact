import "@stdlib/deploy";
import "@stdlib/ownable";
struct Participant {
  addr: Address;
  tokenBought: Int as uint64;
}
message TokenPayout{
    value: Int as coins;
}
struct TokenPayoutResponse {
    token: String;
}
struct Winner{
   value: Int as coins;
   token: Int;
   address: Address;
}

contract Lottery with Deployable, Ownable {
  winner: Winner;
  owner: Address;
  balance: Int as uint256 =0;
  tokenCost:Int as uint256= ton("1");
  usersToken: map<Address, TokenPayoutResponse>;
  tokensUser: map<Int,Address>;
  tokensIndex: map<Int,Int>;
  tokenArrayLength:Int=0;
 
  init(){
    self.winner=Winner{value:0,token:0,address:address("EQCD39VS5jcptHL8vMjEXrzGaRcCVYto7HUn4bpAOg8xqB2N")};
    self.owner = sender();
  }

  receive(msg:TokenPayout){
    let ctx: Context = context();
    require(msg.value >=self.tokenCost, "Each token price is 1 ton");
    let token: Int =random(111111,999999);
    let sb: StringBuilder = beginString();
    let strToken:String=token.toString();
    if(self.usersToken.get(ctx.sender)!=null){
      let tokenPayoutResponse: TokenPayoutResponse=self.usersToken.get(ctx.sender)!!;
      sb.append(strToken);
      sb.append(",");
      sb.append(tokenPayoutResponse.token);
    }else{
      sb.append(strToken);
    }
    self.usersToken.set(ctx.sender,TokenPayoutResponse{token:sb.toString()});
    self.tokensUser.set(token,ctx.sender);
    self.tokenArrayLength=self.tokenArrayLength+1;
    self.tokensIndex.set(self.tokenArrayLength,token);
    self.balance = (self.balance + context().value);
   
    self.forward(ctx.sender, TokenPayoutResponse{ token:token.toString()}.toCell(), true, null);

  }
  receive("run game"){
   let ctx: Context = context();
   require(ctx.sender==self.owner,"Owner only access to run the game!");
   let randomWinner: Int=random(0,self.tokenArrayLength);
   require(self.tokensIndex.get(randomWinner)!=null,"winner not found");
   let wonToken: Int = self.tokensIndex.get(randomWinner)!!;
   let wonUser: Address= self.tokensUser.get(wonToken)!!;
   self.winner=Winner{value:self.balance,token:wonToken,address:wonUser};
   self.clear();
  }
  fun clear() {
    self.usersToken=emptyMap();
    self.tokensUser=emptyMap();
    self.tokensIndex=emptyMap();
    self.tokenArrayLength=0;
    self.balance=0;
  }

  get fun totalBalance(): Int {
    return self.balance;
  }

  get fun getUserTokens():map<Address, TokenPayoutResponse>{
  
   return self.usersToken;
  }

  get fun getLastwinner():Winner{
    return self.winner;
  }

  
}