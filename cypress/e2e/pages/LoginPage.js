export default class LogInPage {
  // Locators

  logInLink = () => cy.get('#login2');
  logInModal = () => cy.get('div#logInModal');
  loginModalTitle = () => cy.get('#logInModalLabel');
  loginCloseButton = () =>
    cy.get(
      '#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary'
    );
  userInput = () => cy.get('#loginusername');
  passwordInput = () => cy.get('#loginpassword');
  logInButton = () =>
    cy.get(
      '#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary'
    );
  welcomeMessage = () => cy.get('#nameofuser');
  logOutLink = () => cy.get('#logout2');
  categoriesPhonesLink = () => cy.get('.list-group-item').contains('Phones');
  categoriesLaptopsLink = () => cy.get('.list-group-item').contains('Laptops');
  categoriesMonitorsLink = () =>
    cy.get('.list-group-item').contains('Monitors');

  // Actions and Asserts

  clickOncategoriesPhonesLink() {
    this.categoriesPhonesLink().click();
    cy.wait('@my').then(($res) => {
      expect($res.response.body.Items.every((el) => el.cat == 'phone')).to.eq(
        true
      );
    });
  }
  clickOncategoriesLaptopsLink() {
    this.categoriesLaptopsLink().click();
    cy.wait('@my').then(($res) => {
      expect(
        $res.response.body.Items.every((el) => el.cat == 'notebook')
      ).to.eq(true);
    });
  }
  clickOncategoriesMonitorsLink() {
    this.categoriesMonitorsLink().click();
    cy.wait('@my').then(($res) => {
      expect($res.response.body.Items.every((el) => el.cat == 'monitor')).to.eq(
        true
      );
    });
  }
  clickOnLogInLink() {
    this.logInLink().click().wait(1000);
  }
  clickOnLogInButton() {
    this.logInButton().click();
  }
  clickOnCloseButton() {
    this.loginCloseButton().click({ force: true });
  }
  clickOnLogOut() {
    this.logOutLink().should('be.visible');
    this.logOutLink().click();
  }
  logInModalShouldBeVisible() {
    this.logInModal().should('be.visible');
  }
  logInModalShoulNotBeVisible() {
    this.logInModal().should('not.be.visible');
  }
  modalTitleShouldHaveText(text) {
    this.loginModalTitle().should('have.text', text);
  }
  typeUser(user) {
    this.userInput().type(user);
  }
  typePassword(password) {
    this.passwordInput().type(password);
  }
  logInAlertShouldHaveText(text) {
    cy.on('window:alert', (t) => {
      expect(t).to.contains(text);
    });
  }
  welcomeMessageShouldGreet(user) {
    let message = 'Welcome ' + user;
    this.welcomeMessage().should('have.text', message);
  }
  welcomeMessageShouldNotBeVisible() {
    this.welcomeMessage().should('not.be.visible');
  }
}
