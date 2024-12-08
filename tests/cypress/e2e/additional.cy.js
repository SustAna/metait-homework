describe('select', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/select-interaction')
    })

    it('select interaction', () => {
        cy.get('select').select('Option 3')
        cy.contains('You selected: option3').should('be.visible')
        cy.get('select').should('have.value', 'option3')
    })
})

describe('modal', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/home')
    })

    it('modal interaction', () => {
        cy.get('button').contains('Open Modal').click()
        cy.contains('This is a modal popup!').should('be.visible')
        cy.get('button').contains('Close Modal').should('be.visible')
    })
})

describe('contact us', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/home')
    })

    it('contact button interaction', () => {
        cy.get('button').contains('Go to Contact Us').click()
        cy.url().should('equal', 'http://localhost:3000/contact')
        cy.contains('Address: Lidická 31, 602 00 Brno, Czech Republic').should('be.visible')
    })
})

describe('items', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/home')
    })

    it('add item interaction', () => {
        cy.get('button').contains('Add New Item').click()
        cy.contains('Item 4').should('be.visible')
        cy.get('[class = "drag-item"]').should('have.length', '4')
    })   

    it('delete all item interaction', () => {
        cy.get('button[class = "delete-all-button"]').click()
        cy.get('[class="drag-item"]').should('have.length', '0')
    })
})