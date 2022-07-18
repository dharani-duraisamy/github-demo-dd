
export class feedbackPage{

    static feedbackName(){
        cy.get('#name').type('Name');
    }
    static  feedbackEmail(){
        cy.get('#email').type('Email');
    }
    static  feedbackSubject(){
        cy.get('#subject').type('Subject');
    }
    static  feedbackComment(){
        cy.get('#comment').type('Please do not send any account information in a message sent from here');
    }
}