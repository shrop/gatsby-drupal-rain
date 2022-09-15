describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:8000/')
    cy.get('.chakra-heading').contains('Rain Demo')
    //cy.screenshot()
  })
})
