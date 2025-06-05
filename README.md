
# 🧪 Desafio Técnico de QA - LambdaTest Playground

Este projeto tem como objetivo automatizar cenários de teste da plataforma [LambdaTest Playground](https://www.lambdatest.com/selenium-playground) utilizando **Playwright**, **Cucumber.js**, **BDD** e o padrão **Page Object Model (POM)**.

---

## 📌 Funcionalidades Automatizadas

### ✅ Input Form Demo
- Envio de formulário vazio, validando mensagens nativas (`validationMessage`).
- Envio de formulário com dados válidos, validando a mensagem de sucesso.

### ✅ Simple Form Demo
- Exibir mensagem com base no input do usuário.
- Somar dois valores informados nos campos A e B.

### ✅ Bootstrap Alert Messages Demo
- Validar alerta autoclosável desaparecendo após 5 segundos.
- Validar alerta manual que permanece até o clique no botão de fechar.

---

## 🔧 Tecnologias Utilizadas

- Node.js
- Playwright
- Cucumber.js
- JavaScript (ES6+)
- Page Object Model

---

## 📁 Estrutura do Projeto

```
cloudmat_qa/
├── features/
│   ├── step_definitions/     → Steps organizados por funcionalidade
│   ├── support/              → Hooks de execução (Before/After)
│   └── *.feature             → Arquivos Gherkin BDD
├── pages/                    → Page Objects (mapeamento e ações)
├── utils/                    → browserManager centralizado
├── .vscode/                  → Configurações de debug no VS Code
├── package.json              → Dependências do projeto
├── cucumber.js               → Configuração Cucumber
└── README.md                 → Documentação do projeto
```

---

## 🚀 Como Executar o Projeto

### 1. Instalar dependências
```bash
npm install
```

### 2. Instalar os navegadores do Playwright
```bash
npx playwright install
```

### 3. Executar todos os testes
```bash
npx cucumber-js
```

### 4. Executar feature específica
```bash
npx cucumber-js features/InputForm.feature
```

### 5. Executar cenários com tag
```bash
npx cucumber-js --tags @inputform
```

---
## 📌 Observações Importantes

- O projeto está modularizado por página e por contexto de testes.
- O controle do navegador é centralizado via `browserManager.js`.
- O `validationMessage` HTML5 foi utilizado para validação de campos obrigatórios.
- O desaparecimento de alertas foi tratado com `waitForFunction` para garantir robustez.

---

## Luis Gimenez
