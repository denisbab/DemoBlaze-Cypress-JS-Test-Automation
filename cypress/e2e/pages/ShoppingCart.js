export default class ShoppingCart {
  // Locators

  cartPageTitle = () => cy.get('.col-lg-8 h2');
  cart = () => cy.get('#cartur');
  tableHeadImage = () => cy.get('thead th').eq(0);
  tableHeadTitle = () => cy.get('thead th').eq(1);
  tableHeadPrice = () => cy.get('thead th').eq(2);
  tableHeadDelete = () => cy.get('thead th').eq(3);
  firstDeleteButton = () => cy.get('.success a').eq(0);
  productsAdded = () => cy.get('.success');
  totalPrice = () => cy.get('#totalp');
  placeOrderButton = () => cy.get('.btn-success');

  // Actions and Asserts

  cartPageTitleShouldBe(text) {
    this.cartPageTitle().should('have.text', text);
  }
  clickOnCart() {
    this.cart().click();
  }
  tableHeadImageTextShouldBe(text) {
    this.tableHeadImage().should('have.text', text);
  }
  tableHeadTitleTextShouldBe(text) {
    this.tableHeadTitle().should('have.text', text);
  }
  tableHeadPriceTextShouldBe(text) {
    this.tableHeadPrice().should('have.text', text);
  }
  tableHeadDeleteTextShouldBe(text) {
    this.tableHeadDelete().should('have.text', text);
  }
  deleteFirstProduct() {
    this.firstDeleteButton().click();
  }
  numberOfProductsAddedShouldBe(number) {
    this.productsAdded().should('have.length', number);
  }
  totalPriceShoulBeVisible() {
    this.totalPrice().should('be.visible');
  }
  placeOrder() {
    this.placeOrderButton().click().wait(1000);
  }
}
