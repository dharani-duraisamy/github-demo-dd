
describe('Assessment', () => {
    it('zeroBank Login', () => {
        cy.fixture('assessment/zeroBank.json').then(
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
        cy.fixture('assessment/zeroBank.json').then(
                (testdata)=> {
                    const data = testdata

        cy.get('#feedback > div > strong').click()
        // cy.visitFeedbackpage();
        cy.get('#feedback-title').contains('Feedback');
        cy.get('#name').type(data.name);
        cy.get('#email').type(data.email);
        cy.get('#subject').type(data.subject);
        cy.get('#comment').type(data.comments)
        cy.get('[type="reset"]').click()
        cy.get('#name').type(data.name);
        cy.get('#email').type(data.email);
        cy.get('#subject').type(data.subject);
        cy.get('#comment').type(data.comments)
        cy.get('.btn-signin').click()
        cy.get('.offset3').contains(data.FeedbackSubmit)
         
              })
        })
    })