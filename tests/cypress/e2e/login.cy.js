describe('login', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/login')
    })

    it('1.1 login with valid credentials', () => {
        cy.get('[data-cy="username-input"]').type('admin')
        cy.get('[data-cy="password-input"]').type('admin321')
        cy.get('[data-cy="login-button"]').click()

        cy.url().should('equal', 'http://localhost:3000/home')
        cy.get('button').contains('Logout').should('be.visible')
    })

    it('1.2 login with invalid credentials', () => {
        cy.get('[data-cy="username-input"]').type('invalid-login')
        cy.get('[data-cy="password-input"]').type('invalid-password')
        cy.get('[data-cy="login-button"]').click()

        cy.get('[data-cy="error-message"]').contains('Invalid credentials').should('be.visible')
    })

    it('1.3 login with missing credentials', () => {
        cy.get('[data-cy="login-button"]').click()

        cy.url().should('equal', 'http://localhost:3000/login')
        cy.get('button').contains('Logout').should('not.exist')
    })

    it('1.4 login with valid credentials api', () => {
        cy.request('POST', 'http://localhost:8000/login', { username: 'admin',  password: 'admin321'})
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.token).to.not.be.empty
            })
    })    
})