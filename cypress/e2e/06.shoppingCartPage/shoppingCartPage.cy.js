import ProductPage from '../pages/ProductPage';
import ShoppingCart from '../pages/ShoppingCart';
// PageObjectsAdding
const productPage = new ProductPage();
const shoppingCart = new ShoppingCart();

describe('Checkout products in cart', () => {
  let credentials;
  let paying;

  beforeEach('Go to the main page', () => {
    // Load credentials
    cy.fixture('credentials.json').then((cred) => {
      credentials = cred;
    });
    // Load payment data
    cy.fixture('paymentData.json').then((data) => {
      paying = data;
    });
    // Adding products to cart
    cy.visit('/');
    productPage.clickOnProduct();
    productPage.clickOnAddToCart();
    cy.visit('/');
    productPage.clickOnProduct();
    productPage.clickOnAddToCart();
    cy.visit('/');
    productPage.clickOnProduct();
    productPage.clickOnAddToCart();
    shoppingCart.clickOnCart();
  });

  it('Should display the Products title', () => {
    // Assert
    shoppingCart.cartPageTitleShouldBe('Products');
  });

  it('Should display products table header correctly', () => {
    // Assert
    shoppingCart.tableHeadImageTextShouldBe('Pic');
    shoppingCart.tableHeadTitleTextShouldBe('Title');
    shoppingCart.tableHeadPriceTextShouldBe('Price');
    shoppingCart.tableHeadDeleteTextShouldBe('x');
  });

  it('Should successfully delete the first product', () => {
    shoppingCart.deleteFirstProduct();
    // Assert
    shoppingCart.numberOfProductsAddedShouldBe(2);
  });

  it('Should display the total price', () => {
    // Assert
    shoppingCart.totalPriceShoulBeVisible();
  });
});
