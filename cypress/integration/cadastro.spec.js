describe(
    'Cadastro', ()=> {
        it('Seja um entregador',()=>{
            cy.viewport(1920, 1080)
            cy.visit('https://buger-eats.vercel.app/')
            cy.get('a[href="/deliver"]').click()          
        })
})