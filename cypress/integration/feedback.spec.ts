import { feedbackPage } from '../support/page-object/feedback'

// const FeedbackPage = new feedbackPage()

describe('Assessment', () => {
    it('zeroBank Login', () => {
        cy.fixture('assessment/feedback.json').then(
            (testdata)=> {
                const data = testdata
            
        cy.visitHomepage();
        cy.get('#signin_button').click()
        cy.get('#user_login').type(data.username)
        cy.get('#user_password').type(data.password)
        cy.get('#user_remember_me').check()
        cy.get('.btn').click()
        cy.get(':nth-child(3) > .dropdown-toggle').click()
        cy.get('#logout_link').click()
            })
        })

    it('zeroBank Feedback', () => {
                    cy.get('#feedback > div > strong').click()
                    feedbackPage.feedbackName()
                    feedbackPage.feedbackEmail()
                    feedbackPage.feedbackSubject()
                    feedbackPage.feedbackComment()
                    cy.get('.btn-signin').click()
                   
                })
                })
    