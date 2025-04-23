# 🔐 Sistema de Login com Flask + JWT + HTML/JS

Um projeto simples de autenticação de usuários usando **Flask**, **JWT** e uma interface leve com **HTML/CSS/JS puro**. Ideal para quem quer aprender como funciona um login com token JWT e proteção de rotas.

---

## ✨ Funcionalidades

- Cadastro de novos usuários
- Login com geração de token JWT
- Proteção de páginas (somente com token válido)
- Logout (remoção do token)
- Interface leve e funcional com HTML/CSS/JS
- Redirecionamentos automáticos entre páginas

---

## ⚙️ Tecnologias Utilizadas

**Back-end:**
- Flask
- Flask-JWT-Extended
- SQLAlchemy
- Flask-CORS

**Front-end:**
- HTML5
- CSS3
- JavaScript (vanilla)

---

## 🧱 Estrutura do Projeto

```bash
project/
├── app.py              # Arquivo principal do Flask (rotas e API)
├── config.py           # Configurações da aplicação (chave secreta, DB)
├── models.py           # Definição da tabela de usuários
├── requirements.txt    # Lista de dependências
│
├── templates/          # Páginas HTML
│   ├── index.html          # Tela de login
│   ├── register.html       # Tela de cadastro
│   └── protected.html      # Página protegida (usuário logado)
│
├── static/             # Arquivos estáticos (JS/CSS)
│   └── script.js           # Scripts JS para login, logout e registro
│
└── instance/           # Diretório para o banco de dados SQLite
    └── app.db              # Arquivo do banco de dados
```

## 🚀 Como executar o projeto

Instale as dependências:

```
pip install -r requirements.txt
```

Execute o app:

```
python app.py
```
Acesse no navegador:
http://localhost:5000

## 🧪 Testando o sistema
Acesse a página de cadastro para criar um novo usuário.

Faça login com o usuário criado.

Você será redirecionado para a área protegida.

Clique em "Sair" para encerrar a sessão.
