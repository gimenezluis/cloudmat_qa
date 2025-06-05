const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const SimpleFormPage = require('../../pages/SimpleFormPage');

Given('que estou na página do formulário simples', async function () {
  this.formPage = new SimpleFormPage(this.page);
  await this.formPage.navegar();
});

When('eu digito {string} no campo de mensagem', async function (mensagem) {
  await this.formPage.digitarMensagem(mensagem);
});

When('clico no botão Get Value', async function () {
  await this.formPage.clickGetValue();
});

Then('devo ver a mensagem {string} exibida', async function (esperado) {
  const mensagem = await this.formPage.obterMensagemExibida();
  expect(mensagem).toContain(esperado);
});

When('eu preencho o campo A com {string} e o campo B com {string}', async function (a, b) {
  await this.formPage.preencherValoresESomar(a, b);
});

When('clico no botão Get Sum', async function () {
  await this.formPage.clickGetSum();
});

Then('o resultado exibido deve ser {string}', async function (resultado) {
  const total = await this.formPage.obterResultadoSoma();
  expect(total).toBe(resultado);
});
