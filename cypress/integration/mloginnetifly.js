import { loginnet } from "./Pages/Loginnetifly"
/// <reference types='cypress' />

describe('All login test', function () {

    const loginnett = new loginnet()

    this.beforeEach(()=>{

        loginnett.navigatee('https://trytestingthis.netlify.app/')

    })

    

    it('login with valid username', function () {

        
        loginnett.enterusername('test')
        loginnett.enterpassword('test')
        loginnett.login()
        cy.contains('Login Successful')
        cy.get('h4 > a').click()

    })

    it('Login with invalid username', function () {

        loginnett.navigatee('https://trytestingthis.netlify.app/')
        loginnett.enterusername('test123')
        loginnett.enterpassword('test')
        loginnett.login()
        cy.on('Window.alert', (txt) => {
            expect(txt).to.be.equal('Wrong Credentials! Try again!')
        })




    })

})

