Feature: Exibição de Alertas com Bootstrap

  @Alert_Autoclosable
  Scenario: Visualizar alerta com fechamento automatico
    Given que estou na página de mensagens com Bootstrap
    When eu clico no botão "Autoclosable success message"
    Then o alerta deve desaparecer automaticamente após alguns segundos

  @Alert_Normal
  Scenario: Visualizar alerta normal
    Given que estou na página de mensagens com Bootstrap
    When eu clico no botão "Normal success message"
    Then o alerta deve permanecer visível até que eu feche manualmente
