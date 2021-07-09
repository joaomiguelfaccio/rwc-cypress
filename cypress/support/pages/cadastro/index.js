const faker = require('faker');

const el = require('./elements').ELEMENTS
let fullName = faker.name.firstName() + " " + faker.name.lastName();

class Cadastro {


    acessarFormularioDeCadastro() {
        cy.visit('register');
    }

    preencherCadastro() {
        cy.get(el.inputUserName).type(fullName);
        cy.get(el.inputEmail).type(faker.internet.email());
        cy.get(el.inputPassword).type(123456789);
    }

    submeterCadastro() {
        cy.get(el.buttonSubmit).click();
    }

    validarCadastroSucesso() {
        cy.get(el.linkUserName).should('contain.text', fullName).click()
        cy.get(el.h4UserName).should('contain.text', fullName)
    }

}
export default new Cadastro();