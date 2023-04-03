export default class PlaceOrderModal {
  // Locators

  orderModal = () => cy.get('div#orderModal');
  purchaseButton = () =>
    cy.get(
      '#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary'
    );
  inputName = () => cy.get('#name');
  inputCreditCard = () => cy.get('#card');
  sweetAlert = () => cy.get('.sweet-alert');
  orderText = () => cy.get('.lead');
  totalPrice = () => cy.get('#totalp');

  // Actions and Asserts

  orderModalShouldBeVisible() {
    this.orderModal().should('be.visible');
  }
  clickOnPurchase() {
    this.purchaseButton().click();
  }

  cartAlertShouldHaveText(text) {
    cy.on('window:alert', (t) => {
      expect(t).to.contains(text);
    });
  }
  typeName(text) {
    this.inputName().type(text);
  }
  typeCard(text) {
    this.inputCreditCard().type(text);
  }
  sweetAlertShouldBeVisible() {
    this.sweetAlert().should('be.visible');
  }
  orderTextShouldContain(data) {
    this.orderText().should('contain', data);
  }
  orderTextShouldHavePrice() {
    this.totalPrice()
      .invoke('text')
      .then((text) => {
        this.orderText().should('contain', text);
      });
  }
}
