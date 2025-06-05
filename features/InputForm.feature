Feature: Validação do Formulário de Entrada

  @formulario_vazio
  Scenario: Enviar formulário vazio
    Given que estou na página do formulário de entrada
    When eu tento enviar o formulário sem preencher os campos
    Then devo ver mensagens de validação

  @formulario_valido
  Scenario: Enviar formulário com dados válidos
    Given que estou na página do formulário de entrada
    When eu preencho todos os campos obrigatórios corretamente
    And envio o formulário
    Then deve exibir a mensagem 'Thanks for contacting us, we will get back to you shortly.'
