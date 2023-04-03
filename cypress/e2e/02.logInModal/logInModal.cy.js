import LogIn from '../pages/LoginPage';
// PageObjectAdding
const logIn = new LogIn();

describe('log in the site', () => {
  let credentials;
  beforeEach('Go to the main page', () => {
    // Load credentials
    cy.fixture('credentials.json').then((cred) => {
      credentials = cred;
    });
    // Access the site
    cy.visit('/');
  });

  it('Should display modal after clicking on log in', () => {
    logIn.clickOnLogInLink();
    // Assert
    logIn.logInModalShouldBeVisible();
  });

  it('Should display the text "Log in" in the log in modal title', () => {
    logIn.clickOnLogInLink();
    // Assert
    logIn.modalTitleShouldHaveText('Log in');
  });

  it('Should close modal after clicking on Close button', () => {
    logIn.clickOnLogInLink();
    logIn.clickOnCloseButton();
    // Assert
    logIn.logInModalShoulNotBeVisible();
  });

  it('Should display an alert asking to fill in the required data if nothing is typed', () => {
    logIn.clickOnLogInLink();
    logIn.clickOnLogInButton();
    // Assert
    logIn.logInAlertShouldHaveText('Please fill out Username and Password.');
  });

  it('Should display an alert warning that the user does not exist if user is invalid', () => {
    logIn.clickOnLogInLink();
    logIn.typeUser(credentials.wrongUSer);
    logIn.typePassword(credentials.password);
    logIn.clickOnLogInButton();
    // Assert
    logIn.logInAlertShouldHaveText('User does not exist.');
  });

  it('Should display an alert warning that the password is wrong if password is invalid', () => {
    logIn.clickOnLogInLink();
    logIn.typeUser(credentials.user);
    logIn.typePassword(credentials.wrongPassword);
    logIn.clickOnLogInButton();
    // Assert
    logIn.logInAlertShouldHaveText('Wrong password.');
  });

  it('Should log in successfully after introducing valid credentials', () => {
    logIn.clickOnLogInLink();
    logIn.typeUser(credentials.user);
    logIn.typePassword(credentials.password);
    logIn.clickOnLogInButton();
    // Assert
    logIn.welcomeMessageShouldGreet(credentials.user);
  });

  it('Should successfully log out after clicking on log out', () => {
    logIn.clickOnLogInLink();
    logIn.typeUser(credentials.user);
    logIn.typePassword(credentials.password);
    logIn.clickOnLogInButton();
    logIn.clickOnLogOut();
    // Assert
    logIn.welcomeMessageShouldNotBeVisible();
  });
});
