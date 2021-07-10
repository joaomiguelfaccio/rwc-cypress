import login from '../support/pages/login'
import Routes from '../support/routes-login'

context('Login', { browser: '!firefox' }, () => {
    beforeEach(() => {
        // Arrange (Preparação)
        Routes.init();
    });
    it('Realizar login com sucesso', () => {
        // Arrange (Preparação)
        login.acessarLogin();
        // Action (Execução)
        login.preencherFormulario();
        login.submeterFormulario();
        // Assert (Validação)
        login.confirmacaoLogado();
    });
});


