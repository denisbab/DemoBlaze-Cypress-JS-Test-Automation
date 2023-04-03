export default class AboutUsModal {
  // Locators

  aboutUsLink = () => cy.get(':nth-child(3) > .nav-link');
  videoUpModal = () => cy.get('#videoModal');
  modalTitle = () => cy.get('#videoModalLabel');
  closeButton = () =>
    cy.get(
      '#videoModal > .modal-dialog > .modal-content > .modal-footer > .btn'
    );
  playButton = () => cy.get('.vjs-poster');
  videoPlayback = () => cy.get('#example-video_html5_api');

  // Actions and Asserts

  clickOnAboutUs() {
    this.aboutUsLink().click().wait(1000);
  }
  clickOnCloseButton() {
    this.closeButton().click({ force: true });
  }
  clickOnPlayButton() {
    this.playButton().click();
  }
  videoModalShoulNotBeVisible() {
    this.videoUpModal().should('not.be.visible');
  }
  modalTitleShouldHaveText(text) {
    this.modalTitle().should('have.text', text);
  }
  videoPlaybackShouldBeVisible() {
    this.videoPlayback().should('be.visible');
  }
}
