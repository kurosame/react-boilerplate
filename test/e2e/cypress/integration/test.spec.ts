/* eslint-disable-next-line spaced-comment */
/// <reference types="Cypress" />

context('Test', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Initial display', () => {
    cy.get('[data-testid="count"]')
      .eq(0)
      .should('have.text', '0')
    cy.get('[data-testid="count"]')
      .eq(1)
      .should('have.text', '0')

    cy.get('#root').screenshot('initial-display')
  })

  it('Click `add-count`, update `count`', () => {
    cy.get('[data-testid="add-count"]')
      .eq(0)
      .click()

    cy.get('[data-testid="count"]')
      .eq(0)
      .should('have.text', '1')
    cy.get('[data-testid="count"]')
      .eq(1)
      .should('have.text', '0')

    cy.get('#root').screenshot('add-count')
  })

  it('Click `add-count` for saga, update `count` for saga', () => {
    cy.get('[data-testid="add-count"]')
      .eq(1)
      .click()

    cy.get('[data-testid="count"]')
      .eq(0)
      .should('have.text', '0')
    cy.get('[data-testid="count"]')
      .eq(1)
      .should('have.text', '2')

    cy.get('#root').screenshot('add-count-saga')
  })
})
