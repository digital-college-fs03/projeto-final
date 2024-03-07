describe('Usuário desconectado', () => {
  it('A página pública carrega normalmente', () => {
    cy.visit('/')
    cy.contains('Eu sou uma página pública')
    cy.contains('Você não está logado')
  })

  it('Acessar página pública', () => {
    cy.visit('/')
    cy.contains('Pública').click()
    cy.contains('Você não está logado')
  })

  it('Acessar página privada "desconectado"', () => {
    cy.visit('/')
    cy.contains('Privada').click()
    cy.contains("É preciso estar conectado para acessar '/private'")
  })
})
