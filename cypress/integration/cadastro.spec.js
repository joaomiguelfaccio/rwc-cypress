import cadastro from '../support/pages/cadastro'
import Routes from '../support/routes-cadastro'

context('Cadastro', () => {
    beforeEach(() => {
        // Arrange (Preparação)
        Routes.init();
    });

    it('Cadastrar um novo usuário', () => {
        // Arrange (Preparação)
        cadastro.acessarFormularioDeCadastro()
        // Action (Execução)
        cadastro.preencherCadastro()
        cadastro.submeterCadastro()
        // Assert (Validação)
        cadastro.validarCadastroSucesso()
    });
});


