describe('Login funcionando', () => {
  const fail = {
    statusCode: 404,
    body: {
      status: 'error',
      message: 'Usuário e/ou senha inválidos',
    },
  }

  const success = {
    statusCode: 200,
    body: {
      status: 'success',
      data: {
        type: 'bearer',
        name: null,
        token: 'oat_NTE.OUZzd1RzSzR0ZVNEOEVoSzFSUE95WTNob0RWcXpnVzNOMWdGZFllaTE0Mjc1MDk5OTc',
        abilities: [
          '*',
        ],
        lastUsedAt: null,
        expiresAt: '2024-04-06T22:08:53.954Z',
      },
    },
  }
  it('Usuário e/ou senha inválidos', () => {
    cy.intercept('POST', '/api/v1/login', fail).as('login')

    cy.visit('/private')
    cy.get('input[name="username"]').type('usuario')
    cy.get('input[name="password"]').type('senha')
    cy.get('button[type="submit"]').click()

    cy.wait('@login')
    cy.wait(100)
    cy.contains('Usuário e/ou senha inválidos')

    cy.matchImageSnapshot('page 1')
  })

  it('Conexão bem sucedida', () => {
    cy.intercept('POST', '/api/v1/login', success).as('login')

    cy.visit('/private')
    cy.get('input[name="username"]').type('wilcorrea@gmail.com')
    cy.get('input[name="password"]').type('aq1sw2de3')
    cy.get('button[type="submit"]').click()

    cy.wait('@login')
    cy.wait(100)
    cy.contains('Eu sou uma página privada')

    cy.matchImageSnapshot('page 2')
  })

  it('A sessão se mantém ao trocar de tela', () => {
    cy.intercept('POST', '/api/v1/login', success).as('login')

    cy.visit('/private')
    cy.get('input[name="username"]').type('wilcorrea@gmail.com')
    cy.get('input[name="password"]').type('aq1sw2de3')
    cy.get('button[type="submit"]').click()

    cy.wait('@login')
    cy.wait(100)
    cy.contains('Pública').click()
    cy.contains('Você está logado como wilcorrea@gmail.com')
    cy.contains('Sair')

    cy.matchImageSnapshot('page 3')
  })
})
