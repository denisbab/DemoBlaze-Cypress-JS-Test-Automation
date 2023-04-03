export default class ProductPage {
  // Locators

  thirdProduct = () => cy.get('.card-block a').eq(2);
  addToCartButton = () => cy.get('.col-sm-12 > .btn');
  productTitle = () => cy.get('#tbodyid .name');
  productImage = () => cy.get('.active img');
  priceContainer = () => cy.get('h3.price-container');

  // Actions and Asserts

  clickOnProduct() {
    this.thirdProduct().click();
  }
  addToCartButtonShouldBeVisible() {
    this.addToCartButton().should('be.visible');
  }
  productTitleShouldBeVisible() {
    this.productTitle().should('be.visible');
  }
  productTitleShouldBeVisible() {
    this.productTitle().should('be.visible');
  }
  imageShouldBeVisible() {
    this.productImage().should('be.visible');
  }
  priceContainerShouldBeVisible() {
    this.priceContainer().should('be.visible');
  }
  clickOnAddToCart() {
    this.addToCartButton().click();
  }
  cartAlertShouldHaveText(text) {
    cy.on('window:alert', (t) => {
      expect(t).to.contains(text);
    });
  }
}
