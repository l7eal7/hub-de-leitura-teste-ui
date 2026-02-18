/// <reference types="cypress"/>

import user from "../fixtures/usuario.json"

describe('funcionalidade: login', () => {

    beforeEach(() => {
        cy.visit('login.html')
    });


    it('deve fazer login com sucesso', () => {
        cy.get('#email').type('usuario@teste.com')
        cy.get('#password').type('user123')
        cy.get('#login-btn').click()
        cy.url().should('include', 'dashboard.html')


    });

    it('deve fazer login com sucesso usando comando customizado', () => {
        cy.login('admin@teste.com', 'user123')

    });

    it('deve fazer login usando a conta admin - usando comando customizado', () => {
        cy.login('admin@biblioteca.com', 'admin123')
    })

    it('deve fazer login com sucesso, usanod importaçõa da massa de dados', () => {
      cy.login(user.email, user.senha)
    });




});
