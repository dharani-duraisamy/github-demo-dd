import { contains } from "cypress/types/jquery"

describe('Assessment', () => {
    it('Pet Store - Registration', () => {
            cy.fixture('assessment/petStore.json').then(
            (testdata)=> {
                const data = testdata

            cy.petstoreHomepage()
            cy.petstoreSignpage()
            cy.get('#Catalog > a').click()
            
            // Registration
            cy.get('[name="username"]').type(data.userId)
            cy.get(':nth-child(2) > tbody > :nth-child(2) > :nth-child(2) > input').type(data.newPassword)
            cy.get(':nth-child(2) > tbody > :nth-child(3) > :nth-child(2) > input').type(data.repeatPassword)
            cy.get(':nth-child(4) > tbody > :nth-child(1) > :nth-child(2) > input').type(data.firstName)
            cy.get(':nth-child(4) > tbody > :nth-child(2) > :nth-child(2) > input').type(data.lastName)
            cy.get(':nth-child(4) > tbody > :nth-child(3) > :nth-child(2) > input').type(data.email)
            cy.get(':nth-child(4) > tbody > :nth-child(4) > :nth-child(2) > input').type(data.phone)
            cy.get(':nth-child(5) > :nth-child(2) > input').type(data.address1)
            cy.get(':nth-child(6) > :nth-child(2) > input').type(data.address2)
            cy.get(':nth-child(7) > :nth-child(2) > input').type(data.city)
            cy.get(':nth-child(8) > :nth-child(2) > input').type(data.state)
            cy.get(':nth-child(9) > :nth-child(2) > input').type(data.zip)
            cy.get(':nth-child(10) > :nth-child(2) > input').type(data.country)
            cy.get(':nth-child(1) > :nth-child(2) > select').select(data.LanguagePreference)
            cy.get(':nth-child(2) > :nth-child(2) > select').select(data.favouriteCategory)
            cy.get(':nth-child(6) > tbody > :nth-child(3) > :nth-child(2) > input').check()
            cy.get(':nth-child(6) > tbody > :nth-child(4) > :nth-child(2) > input').check()
            cy.get('[name="newAccount"]').click()
            })
         })

        it('Pet Store - Login', () => {
            cy.fixture('assessment/petStore.json').then(
                (testdata)=> {
                    const data = testdata
                    
            // Login
            cy.petstoreSignpage()
            cy.get('[name="username"]').type(data.userId)
            cy.get('[name="password"]').clear()
            cy.get('[name="password"]').type(data.newPassword)
            cy.get('[name="signon"]').click()
            })
            })

        it('Pet Store - Validations', () => {
            cy.fixture('assessment/petStore.json').then(
                (testdata)=> {
                    const data = testdata

            // Keyboard Event
            cy.get('[size="14"]').type('dog{enter}')

            // Screenshot
            cy.screenshot({capture : "fullPage"})

            cy.get('#BackLink > a').click()
            cy.get('#SidebarContent > [href="/actions/Catalog.action?viewCategory=&categoryId=CATS"] > img').click()
            cy.get('tbody > :nth-child(3) > :nth-child(1) > a').click()
            cy.get('tbody > :nth-child(2) > :nth-child(1) > a').click()
            cy.screenshot({capture : "fullPage"})
            cy.get('font').contains(data.catName)
            cy.get(':nth-child(4) > td').contains(data.species)
            // cy.get(':nth-child(5) > td').contains(data.inStock)
            cy.get(':nth-child(6) > td').contains(data.rate)
            cy.get('.Button').click()
            cy.get('#BackLink > a').click()
        })
    })

})

