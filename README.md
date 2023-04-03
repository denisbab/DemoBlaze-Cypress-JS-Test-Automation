# Demoblaze Practical Task

## A cypress test automation project for demoblaze.com

### Requirements:
Node version v16 or above.
MacOS: brew install node.
Ubuntu: sudo apt install nodejs.
Chrome version 111 or above.

### Set Up:

1. Clone the project in your machine
2. Go to the project directory
3. In the project directory run "npm install" in your terminal to install the dependencies needed
4. You can have a look at the tests inside cypress/e2e/ folder

### Run the tests:

1. In the terminal run "npx cypress open" to open up cypress UI (it might take some time if it is the first time)
2. Once in the Cypress menu you can select any of the .cy.js files to run their test suites.
3. In the terminal run "npx cypress run" and check new created folder with name "Reports" and open "index.html" file.

### Important note:

In cypress/e2e/signUp/signUpModal.cy.js there is a test that checks the site's ability to register a new user. This user data is retrieved from cypress/fixtures/credentials.json. In each run of such test you need to change the value of "newUser" in this json file to a different one. Otherwise the site will recognise the user as pre-existent and the test will fail.

### Reports

As a reporter tool used cypress-mochawesome-reporter.
It's already installed in a project.
After earch "npx cypress run" command an updated report will be created in a folder cypress/reports/html

Example test report is located in folder: cypress/reports/html/index.html
