describe('DemoQA Tests', () => {

    it('tc-01 - should fill out the text box form and submit', () => {
        cy.visit('https://demoqa.com/text-box')
        cy.get('#userName').type('John Doe')
        cy.get('#userEmail').type('john.doe@example.com')
        cy.get('#currentAddress').type('123 Main St')
        cy.get('#permanentAddress').type('456 Another St')
        cy.get('#submit').click()
        cy.get('#output #name').should('have.text', 'Name:John Doe')
        cy.get('#output #email').should('have.text', 'Email:john.doe@example.com')
        cy.get('#output #currentAddress').should('contain.text', '123 Main St')
        cy.get('#output #permanentAddress').should('contain.text', '456 Another St')
    })

    it('tc-02 - should click all buttons and verify actions', () => {
        cy.visit('https://demoqa.com/buttons')
        cy.get('#doubleClickBtn').dblclick()
        cy.get('#doubleClickMessage').should('have.text', 'You have done a double click')
        cy.get('#rightClickBtn').rightclick()
        cy.get('#rightClickMessage').should('have.text', 'You have done a right click')
        cy.contains('Click Me').click()
        cy.get('#dynamicClickMessage').should('have.text', 'You have done a dynamic click')
    })

    it.only('tc-03 - should add a new record and delete it', () => {
        cy.visit('https://demoqa.com/webtables')
        cy.get('#addNewRecordButton').click()
        cy.get('#firstName').type('John')
        cy.get('#lastName').type('Doe')
        cy.get('#userEmail').type('john.doe@example.com')
        cy.get('#age').type('30')
        cy.get('#salary').type('10000')
        cy.get('#department').type('IT')
        cy.get('#submit').click()
        cy.get('.rt-tbody').should('contain.text', 'John')
        cy.get('.rt-tbody').should('contain.text', 'Doe')
        cy.get('.rt-tbody').contains('John').parent().find('[title="Delete"]').click()
        cy.get('.rt-tbody').should('not.contain.text', 'John')
    })



})
