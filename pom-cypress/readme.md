# Page Object Model using Cypress and LambdaTest

This project demostrates the usage of Page Object Model(POM) using Cypress and LambdaTest.

## Run it locally
- Install the dependencies using this command:

```bash
npm install
```

- Run the project with Cypress headless:

```bash
npm run cypress:run 
```

- Run the project with Cypress on browser

```bash
npm run cypress:open
```

## Run the tests on LambdaTest
To run these tests in a cloud environment, you can use LambdaTest's service. First, create an account or sign in on [https://lambdatest.com/](https://lambdatest.com/).

- Please note down your `username` and `Access Key` from the `Settings > Password` & Security page.

- Install LambdaTest CLI for running tests on LambdaTest cloud grid 
```bash
npm install -g lambdatest-cypress-cli
```
- A `lambdatest-config.json` is already available in the source code. In case, you want to generate the default config file, please use the following command:
```bash
lambdatest-cypress init --cv=10
```
- Now, run teh tests on LambdaTest using this command:

```bash
lambdatest-cypress run --user=<LamdaTest_UserName> --ak=<LambdaTest_Access_Key>
```



