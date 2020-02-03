/* eslint-disable spaced-comment */
/// <reference types="Cypress" />
/* eslint-enable spaced-comment */

context('Test', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Initial display', () => {
    cy.get('[data-test="count"]')
      .first()
      .should('have.text', '0')
    cy.get('[data-test="count"]')
      .last()
      .should('have.text', '0')

    cy.get('#root').screenshot('initial-display')
  })

  it('Click the add-count, update the count', () => {
    cy.get('[data-test="add-count"]')
      .first()
      .click()

    cy.get('[data-test="count"]')
      .first()
      .should('have.text', '1')
    cy.get('[data-test="count"]')
      .last()
      .should('have.text', '0')

    cy.get('#root').screenshot('add-count')
  })

  it('Click the add-count for saga, update the count for saga', () => {
    cy.get('[data-test="add-count"]')
      .last()
      .click()

    cy.get('[data-test="count"]')
      .first()
      .should('have.text', '0')
    cy.get('[data-test="count"]')
      .last()
      .should('have.text', '2')

    cy.get('#root').screenshot('add-count-saga')
  })
})
