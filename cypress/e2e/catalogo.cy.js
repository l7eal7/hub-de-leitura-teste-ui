/// <reference types="cypress" /> 

describe('funcionalidade: catálogo de livros', () => {

beforeEach(() => { 
 cy.visit('catalog.html')
});
  it('deve clicar no botão adicionar a cesta', () => {
    cy.get(':nth-child(1) > .card > .card-body > .mt-auto > .d-grid > .btn-primary').click()
    cy.get('#cart-count').should('contain', 1)
});

it('deve clicar em todos botões adicionar a cesta', () => {
   cy.get('.btn-primary').click({ multiple: true })

});

it('deve clicar no primeiro botão adicionar a cesta', () => {
    cy.get('.btn-primary').first().click()
    cy.get('#cart-count').should('contain', 1)
});

it('deve clicar no ultimo botão adicionar a cesta', () => {
     cy.get('.btn-primary').last().click()
    cy.get('#cart-count').should('contain', 1)
});
it("deve clicar no terceiro botão adicionar a cesta", () => {
    cy.get('.btn-primary').eq(2).click()
    cy.get('#cart-count').should('contain', 1)
});

it('deve adicionar o quinto livro a cesta', () => {
    cy.get('.btn-primary').eq(4).click()
    cy.get('#global-alert-container').should('contain', 'A Metamorfose')
});

it('deve clicar no livro Dom casmurro', () => {
    cy.contains('Dom Casmurro').click()
    cy.url().should('include', 'book-details.html?id=1')
    cy.get('#add-to-cart-btn').click()  
    cy.get('#alert-container').should('contain', 'Livro adicionado à cesta com sucesso!')    

});

});