# Desenvolvimento Web com React

Este repositório reúne **16 exercícios práticos** desenvolvidos ao longo da disciplina **Desenvolvimento Web com React [25E1]**, cobrindo desde conceitos básicos de roteamento até Hooks avançados e manipulação de eventos. Todas as respostas dissertativas estão compiladas no PDF anexo.

## 🔧 Tecnologias e Ferramentas

- **React 18** (componentes funcionais e de classe)  
- **React Router 6** (rotas simples, dinâmicas e aninhadas)  
- **Hooks**: `useState`, `useEffect`, `useLayoutEffect`, `useReducer`  
- **Vite** (ou Create-React-App) para bootstrap e live-reload  
- **CSS puro** para estilização modular por componente

## 🚀 Como rodar

1. **Clone** este repositório  
   ```sh
   git clone https://github.com/AndreFerrarez/Meu-App.git
Vite
npm run dev
Create-react-app
npm start
http://localhost:3000 (ou 5173 no Vite) 

Para a realizacao do exercicio 11 adicinal " /event.html "

– As respostas às questões teóricas e dissertativas estão compiladas em PDF

## 📂 Estrutura do Projeto
public/
├── dados.json         # Dados de exemplo para useEffect
└── event.html         # Demonstração de evento em HTML+JS puro

src/
├── components/        # Componentes e demos de hooks
│   ├── Counter.jsx
│   ├── CustomButton.jsx
│   ├── DataList.jsx
│   ├── EventExample.jsx
│   ├── EventThisExample.jsx
│   ├── FormCadastro.jsx
│   ├── FormValidation.jsx
│   ├── Navigation.jsx
│   ├── Nav.jsx
│   ├── Tarefas.jsx
│   ├── TarefasReducer.jsx
│   ├── UseLayoutEffectExample.jsx
│   ├── ValueWatcher.jsx
│   ├── ButtonWithArg.jsx
│   └── CounterBind.jsx
├── pages/             # Páginas com React Router
│   ├── Home.jsx
│   ├── Sobre.jsx
│   ├── Contato.jsx
│   ├── Visitante.jsx
│   ├── Administrador.jsx
│   ├── Equipe.jsx
│   └── Servicos.jsx
├── App.jsx            # Configuração de rotas e layout global
├── global.css         # Tema escuro e centralização
└── main.jsx           # Ponto de entrada (Vite) ou index.js (CRA)

