/// <reference types="cypress" />

import articles from '../support/pages/articles'
import Routes from '../support/routes'

context('Publicações', () => {

    beforeEach(() => {
        // Arrange (Preparação) - inicio
        Routes.initArticles();
        cy.backGroundLogin();
        articles.acessarFormularioDePublicacao();
        // Arrange (Preparação) - fim
    });

    it('Criar uma nova publicação 1', () => {
        // Arrange (Preparação)
        articles.preencherFormulario();
        // Action (Execução)
        articles.submeterPublicacao();
        // Assert (Validação)
        articles.validarSubmissaoPublicacao();
    });

    it('Criar uma nova publicação 2', () => {
        // Arrange (Preparação)
        articles.preencherFormulario();
        // Action (Execução)
        articles.submeterPublicacao();
        // Assert (Validação)
        articles.validarSubmissaoPublicacao();
    });
});

