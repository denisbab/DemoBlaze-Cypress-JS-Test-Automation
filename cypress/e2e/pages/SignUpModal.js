export default class SignUpModal {
  // Locators

  signUpLink = () => cy.get('#signin2');
  signUpModal = () => cy.get('#signInModal');
  modalTitle = () => cy.get('#signInModalLabel');
  closeButton = () =>
    cy.get(
      '#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary'
    );
  userInput = () => cy.get('#sign-username');
  passwordInput = () => cy.get('#sign-password');
  signUpButton = () => cy.get('[type="button"]').contains('Sign up');

  // Actions and Asserts

  clickOnSignUp() {
    this.signUpLink().click().wait(1000);
  }
  clickOnCloseButton() {
    this.closeButton().click({ force: true });
  }
  clickOnSignUpButton() {
    this.signUpButton().click();
  }
  signUpModalShoulNotBeVisible() {
    this.signUpModal().should('not.be.visible');
  }
  modalTitleShouldHaveText(text) {
    this.modalTitle().should('have.text', text);
  }
  typeUser(user) {
    this.userInput().type(user);
  }
  typePassword(password) {
    this.passwordInput().type(password);
  }
  signUpAlertShouldHaveText(text) {
    cy.on('window:alert', (t) => {
      expect(t).to.contains(text);
    });
  }
}
