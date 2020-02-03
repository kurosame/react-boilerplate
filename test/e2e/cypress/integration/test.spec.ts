/* eslint-disable spaced-comment */
/// <reference types="Cypress" />
/* eslint-enable spaced-comment */

context('Test', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Initial display', () => {
    cy.get('[data-test="count"]').should('have.text', '0')
    cy.get('[data-test="saga-count"]').should('have.text', '0')

    cy.get('#root').screenshot('initial-display')
  })

  it('Click the add-count, update the count', () => {
    cy.get('[data-test="add-count"]').click()

    cy.get('[data-test="count"]').should('have.text', '1')
    cy.get('[data-test="saga-count"]').should('have.text', '0')

    cy.get('#root').screenshot('add-count')
  })

  it('Click the add-saga-count, update the sagaCount', () => {
    cy.get('[data-test="add-saga-count"]').click()

    cy.get('[data-test="count"]').should('have.text', '0')
    cy.get('[data-test="saga-count"]').should('have.text', '2')

    cy.get('#root').screenshot('add-saga-count')
  })
})
