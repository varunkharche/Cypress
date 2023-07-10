export class loginpage1 
{
    
navigate(url)
{
    
    cy.visit(url) 
}
enterusername(email)
{
    cy.get('#Email').type(email)
}
enterpassword(password)
{
    cy.get('#Password').type(password)
}
clicklogin()
{
    cy.get('#submit').click()
}


}