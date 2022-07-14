declare namespace Cypress {
    interface Chainable {
        visitLoginpage(): Chainable<Element>
        visitHomepage(): Chainable<Element>
        visitFeedbackpage(): Chainable<Element>
        petstoreHomepage(): Chainable<Element>
        petstoreSignpage(): Chainable<Element>
        onlineShopLogin(username: string, password: string): Chainable<Element>
        // visitHomepage(): Chainable<Element>
        // visitFeedbackpage(): Chainable<Element>

    }
}

Cypress.Commands.add('visitLoginpage', () => {
    cy.visit('https://www.saucedemo.com/')
})

Cypress.Commands.add('onlineShopLogin', (username, password) => {
    cy.get('[data-test="username"]').type(username)
    cy.get('[data-test="password"]').type(password)
    cy.get('[data-test="login-button"]').click()
})

Cypress.Commands.add('visitHomepage', () => {
    cy.visit('http://zero.webappsecurity.com/')
})

Cypress.Commands.add('visitFeedbackpage', () => {
    cy.visit('http://zero.webappsecurity.com/feedback.html')
})

Cypress.Commands.add('petstoreHomepage', () => {
    cy.visit('https://petstore.octoperf.com/actions/Catalog.action')
})

Cypress.Commands.add('petstoreSignpage', () => {
    cy.visit('https://petstore.octoperf.com/actions/Account.action?signonForm=')
})