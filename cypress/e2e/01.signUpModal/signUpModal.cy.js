import SignUp from '../pages/SignUpModal';
// Page Object Adding
const signUp = new SignUp();

describe('Sign Up', () => {
  let credentials;
  beforeEach('Go to the main page', () => {
    // Load credentials
    cy.fixture('credentials.json').then((cred) => {
      credentials = cred;
    });
    // Access the site
    cy.visit('/');
  });

  it('Should display the text "Sign Up" in the sign up modal title', () => {
    signUp.clickOnSignUp();
    // Assert
    signUp.modalTitleShouldHaveText('Sign up');
  });

  it('Should display an alert asking to fill in the required data if nothing is typed', () => {
    signUp.clickOnSignUp();
    signUp.clickOnSignUpButton();
    // Assert
    signUp.signUpAlertShouldHaveText('Please fill out Username and Password.');
  });

  it('Should display an alert warning about the user existed if the user is duplicated', () => {
    signUp.clickOnSignUp();
    signUp.typeUser(credentials.existingUser);
    signUp.typePassword(credentials.password);
    signUp.clickOnSignUpButton();
    // Assert
    signUp.signUpAlertShouldHaveText('This user already exist.');
  });

  it('Should close modal after clicking on Close button', () => {
    signUp.clickOnSignUp();
    signUp.clickOnCloseButton();
    // Assert
    signUp.signUpModalShoulNotBeVisible();
  });

  it('Should display a success alert if the user is new', () => {
    signUp.clickOnSignUp();
    signUp.typeUser(credentials.newUser);
    signUp.typePassword(credentials.password);
    signUp.clickOnSignUpButton();
    // Assert
    signUp.signUpAlertShouldHaveText('Sign up successful.');
  });
});
