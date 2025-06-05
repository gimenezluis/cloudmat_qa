class InputFormPage {
  constructor(page) {
    this.page = page;
    this.url = 'https://www.lambdatest.com/selenium-playground/input-form-demo';
    this.submitButton = '.selenium_btn';
    this.successMessage = this.page.locator('p.success-msg');

    this.nameInput = '[name="name"]';
    this.emailInput = 'input[placeholder="Email"]';
    this.passwordInput = '[name="password"]';
    this.companyInput = '[name="company"]';
    this.websiteInput = '[name="website"]';
    this.countrySelect = '[name="country"]';
    this.cityInput = '[name="city"]';
    this.address1Input = '[name="address_line1"]';
    this.address2Input = '[name="address_line2"]';
    this.stateInput = 'input[placeholder="State"]';
    this.zipInput = 'input[placeholder="Zip code"]';
  }

  async navegar() {
    await this.page.goto(this.url);
  }5

  async enviarFormularioVazio() {
    await this.page.click(this.submitButton);
  }

  async preencherFormularioValido() {
    try {
      await this.page.locator(this.nameInput).fill('TESTE QA');
      await this.page.locator(this.emailInput).fill('qateste@email.com');
      await this.page.locator(this.passwordInput).fill('senha123');
      await this.page.locator(this.companyInput).fill('Empresa');
      await this.page.locator(this.websiteInput).fill('https://site.com');
      await this.page.locator(this.countrySelect).selectOption('Brazil');
      await this.page.locator(this.cityInput).fill('Cidade');
      await this.page.locator(this.address1Input).fill('Rua 1');
      await this.page.locator(this.address2Input).fill('Rua 2');
      await this.page.locator(this.stateInput).fill('SP');
      await this.page.locator(this.zipInput).fill('08766554');
    } catch (e) {
      console.error('Erro ao preencher o formulário:', e);
      throw e;
    }
  }

  async enviarFormulario() {
    await this.page.click(this.submitButton);
  }

  async mensagemDeSucessoVisivel() {
    await this.successMessage.waitFor({ state: 'visible' });
    return await this.successMessage.textContent();
  }

async mensagensDeErroVisiveis() {
  await this.page.waitForTimeout(1000);
  const mensagem = await this.page.$eval('input[name="email"]', el => el.validationMessage);
  console.log('Mensagem nativa:', mensagem);
  return mensagem;
}

}

module.exports = InputFormPage;
