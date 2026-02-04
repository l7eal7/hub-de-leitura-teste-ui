describe('funcionalidade: contato', () =>{



    beforeEach(() => {
    cy.visit('index.html')

    })

it('deve preencher formulário de contato com sucesso', () =>{


cy.get('[name="name"]').type('Ulisses')
cy.get('[name="email"]').type('ulisses@teste.com')
cy.get('[name="subject"]').select('Parcerias')
cy.get('[name="message"]').type('mensagem de teste')
cy.get('#btn-submit').click()
cy.contains('Contato enviado com sucesso!').should('exist');
});


it("deve validar mensagem de erro sem preencher nome", () =>{

cy.get('[name="name"]').type('Ulisses').clear()
cy.get('[name="email"]').type('ulisses@teste.com')
cy.get('[name="subject"]').select('Parcerias')
cy.get('[name="message"]').type('mensagem de teste')
cy.get('#btn-submit').click()
cy.get('#alert-container').should('contain', 'Por favor, preencha o campo Nome.');
});


it("deve validar mensagem de erro sem preencher email", () =>{

cy.get('[name="name"]').type('Ulisses')
cy.get('[name="email"]').type('ulisses@teste.com').clear()
cy.get('[name="subject"]').select('Parcerias')
cy.get('[name="message"]').type('mensagem de teste')
cy.get('#btn-submit').click()
cy.get('#alert-container').should('contain', 'Por favor, preencha o campo E-mail.');
});

it("deve validar mensagem de erro sem preencher sem selecionar o asunto", () =>{

cy.get('[name="name"]').type('Ulisses')
cy.get('[name="email"]').type('ulisses@teste.com')
//cy.get('[name="subject"]').select('Parcerias')
cy.get('[name="message"]').type('mensagem de teste')
cy.get('#btn-submit').click()
cy.get('#alert-container').should('contain', 'Por favor, selecione o Assunto.');
});

 it("deve validar mensagem de erro sem preencher mensagem", () =>{

cy.get('[name="name"]').type('Ulisses')
cy.get('[name="email"]').type('ulisses@teste.com')
cy.get('[name="subject"]').select('Parcerias')
//cy.get('[name="message"]').type('mensagem de teste')
cy.get('#btn-submit').click()
cy.get('#alert-container').should('contain', 'Por favor, escreva sua Mensagem.');
 });

})