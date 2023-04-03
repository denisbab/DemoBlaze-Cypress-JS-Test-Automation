export default class ContactPage {
  // Locators

  contactLink = () => cy.get(':nth-child(2) > .nav-link');
  contactModal = () => cy.get('#exampleModal');
  contactModalTitle = () => cy.get('#exampleModalLabel');
  closeContactButton = () =>
    cy.get(
      '#exampleModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary'
    );
  sendMessageButton = () => cy.get('[type="button"]').contains('Send message');
  contactEmailInput = () => cy.get('#recipient-email');
  contactNameInput = () => cy.get('#recipient-name');
  messageInput = () => cy.get('#message-text');

  // Actions and Asserts

  clickOnContact() {
    this.contactLink().click().wait(1000);
  }
  clickOnCloseButton() {
    this.closeContactButton().click({ force: true });
  }
  clickOnSendMessageButton() {
    this.sendMessageButton().click();
  }
  contactModalShoulNotBeVisible() {
    this.contactModal().should('not.be.visible');
  }
  contactModalTitleShouldHaveText(text) {
    this.contactModalTitle().should('have.text', text);
  }
  typeContactEmail(email) {
    this.contactEmailInput().type(email);
  }
  typeContactName(name) {
    this.contactNameInput().type(name);
  }
  typeMessage(message) {
    this.messageInput().type(message);
  }
  contactAlertShouldHaveText(text) {
    cy.on('window:alert', (t) => {
      expect(t).to.contains(text);
    });
  }
}
