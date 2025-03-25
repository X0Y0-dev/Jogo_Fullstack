# FECAP - Fundação Escola de Comércio Álvares Penteado

<p align="center">
<a href= "https://www.fecap.br/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhZPrRa89Kma0ZZogxm0pi-tCn_TLKeHGVxywp-LXAFGR3B1DPouAJYHgKZGV0XTEf4AE&usqp=CAU" alt="FECAP - Fundação Escola de Comércio Álvares Penteado" border="0"></a>
</p>

## Nome do Projeto

<p><strong></strong>Desafio do Aventureiro Digital</p>

## Integrantes

<a href="https://www.linkedin.com/in/gustavo-henrique-da-silva-santos-453822326?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ">`Gustavo Henrique da Silva Santos`</a>
<a href="https://www.linkedin.com/in/lucas-alves-bernardo-093871252?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">`Lucas Alves Bernardo`</a>

## Orientadores

<a href="https://www.linkedin.com/in/francisco-escobar/">`Me. Francisco de Souza Escobar`</a>

## Descrição

<p>O projeto se consiste em desenvolver um pequeno jogo interativo baseado em texto, onde o jogador assume o papel de um aventureiro que precisa tomar decisões estratégicas para avançar em uma jornada misteriosa. O jogo terá um sistema de escolhas, inventário e missões, além de efeitos visuais básicos e integração opcional com uma API para gerar desafios aleatórios.</p>

## Requisitos do projeto

### Requisitos Funcionais
<p>● O jogo deve exibir um texto narrativo inicial e permitir que o jogador escolha entre pelo menos duas opções de ação.</p>
<p>● Cada escolha deve alterar o fluxo da história, levando a novos desafios ou ao final do jogo.</p>
<p>● Deve haver pelo menos três fases diferentes, com narrativas interligadas.</p>
<p>● O jogo deve incluir um contador de vidas ou pontuação, que será alterado de acordo com as escolhas do jogador.</p>
<p>● A interface deve ser dinâmica, modificando o texto e as opções de escolha conforme o jogador avança.</p>
<p>● O jogo deve permitir reiniciar a história ao chegar em um final.</p>
<p>● O jogo deve ser modularizado, separando funções em módulos ES6 (import e export).</p>
<p>● Opcionalmente, o jogo pode consumir uma API externa para gerar desafios, como enigmas ou missões aleatórias.</p>
<p>● O progresso do jogador pode ser salvo usando localStorage (opcional).</p>

### Requisitos Não-Funcionais
<p>● O jogo deve ser executado no navegador, sem necessidade de instalação.</p>
<p>● Deve ser desenvolvido usando HTML5, CSS3 e JavaScript puro (ES6+).</p>
<p>● O código deve ser bem estruturado e comentado, seguindo boas práticas de programação.</p>
<p>● O layout deve ser minimamente estilizado para criar uma identidade visual para o jogo.</p>
<p>● Deve ser compatível com os navegadores modernos (Google Chrome, Mozilla Firefox, Edge).</p>
<p>● O desempenho deve ser otimizado para carregar rapidamente, sem travamentos.</p>
<p>● O código deve ser versionado e compartilhado no GitHub.</p>
<p>● O projeto deve incluir um README.md explicando o funcionamento do jogo e a divisão de tarefas entre a dupla.</p>


## 📂 **Estrutura do Repositório**

```
Jogo_Fullstack/
   Log/                                                       # Pasta principal contendo a documentação sobre o processo de criação do jogo
   ├── V1                                                     # Primeira versão do jogo
   ├── V2/                                                    # Segunda versão do jogo
   ├── V3/                                                    # Terceira versão do jogo.
   ├── V4/                                                    # Quarta versão do jogo
   ├── Final/                                                 # Versão final do jogo
   images/                                                    # Pasta para armazenar imagens utilizadas no projeto
   src/                                                       # Código-fonte principal
   ├── Backend/                                               # Pasta com os códigos de backend
   │   ├── Api.js/                                            # Arquivo JavaScript para portar a API
   │   ├── Funcoes.js/                                        # Arquivo JavaScript para as funções principais
   │   ├── oJogo.js/                                          # Arquivo JavaScript para portar a estrutura do jogo
   │   ├── Status.js/                                         # Arquivo JavaScript para os elementos do personagem principal
   ├── Frontend/                                              # Pasta com os códigos de frontend
   │   ├── style.css/                                         # Arquivos CSS para estilização
   │   ├── index.html                                         # Página principal do projeto
   readme.md                                                  # Documentação principal do projeto
```

## 🛠 Instalação e Execução

### 🔧 Pré-requisitos
Antes de começar, certifique-se de ter instalado:
- [GitHub Desktop](https://desktop.github.com/download/)
- [Visual Studio Code](https://code.visualstudio.com/)
- Um navegador de sua preferência

### 🛠️ Passo a Passo

1. **Clone o repositório**
   ```sh
   - Clique no botão verde "<> Code" no topo da tela inicial deste projeto.
   - Clique em "Open with GitHub Desktop".
   - Faça login no GitHub Desktop.
   - Clique em "File", "Clone Repository" e, depois, em "URL".
   - Insira a seguinte URL: https://github.com/2025-1-NADS2/Projeto1
   - Clique em "Clone".
   ```
2. **Abra o VSCode**
   ```sh
   Pressione as teclas "Win + S" ou, se preferir, abra a barra de pesquisa windows manualmente.
   Pesquise por "vscode" ou "Visual Studio Code" e abra-o.
   No VSCode clique em "File", "Open Folder" e abra a pasta que você clonou no caminho que você escolheu.
   Por exemplo: "C:\Users\nome\Downloads\Jogo_Fullstack". Este é só um exemplo, você precisa encontrar onde você salvou.
   ```
3. **Execute**
   ```sh
   Clique no símbolo com quatro quadrados no canto esquerdo de seu VSCode para abrir a barra de pesquisa de extensões.
   Procure e instale a extensão "Live Server" no VSCode.
   Agora, clique no "index.html" que está dentro da pasta "Frontend" (em src) e, depois, clique em "Go Live".
   ```

### 🖥 Extensões
Todas as extensões foram baixadas diretamente pela aba de extensões do Visual Studio Code.
1. JavaScripts (ES6) code snippets - charalampos karypidis
2. HTML CSS Support - ecmel
3. Live Server - Ritwick Dey

## 🎓 Referências

Aqui estão as referências usadas no projeto.

1. https://youtu.be/R1S_NhKkvGA?si=1CvxIFBu5EyMA1Ij
2. https://dreamina.capcut.com
3. https://opengameart.org/forums/audio
