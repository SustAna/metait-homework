describe('form', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/form')
    })

    it('2.1 submit form with missing data', () => {
        cy.get('[id = "email"]').type('required@axample.com')
        cy.get('[id = "message"]').type('required-message')
        cy.get('button[type = "submit"]').click()
        cy.contains('No data saved yet.').should('be.visible')

        cy.get('[id = "message"]').clear()
        cy.get('[id = "name"]').type('required-name')
        cy.get('button[type = "submit"]').click()
        cy.contains('No data saved yet.').should('be.visible')
        
        cy.get('[id = "email"]').clear()
        cy.get('[id = "message"]').type('required-message')
        cy.get('button[type = "submit"]').click()
        cy.contains('No data saved yet.').should('be.visible')
    })

    it('2.2 submit form with valid data', () => {
        cy.get('[id = "name"]').type('required-name')
        cy.get('[id = "email"]').type('required@axample.com')
        cy.get('[id = "message"]').type('required-message')
        cy.get('button[type = "submit"]').click()
        cy.get('[class="saved-item"]')
            .should('contain.text', 'required-name')
            .should('contain.text', 'required@axample.com')
            .should('contain.text', 'required-message')
    })
})

describe('button', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/button-interaction')
    })

    it('3.2 button text changes after click', () => {
        cy.get('button').contains('Press Me').click()
        cy.contains('Button has been pressed').should('be.visible')
        cy.get('button').contains('Press Me').should('have.attr', 'style', 'background-color: green;')
    })
})

describe('checkbox', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/switch-interaction')
    })

    it('4.1 checkbox toggling', () => {
        cy.get('input[type = "checkbox"]').click()
        cy.contains('The switch is ON!').should('be.visible')

        cy.get('input[type = "checkbox"]').click()
        cy.contains('The switch is OFF!').should('be.visible')
    })
})