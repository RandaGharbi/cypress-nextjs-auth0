context('cy.logout()', () => {

  it('should logout', () => {
    cy.login().then(() => {
      cy.visit('/');

      cy.get('[data-test="user-email"]').should((e) => expect(e).to.contain(Cypress.env('auth0Username')));
      cy.get('[data-test="user-sub"]').invoke('text').should((s) => expect(s).to.have.length.of.at.least(1));

      cy.logout();

      cy.wait(500);

      cy.get('[data-test="user-email"]').invoke('text').should((s) => expect(s).to.have.lengthOf(0));
      cy.get('[data-test="user-sub"]').invoke('text').should((s) => expect(s).to.have.lengthOf(0));
    });
  });

});
