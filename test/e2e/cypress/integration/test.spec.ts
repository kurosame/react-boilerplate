/* eslint-disable spaced-comment */
/// <reference types="Cypress" />
/* eslint-enable spaced-comment */

context('Test', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Initial display', () => {
    cy.get('[data-test="count"]')
      .eq(0)
      .should('have.text', '0')
    cy.get('[data-test="count"]')
      .eq(1)
      .should('have.text', '0')

    cy.get('#root').screenshot('initial-display')
  })

  it('Click the add-count, update the count', () => {
    cy.get('[data-test="add-count"]')
      .eq(0)
      .click()

    cy.get('[data-test="count"]')
      .eq(0)
      .should('have.text', '1')
    cy.get('[data-test="count"]')
      .eq(1)
      .should('have.text', '0')

    cy.get('#root').screenshot('add-count')
  })

  it('Click the add-count for saga, update the count for saga', () => {
    cy.get('[data-test="add-count"]')
      .eq(1)
      .click()

    cy.get('[data-test="count"]')
      .eq(0)
      .should('have.text', '0')
    cy.get('[data-test="count"]')
      .eq(1)
      .should('have.text', '2')

    cy.get('#root').screenshot('add-count-saga')
  })
})
