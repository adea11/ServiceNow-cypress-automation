
// Cypress.on('uncaught:exception', (err, runnable) => {
//   // returning false here prevents Cypress from
//   // failing the test
//   return false
// })

describe('Fill Form', () => {
    it('Visit the web', () => {
      cy.visit('https://ultimateqa.com/filling-out-forms/')
      cy.get('#et_pb_contact_name_0').type('This is a test')
      cy.get('#et_pb_contact_message_0').type('Automation testing')
      cy.get('#et_pb_contact_form_0 > .et_pb_contact > .et_pb_contact_form > .et_contact_bottom_container > .et_pb_contact_submit').click()
    })
    it('Login to serviceNow', () => {
      cy.get('#user_name').type('Ade.Test')
      cy.get('#user_password').type('Pie')
      cy.get('#sysverb_login').click()
    })
})





