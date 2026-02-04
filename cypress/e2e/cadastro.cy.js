/// <reference types="cypress" /> 

import { faker } from '@faker-js/faker';

describe('funcionalidade: cadastro no hub de leitura', () => {

    beforeEach(() => {
        cy.visit('register.html')
    });

    it('deve fazer cadastro com sucesso, usando função javascript.js', () => {
        let email = `teste${Date.now()}@teste.com`
        cy.get('#name').type("ulisses")
        cy.get('#email').type(email)
        cy.get('#phone').type(11999999999)
        cy.get('#password').type(123456)
        cy.get('#confirm-password').type(123456)
        cy.get('#terms-agreement').check()
        cy.get('#register-btn').click()
        cy.url().should('include', 'dashboard.html')

    })

    it('deve fazer cadastro com sucesso, usando faker', () => {
        let nome = faker.person.fullName()
        let email = faker.internet.email()
        cy.get('#name').type(nome)
        cy.get('#email').type(email)
        cy.get('#phone').type(11999999999)
        cy.get('#password').type(123456)
        cy.get('#confirm-password').type(123456)
        cy.get('#terms-agreement').check()
        cy.get('#register-btn').click()
        //um resultado esperado
        cy.url().should('include', 'dashboard.html')
        cy.get('#user-name').should('contain', nome)

    })

})