class Routes {

    as = {
        postArticles: 'postArticles',
        getArticlesTitle: 'getArticlesTitle',
        getArticlesComments: 'getArticlesComments'
    }

    init() {
        cy.intercept('POST', '**/api/articles').as(this.as.postArticles);
        cy.intercept('GET', '**/api/articles/agilizei-titulo-**').as(this.as.getArticlesTitle);
        cy.intercept('GET', '**/api/articles/agilizei-titulo-**/comments').as(this.as.getArticlesComments);
    }
}

export default new Routes()