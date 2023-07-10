/// <reference types='cypress' />

it('Google test', function(){

    cy.visit('https://www.google.com/')
    cy.get('#APjFqb').type('Automation Step by Step{enter}')

    cy.contains('Videos').click()
    //cy.get('.MUFPAc > :nth-child(4) > a').click()
})
it.only('Google test', function(){

cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
cy.get('.oxd-button').click()

cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click()


})

