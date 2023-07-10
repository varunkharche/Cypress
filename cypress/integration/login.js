
import { loginpage1 } from "./Pages/Login_page"

 const loginpage = new loginpage1()

it('Test',function()
{

    loginpage.navigate('https://www.contrado.co.uk/')   
    cy.get('.login__ico > svg').click()
    loginpage.enterusername('varunk@contrado.com')
    loginpage.enterpassword('Qwer@123')
    loginpage.clicklogin()
 
})