const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const BootstrapAlertPage = require('../../pages/BootstrapAlertPage');

Given('que estou na página de mensagens com Bootstrap', async function () {
  this.alertsPage = new BootstrapAlertPage(this.page);
  await this.alertsPage.navegar();
});

When('eu clico no botão "Autoclosable success message"', async function () {
  await this.alertsPage.clicarBotaoAutoclosable();
});

Then('o alerta deve desaparecer automaticamente após alguns segundos', {timeout: 10000}, async function () {
  await this.alertsPage.alertaVisivel();
  const visivel = await this.alertsPage.esperarDesaparecerAlerta();
  expect(visivel).toBe(null);
});

When('eu clico no botão "Normal success message"', async function () {
  await this.alertsPage.clicarBotaoNormal();
});

Then('o alerta deve permanecer visível até que eu feche manualmente', async function () {
  const visivel = await this.alertsPage.alertaVisivel();
});
