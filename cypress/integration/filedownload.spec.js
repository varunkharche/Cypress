/// <reference types="cypress-downloadfile"/>

describe('File download test',()=>{

    it('File download demo',()=>{

        cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg','mydownloads','Example.jpg')
    })
})