Feature: Formulário Simples

  @Form_Single
  Scenario: Exibir mensagem com base no texto digitado
    Given que estou na página do formulário simples
    When eu digito "Teste automatizado" no campo de mensagem
    And clico no botão Get Value
    Then devo ver a mensagem "Teste automatizado" exibida

  @Form_Two_Sum
  Scenario: Somar dois valores
    Given que estou na página do formulário simples
    When eu preencho o campo A com "10" e o campo B com "10"
    And clico no botão Get Sum
    Then o resultado exibido deve ser "20"
