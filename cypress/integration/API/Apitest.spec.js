describe('API testing',()=>{

    it('GET 1',()=>{

            cy.request({

                'method' : 'GET',
                'url' : 'https://reqres.in/api/users?page=2',
                'headers' : {
                    'content-type' : 'application/json',

                },
                auth: {
                 'username' : 'user',
                 'password' : 'user1'   

                }

            })
                .then((response) =>{

                    expect(response).to.have.property('status',200)
                    expect(response.status).to.equal(200);
                    expect(response.body).not.be.null;
                    expect(response.body.data).to.have.length(6)
                    expect(response.body).to.have.property('total',12)
                    expect(response.body).to.have.property('total_pages',2)
                    

                })
    })

    it('GET 2',()=>{

        cy.request('https://api.crucible.cloud/api/Website/GetWebsiteByUrl?Url=https%3A%2F%2Fwww.contrado.com')

            .then((response)=>{
                expect(response).to.have.property('status',200)
                expect(response.body).not.be.null;
                expect(response.body.payload).to.have.property('isEmailActive',true)
                expect(response.body.message).not.be.null;

            })
    })

    it('POST 1',()=>{

        cy.request({
            'method' :'POST',
            'url' : 'https://reqres.in/api/users',
            'body' : {

                "name": "Varun",
                "job": "Lead"
            }
            

        })
        
            .then((response)=>{
                expect(response).to.have.property('status',201)
            })
    })
})