describe('File upload test',()=>{

    it('File upload demo',()=>{
        cy.visit('https://filebin.net/')
        cy.get('#fileField').attachFile('1.png')

    })
})