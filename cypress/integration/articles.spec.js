/// <reference types="cypress" />

import articles from '../support/pages/articles'


context('Publicações', () => {
    /*
        hooks => momentos antes / depois do teste
        before / beforeEach
        after / afterEach
    */
    beforeEach(() => {
        cy.backGroundLogin();
        articles.acessarFormularioDePublicacao();
    });

    it('Criar uma nova publicação', () => {
        articles.preencherFormulario();

        articles.submeterPublicacao();

        articles.validarSubmissaoPublicacao();


    });

    it('Criar uma nova publicação 2', () => {
        articles.preencherFormulario();

        articles.submeterPublicacao();

        articles.validarSubmissaoPublicacao();


    });
});

