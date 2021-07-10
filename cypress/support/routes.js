class Routes {
    as = {
        postUsers: 'postUsers',
        getTags: 'getTags',
        getArticlesFeed: 'getArticlesFeed',
        getProfiles: 'getProfiles',
        getArticlesAuthor: 'getArticlesAuthor',
        postArticles: 'postArticles',
        getArticlesTitle: 'getArticlesTitle',
        getArticlesComments: 'getArticlesComments'
    }

    initLogin() {
        cy.intercept('POST', '**/api/users/login').as(this.as.postUsers);
        cy.intercept('GET', '**/api/tags').as(this.as.getTags);
        cy.intercept('GET', '**/api/articles/feed**').as(this.as.getArticlesFeed);
    }

    initCadastro() {
        cy.intercept('POST', '**/api/users').as(this.as.postUsers);
        cy.intercept('GET', '**/api/tags').as(this.as.getTags);
        cy.intercept('GET', '**/api/articles/feed**').as(this.as.getArticlesFeed);
        cy.intercept('GET', '**/api/profiles/**').as(this.as.getProfiles);
        cy.intercept('GET', '**/api/articles**').as(this.as.getArticlesAuthor);
    }

    initArticles() {
        cy.intercept('POST', '**/api/articles').as(this.as.postArticles);
        cy.intercept('GET', '**/api/articles/agilizei-titulo-**').as(this.as.getArticlesTitle);
        cy.intercept('GET', '**/api/articles/agilizei-titulo-**/comments').as(this.as.getArticlesComments);
    }
}

export default new Routes()