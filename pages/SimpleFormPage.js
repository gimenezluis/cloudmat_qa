class SimpleFormPage {
  constructor(page) {
    this.page = page;
    this.url = 'https://www.lambdatest.com/selenium-playground/simple-form-demo';
    this.inputMessage = '#user-message';
    this.showMessageButton = '#showInput';
    this.mensagemParagrafo = this.page.locator('#message');
    this.getCheckedValue = this.page.locator('#showInput');
    this.getSum = this.page.locator('button', { hasText: 'Get Sum' });




    this.inputA = '#sum1';
    this.inputB = '#sum2';
    this.getTotalButton = '#gettotal';
    this.resultText = '#addmessage';
  }

  async navegar() {
    await this.page.goto(this.url);
  }

  async digitarMensagem(texto) {
    await this.page.fill(this.inputMessage, texto);
    await this.page.click(this.showMessageButton);
  }

  async obterMensagemExibida() {
    await this.mensagemParagrafo.waitFor({ state: 'visible' });
    return await this.mensagemParagrafo.textContent();
  }

  async preencherValoresESomar(a, b) {
    await this.page.fill(this.inputA, a.toString());
    await this.page.fill(this.inputB, b.toString());
    await this.page.click(this.getTotalButton);
  }

  async obterResultadoSoma() {
    return this.page.textContent(this.resultText);
  }

  async clickGetValue() {
    await this.getCheckedValue.click();
  }

  async clickGetSum() {
    await this.getSum.click();
  }
  

  
}

module.exports = SimpleFormPage;
