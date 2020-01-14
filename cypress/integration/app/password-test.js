

describe('Test Invalid password', () => {
  it('Enter url', () => {
    cy.visit('http://the-internet.herokuapp.com/forgot_password')
  })
  it('Input an invalid password', () =>{
    cy.get('#email').type('test@test.test')
  })
  it('Click Retrive Password button', () =>{
    cy.get('.icon-2x').click()
  })
  it('Verify that retrival email has been sent', ()=>{
    cy.contains("Your e-mail's been sent!").should('be.visible') 
  })
  
})