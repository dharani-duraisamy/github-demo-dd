

describe('Assessment', () => {
    it('zeroBank Feedback', () => {
        cy.fixture('assessment/zeroBank.json').then(
            (testdata)=> {
                const data = testdata
            
        cy.visitHomepage();
        cy.visitFeedbackpage();
        cy.get('#name').type(data.name);
        cy.get('#email').type(data.email);
        cy.get('#subject').type(data.subject);
        cy.get('#comment').type(data.comments)
        cy.get('.btn-signin').click()
        // cy.get('feedback-title').should('have.text', 'Feedback')
        // Thank you for your comments, sdbv. They will be reviewed by our Customer Service staff and given the full attention that they deserve.')
        
         
              })
        })
    })