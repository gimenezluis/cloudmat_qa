class BootstrapAlertPage {
  constructor(page) {
    this.page = page;
    this.url = 'https://www.lambdatest.com/selenium-playground/bootstrap-alert-messages-demo';
    this.autoCloseButton = 'button:has-text("Autoclosable Success Message")';
    this.alertSelector = '.alert-autocloseable-success, .alert-normal-success';

    this.normalButton = 'button:has-text("Normal Success Message")';

  }

  async navegar() {
    await this.page.goto(this.url);
  }

  async clicarBotaoAutoclosable() {
    await this.page.click(this.autoCloseButton);
  }

  async clicarBotaoNormal() {
    await this.page.click(this.normalButton);
  }

  async alertaVisivel() {
    return this.page.isVisible(this.alertSelector);
  }

  async esperarDesaparecerAlerta() {
    await this.page.waitForTimeout(6000);
    return this.page.$(this.alertSelector);
  }
}

module.exports = BootstrapAlertPage;
