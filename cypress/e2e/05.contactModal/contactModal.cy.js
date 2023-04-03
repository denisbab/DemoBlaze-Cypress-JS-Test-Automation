import Contact from '../pages/ContactModal';
// PageObjectAdding
const contact = new Contact();

describe('Contact modal', () => {
  let credentials;
  beforeEach('Go to the main page', function () {
    // Load credentials
    cy.fixture('credentials.json').then(function (cred) {
      credentials = cred;
    });
    // Access the site
    cy.visit('/');
  });

  it('Should display the text "New message" in the Contact modal title', () => {
    contact.clickOnContact();
    // Assert
    contact.contactModalTitleShouldHaveText('New message');
  });

  it('Should close Contact modal after clicking on Close button', () => {
    contact.clickOnContact();
    contact.clickOnCloseButton();
    // Assert
    contact.contactModalShoulNotBeVisible();
  });

  it('Should send the message and alert is shown', function () {
    contact.clickOnContact();
    contact.typeContactEmail(credentials.wrongUSer);
    contact.typeContactName(credentials.name);
    contact.typeMessage(credentials.message);
    contact.clickOnSendMessageButton();
    // Assert
    contact.contactAlertShouldHaveText('Thanks for the message!!');
  });
});
