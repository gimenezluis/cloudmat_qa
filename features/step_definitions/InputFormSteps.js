const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const InputFormPage = require('../../pages/InputFormPage');

Given('que estou na página do formulário de entrada', async function () {
  this.inputForm = new InputFormPage(this.page);
  await this.inputForm.navegar();
});

When('eu tento enviar o formulário sem preencher os campos', async function () {
  await this.inputForm.enviarFormularioVazio();
});

Then('devo ver mensagens de validação', async function () {
  const mensagem = await this.inputForm.mensagensDeErroVisiveis();
  expect(mensagem).toContain('Preencha este campo');
});

When('eu preencho todos os campos obrigatórios corretamente', async function () {
  await this.inputForm.preencherFormularioValido();
});

When('envio o formulário', async function () {
  await this.inputForm.enviarFormulario();
});

Then('deve exibir a mensagem {string}', async function (mensagemEsperada) {
  const mensagem = await this.inputForm.mensagemDeSucessoVisivel();
  expect(mensagem.trim()).toBe(mensagemEsperada);
});
