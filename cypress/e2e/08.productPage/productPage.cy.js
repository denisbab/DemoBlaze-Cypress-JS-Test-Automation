import ProductPage from '../pages/ProductPage';
// PageObjectAdding
const productPage = new ProductPage();

describe('Select a product and check Product Page', () => {
  let credentials;

  beforeEach('Go to the main page', () => {
    // Load credentials
    cy.fixture('credentials.json').then((cred) => {
      credentials = cred;
    });
    // Access the site
    cy.visit('/');
  });

  it('Should successfully load a product after clicking on it', () => {
    productPage.clickOnProduct();
    // Assert
    productPage.addToCartButtonShouldBeVisible();
  });

  it('Should display product title', () => {
    productPage.clickOnProduct();
    // Assert
    productPage.productTitleShouldBeVisible();
  });

  it('Should display product image', () => {
    productPage.clickOnProduct();
    // Assert
    productPage.imageShouldBeVisible();
  });

  it('Should display product price', () => {
    productPage.clickOnProduct();
    // Assert
    productPage.priceContainerShouldBeVisible();
  });
  it('Should successfully add a product to cart', () => {
    productPage.clickOnProduct();
    productPage.clickOnAddToCart();
    // Assert
    productPage.cartAlertShouldHaveText('Product added');
  });
});
