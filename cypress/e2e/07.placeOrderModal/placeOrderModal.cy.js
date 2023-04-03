import ProductPage from '../pages/ProductPage';
import ShoppingCart from '../pages/ShoppingCart';
import PlaceOrderModal from '../pages/PlaceOrderModal';
// PageObjectsAdding
const productPage = new ProductPage();
const shoppingCart = new ShoppingCart();
const placeOrderModal = new PlaceOrderModal();

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

  it('Should display purchase modal after clicking on place order', () => {
    shoppingCart.placeOrder();
    // Assert
    placeOrderModal.orderModalShouldBeVisible();
  });
  it('Should not allow to place an order without name or card introduced', () => {
    shoppingCart.placeOrder();
    placeOrderModal.clickOnPurchase();
    // Assert
    placeOrderModal.cartAlertShouldHaveText(
      'Please fill out Name and Creditcard.'
    );
  });
  it('Should place an order after introducing name and card', () => {
    shoppingCart.placeOrder();
    placeOrderModal.typeName(paying.name);
    placeOrderModal.typeCard(paying.creditCard);
    placeOrderModal.clickOnPurchase();
    // Assert
    placeOrderModal.sweetAlertShouldBeVisible();
    placeOrderModal.orderTextShouldContain(paying.name);
    placeOrderModal.orderTextShouldContain(paying.creditCard);
    placeOrderModal.orderTextShouldHavePrice();
  });
});
