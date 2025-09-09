# Checkpoint 4 - WebDev  
App de Anotações com Next.js  

## Descrição
Este projeto é um **aplicativo simples de anotações** desenvolvido em **Next.js** utilizando **App Router** e **React (funções e hooks)**.  

O sistema permite:  
- Criar anotações com **título** e **conteúdo**  
- Listar todas as anotações criadas  
- Excluir anotações  
- Ver detalhes de uma anotação em página dedicada  
- **Buscar** anotações por título ou conteúdo  
- Gerar automaticamente a **data/hora de criação**  

 **Importante:** As anotações ficam **apenas em memória** (usando `useState` e Context API).  
Ao recarregar a página, os dados são perdidos.  
Nenhum `localStorage` ou `sessionStorage` foi usado, conforme exigência do trabalho.  

##  Stack Utilizada
- **Next.js 15 (App Router)**  
- **React (componentes funcionais)**  
- **Hooks:** `useState`, `useEffect`, `useContext`  
- **Context API** para gerenciamento global de estado  
- **Tailwind CSS** pode ser usado apenas para estilização opcional (não obrigatório, não avaliado)  

## Fluxo do Projeto

1. **Estado Global (NotesContext)**  
   - Armazena todas as notas em um array.  
   - Implementa `addNote`, `deleteNote`, `getNoteById` e busca com `query`.  

2. **Página Principal (`/`)**  
   - `NotesForm`: cria notas novas.  
   - `SearchBar`: atualiza o texto de busca.  
   - `NotesList`: renderiza as notas filtradas.  

3. **Página de Detalhes (`/notes/[id]`)**  
   - `NoteDetail`: mostra título, conteúdo e data da anotação selecionada.  

4. **Hooks usados**  
   - `useState`: gerenciar título, conteúdo, lista de notas, query.  
   - `useEffect`: exemplo de efeito colateral (logar mudanças de notas).  
   - `useContext`: acessar e manipular notas globalmente.  

##  Como rodar o projeto

```bash
# Clonar repositório
git clone git@https://github.com/Mecdeiros/Cp-4--Web--Development.git

cd Cp-4--Web--Development.git

cd cp-checkpoint-4

# Instalar dependências
npm install

# Rodar em ambiente de desenvolvimento
npm run dev

# Acesse em:
http://localhost:3000

```

# Participantes: 
Guilherme de Medeiros RM: 561699
Mikael de Albuquerque RM: 566507
Victor Pucci Ferreira RM: 561736