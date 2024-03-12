# TON Telegram Lottery Smart Contract

This project contains a Tact smart contract for a lottery game on the TON (Telegram Open Network) blockchain. It uses the TACT compiler, TypeScript, Jest.

## Available Scripts

In the project directory, you can run:

- `yarn test`: Launches the test runner in the interactive watch mode.
- `yarn build`: Builds the contract for production to the `build` folder.
- `yarn deploy`: Deploys the contract to the TON network.

## Deployment

To deploy the contract, you should:

1) Specify `contract.tact` as the entry point of your contract.
2) Configure `contract.deploy.ts` according to your `contract.tact` to generate a deployment link. In particular, it is necessary to correctly call the `init()` function from the contract.

If you renamed `contract.tact` to something else, you need to update `tact.config.json` correspondingly. For more information, see [Tact Documentation](https://docs.tact-lang.org/language/guides/config).

## Testing

Example of contract tests are in `contract.spec.ts`. For more information about testing, see [Tact Documentation](https://docs.tact-lang.org/language/guides/debug).

To add new test files to the contract, you should create `*.spec.ts` files similar to the template's one and they would be automatically included in testing.

## License

This project is licensed under the MIT License.