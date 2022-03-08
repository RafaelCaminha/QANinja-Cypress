describe('home page', ()=>{
    it ('app deve estar online',()=>{
        cy.viewport(1920, 1080)
        cy.visit('https://buger-eats.vercel.app/')
        cy.get('*[id="page-home"]/div/main/h1').should('have.txt', 'Seja um parceiro pela Buger Eats')
    })
})
