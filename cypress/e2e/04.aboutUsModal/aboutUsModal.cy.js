import AboutUs from '../pages/AboutUsModal';
// PageObjectAdding
const aboutUs = new AboutUs();

describe('Sign Up', () => {
  beforeEach('Go to the main page', () => {
    // Access the site
    cy.visit('/');
  });

  it('Should display the text "About Us" in the about us modal title', () => {
    aboutUs.clickOnAboutUs();
    // Assert
    aboutUs.modalTitleShouldHaveText('About us');
  });

  it('Should close modal after clicking on Close button', () => {
    aboutUs.clickOnAboutUs();
    aboutUs.clickOnCloseButton();
    // Assert
    aboutUs.videoModalShoulNotBeVisible();
  });

  it('Should display a success alert if the user is new', () => {
    aboutUs.clickOnAboutUs();
    aboutUs.clickOnPlayButton();
    // Assert
    aboutUs.videoPlaybackShouldBeVisible();
    aboutUs.clickOnCloseButton();
  });
});
