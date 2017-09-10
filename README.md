Purpose
===
This is a sample project put together while learning Solidity.

Description
===
This project defines a prediction market where:
* An admin can add yes / no questions
* Any user can bet on the outcome of a question
* Accounts designated as trusted sources can resolve questions.

Technology
===
* Contracts are written with the [Solidity](https://solidity.readthedocs.io/en/develop/) programming language.
* [Truffle](http://truffleframework.com/) is used to compile and
deploy the Solidity contracts.

Development
===
Run a local instance
---
Clone the project and run:
```
npm install
```  
Open a new terminal window and run [testrpc](https://github.com/ethereumjs/testrpc):
```
npm run testrpc
```
In another terminal window, deploy the smart contracts:
```
npm run contract-deploy
```
Build the web app:
```
npm run app-build
```
Run the server:
```
npm run app-serve
```
Visit the app at [localhost:8080](localhost:8080)