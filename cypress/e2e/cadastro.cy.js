/// <reference types="cypress" /> 

import { faker } from '@faker-js/faker';
import CadastroPage from '../support/pages/cadastro-page';
import cadastroPage from '../support/pages/cadastro-page';

describe('funcionalidade: cadastro no hub de leitura', () => {

    beforeEach(() => {
        CadastroPage.VisitarPaginaCadastro()
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

    });

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

    });

    it('deve fazer cadastro com sucesso, usando comando customizado', () => {
        let email = `teste${Date.now()}@teste.com`
        let nome = faker.person.fullName({ sex: 'female' })
        cy.preencherCadastro(nome, email, '11999999999', 'teste@123', 'teste@123')
        cy.url().should('include', 'dashboard.html')

    });

    it('deve fazer cadastro com sucesso, usando page object', () => {
        let email = `teste${Date.now()}@teste.com`
        cadastroPage.preencherCadastro('Ulsses', email, '119999999', 'senha123', 'senha123')
        cy.url().should('include', 'dashboard.html')
     });

     it('deve validar mesagem de erro sem preencher o campo nome', () => {
        cadastroPage.preencherCadastro('', 'Teste123@teste.com', '11999999999', 'teste@123', 'teste@123')
        cy.get(':nth-child(1) > .invalid-feedback').should('contain', 'Nome deve ter pelo menos 2 caracteres')
     });


})