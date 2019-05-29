
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

describe('Login and logout on serviceNow', () => {
    it('Visits the vehicle checks site', () => {
      cy.visit('https://sainsburystest.service-now.com/login.do')


      cy.get('#user_name').type('Ade.Test')
      cy.get('#user_password').type('Pie')
      cy.get('#sysverb_login').click()
    })
})





