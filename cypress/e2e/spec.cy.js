describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:8000/')
  })
})

describe("Accessibility tests", () => {
  beforeEach(() => {
      cy.visit("http://localhost:8000/").get("main")
      cy.injectAxe()
  })
  it("Has no detectable accessibility violations on load", () => {
    cy.checkA11y()
  })
})
