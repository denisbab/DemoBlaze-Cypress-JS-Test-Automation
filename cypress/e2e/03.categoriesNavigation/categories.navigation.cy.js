import LogIn from '../pages/LoginPage';
// PageObjectAdding
const logIn = new LogIn();

describe('Categories Navigation', () => {
  beforeEach('Go to the main page', () => {
    // Access the site
    cy.visit('/');
    cy.intercept('POST', 'https://api.demoblaze.com/bycat').as('my');
  });

  it('Should be displayed Phones category', () => {
    // Assert
    logIn.clickOncategoriesPhonesLink();
  });

  it('Should be displayed Laptops category', () => {
    // Assert
    logIn.clickOncategoriesLaptopsLink();
  });

  it('Should be displayed Monitors category', () => {
    // Assert
    logIn.clickOncategoriesPhonesLink();
  });
});
