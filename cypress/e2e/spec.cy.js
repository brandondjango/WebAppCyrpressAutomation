describe('Home page', () => {
  it('The H1 contains the correct text', () => {
    cy.visit('https://example.cypress.io')
    cy.get('div.container').get('h1').contains('Kitchen Sink')
    cy.get('a').contains('get').click()
  })
})