export class loginnet
{

    navigatee(url)
    {
        cy.visit(url)
    }
    enterusername(unname)
    {
        cy.get('#uname').type(unname)
    }
    enterpassword(pwdd)
    {
        cy.get('#pwd').type(pwdd)

    }
    login(loginn)
    {
        cy.get('[type="submit"]').click()
    }

}