import {
    Products
} from '../support/locator/onlineshopping'

describe('Assessment', () => {
    it('Online Shopping', () => {
        cy.fixture('assessment/onlineshopping.json').then(
            (testdata)=> {
                const data = testdata
        
        // cy.visit('https://www.saucedemo.com/')
        // cy.get('[data-test="username"]').type('standard_user')
        // cy.get('[data-test="password"]').type('secret_sauce')
        // cy.get('[data-test="login-button"]').click()
        
        
        cy.visitLoginpage()
        cy.onlineShopLogin(data.username, data.password)
  
        cy.get('[data-test="product_sort_container"]').select('Price (low to high)')
        cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click()
        cy.get(Products.shoppingCart).click()
        cy.get('[data-test="remove-sauce-labs-fleece-jacket"]').click()
        cy.get('[data-test="continue-shopping"]').click()
        cy.get(Products.lnkMenu).click()
        cy.get(Products.lnkLogout).click()

    })
})
 })
