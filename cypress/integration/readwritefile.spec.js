/// <reference types='cypress' />
describe('Read Write File Test', ()=>{

    beforeEach(function(){
        cy.fixture('example.json').as('data')
    })

    it('Read File using fixture',()=>{

        cy.fixture('example.json')

            .its('name').should('eq','cypress')

      
    })

    it('Read file', function(){

        cy.readFile('./cypress/fixtures/example.json')

            .its('name').should('eq','cypress')
    })

    it('Write file',function(){

        cy.writeFile('sample.txt','Hello, we are learing to write file')
        cy.writeFile('sample.txt','\nHello, VK howdy ?', {flag:'a+'})
        
        
    })
})