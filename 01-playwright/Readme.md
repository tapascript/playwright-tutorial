# 01 - Playwright Tutorial

This project contains the source code to demonstrate the usage Playwright test with LambdaTest.


## Learn from this video tutorial

Are you looking forward to getting started with PlayWright and LambdaTest by learning the following?

- Introduction and Installation to Playwright with JavaScript
- Creating and Running tests with the playwright
- Script to run Playwright tests on the LambdaTest.

Catch up with this video tutorial to get started:

<THUMBNAIL_LINKED_TO_THE_YOUTUBE_VIDEO/>

## How to Run the Project Locally?
To run the project locally:
- Clone or fork this repository.
- Browse to the 01-playwright directory.
- Install the dependencies using the `npm install  command`.
- Run the tests using the `npm run test` command.

> Please note: If you want to run individual tests, it is recommended to import this project into the Visual Studio Code and follow the video tutorial [mentioned here](https://github.com/tapascript/playwright-tutorial/tree/main/01-playwright#learn-from-this-video-tutorial) to execute the steps. 

## How to Generate the Test Run Report?
To generate the test run report, please run the following command from the project's root directory:

```bash
npx playwright show-report
```
This command will generate the report and make it available locally on a URL(by default, http://localhost:9323) for you to access and analyze.

![Test Result Report](https://github.com/user-attachments/assets/b4368e51-4600-4178-8e49-5b4fa502db87)


## How to Run the test on the LambdaTest?
You can learn the tests on the LambdaTest and analyze the tests from the LambaTest dashboard. To do that,

- Create a `.env` file at the root of the project.
- Add these environment variables in the `.env` file
   ```bash
   LT_USERNAME=<LAMBDATEST_USER_NAME>
   LT_ACCESS_KEY=<LAMBDATEST_ACCESS_KEY>
   ```
- Open a terminal.
- Browse to the project folder
- Run the lambdatest script using this command:
  ```bash
  node playwright-lambdatest.js
  ```
- Now, got to the lambdatest dashboard.
- You should the test runs are listed under the `Web Automation` page
  ![test list](https://github.com/user-attachments/assets/c6fa7d68-8ac6-4edb-88ba-023ca957ad64)
- Click on a test and watch the recording, analyze tests
  ![test result](https://github.com/user-attachments/assets/ec44a4bf-2fd4-4be3-8d8b-f9acd37f8064)

## Links & Resources
- [Playwright docs](https://playwright.dev/docs/intro)
- [LambdaTest Blog](https://www.lambdatest.com/blog/)


  



  
