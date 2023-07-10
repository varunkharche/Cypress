it('Learning assertion',function(){

    cy.visit('https://example.cypress.io/')
    cy.get(':nth-child(4) > .row > .col-xs-12 > .home-list > :nth-child(1) > ul > :nth-child(1) > a').click()

    cy.get('#query-btn')
    .should('contain','Button')
    .should('have.class','query-btn')

    cy.get('.btn > span')
    .should('contain','Save Form')

    cy.get('[data-cy=submit]')
    .should('contain','Submit')

    //Explicit assertion

    let name = 'Sukruti'
    expect(name).to.be.equal('Sukruti')




})