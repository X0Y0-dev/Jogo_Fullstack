/*

██    ██  █████  ██████  ██  █████  ██    ██ ███████ ██ ███████
██    ██ ██   ██ ██   ██ ██ ██   ██ ██    ██ ██      ██ ██
██    ██ ███████ ██████  ██ ███████ ██    ██ █████   ██ ███████
 ██  ██  ██   ██ ██   ██ ██ ██   ██  ██  ██  ██      ██      ██
  ████   ██   ██ ██   ██ ██ ██   ██   ████   ███████ ██ ███████

*/

//IMPORTANDO FUNÇÕES DE OUTROS ARQUIVOS:
import { historia } from './oJogo.js';
import { modificarVida, atualizarVida, atualizarOuro, modificarOuro, atualizarItem, itemInventario, ajustarVidaNoCSS, AdicionarArmadura, AdicionarArmamento } from './Status.js';

//DECLARANDO ELEMENTOS USADOS
const elementoTexto = document.getElementById('TextoJogo');
const elementoBotoes = document.getElementById('BotoesJogo');
let MusicaAtual = "./Recursos/Audios/Soliloquy.mp3"
let audioAtual = new Audio(MusicaAtual);

//DECLARANDO VARIÁVEIS DE STATUS
const vida = localStorage.getItem('Vida')
let idTextoAtual = 1;
let estado = {};

/*

██ ███    ██ ██ ███████ ██  ██████  ██████
██ ████   ██ ██ ██      ██ ██    ██ ██   ██
██ ██ ██  ██ ██ ██      ██ ████████ ██████
██ ██  ██ ██ ██ ██      ██ ██    ██ ██   ██
██ ██   ████ ██ ███████ ██ ██    ██ ██   ██

*/

//FUNÇÃO PARA INICIAR O JOGO
export function iniciarJogo() {
    idTextoAtual = 1;
    mostrarTexto(idTextoAtual);
}

/*

██████████ ███████ ██      ██ ██████████  ██████
    ██     ██        ██  ██       ██     ██    ██
    ██     █████       ██         ██     ██    ██
    ██     ██        ██  ██       ██     ██    ██
    ██     ███████ ██      ██     ██      ██████ 

*/

// função de mostrar texto dentro da caixa de texto do jogo com implementação de imagem improvisada :)
function mostrarTexto(textoIndex) {
    const textoJogo = historia.find(textoJogo => textoJogo.id === textoIndex);
    if (textoJogo) {
        let IdJogo = textoJogo.id;
        localStorage.setItem('IdJogo', IdJogo);

        elementoTexto.innerText = textoJogo.texto + "\n";

        // Remove todos os botões existentes
        while (elementoBotoes.firstChild) {
            elementoBotoes.removeChild(elementoBotoes.firstChild);
        }

        //ATRIBUI AS FUNÇÕES AOS BOTÕES
        textoJogo.opcao.forEach(opcao => {
            if (mostrarOpcao(opcao)) {
                const botao = document.createElement('button');
                botao.innerText = opcao.texto;
                botao.classList.add('Escolhas');
                botao.addEventListener('click', () => {
                    selecionarOpcao(opcao)
                    MostrarTitulo(opcao.titulo)
                    modificarOuro(opcao.Ouro, opcao.TipoOuro);
                    modificarVida(opcao.Vida, opcao.TipoVida);
                    ajustarVidaNoCSS();
                    AdicionarArmadura(opcao.Armadura)
                    AdicionarArmamento(opcao.Armamento)
                    MudarMusica(opcao.TrocarMusica, opcao.Musica)
                    Morte(opcao.Morte)
                    Restartar(opcao.Restart)
                    TocarSom(opcao.TocarSom)
                });
                elementoBotoes.appendChild(botao);
            }
        });

        //FAZENDO COM QUE A IMAGEM POSSA APRECER NA CAIXA DE TEXTO
        if (textoJogo.imagem) {
            const imagem = document.createElement('img');
            imagem.src = textoJogo.imagem;
            imagem.classList.add('ImagemJogo');
            elementoTexto.appendChild(imagem);
        }
        //FAZENDO COM QUE SEJA POSSÍVEL EXISTIR TEXTO DEBAIXO DA IMAGEM
        if (textoJogo.texto2) {
            const texto2 = document.createElement('p');
            texto2.innerText = textoJogo.texto2 + "\n";
            texto2.classList.add('Texto2');
            elementoTexto.appendChild(texto2);
        }
    }
}




/*

███████  █████  ██      ██    ██  █████  ██████
██      ██   ██ ██      ██    ██ ██   ██ ██   ██
███████ ███████ ██      ██    ██ ███████ ██████
     ██ ██   ██ ██       ██  ██  ██   ██ ██   ██
███████ ██   ██ ███████   ████   ██   ██ ██   ██

*/

//FUNÇÃO DE SALVAR PROGRESSONO JOGO
export function salvarEstado() {
    //SALVANDO O VALOR DAS VARIÁVEIS
    const estadoJogo = {
        idTextoAtual: localStorage.getItem('IdJogo'),
        estado: estado,
        Ouro: localStorage.getItem('Ouro'),
        Vida: localStorage.getItem('Vida'),
        Item: localStorage.getItem('Item'),
        vidaMax: localStorage.getItem('vidaMax'),
        Nome: localStorage.getItem('Nome'),
        Armadura: localStorage.getItem('Armadura'),
        Armamento: localStorage.getItem('Armamento'),
    };
    console.log(estadoJogo);
    localStorage.setItem('jogoSalvo', JSON.stringify(estadoJogo));
    alert('Jogo salvo.');

    //FAZ COM QUE O SAVE APAREÇA NO CONSOLE
    var Save = localStorage.getItem('jogoSalvo');
    if (Save) {
        var saveObjeto = JSON.parse(Save);
        console.log(saveObjeto.idTextoAtual);
    }

    //MOSTRA EM QUE ESTÁGIO O JOGO FOI SALVO
    const progressoAtual = "Passos salvo: " + idTextoAtual;
    document.getElementById('ProgressoJogo').textContent = progressoAtual;
}


//VERIFICANDO SE EXISTE JOGO SALVO E ATUALIZANDO O ID
document.addEventListener('DOMContentLoaded', () => {
    const jogoSalvo = localStorage.getItem('jogoSalvo');
    if (jogoSalvo) {
        const estadoCarregado = JSON.parse(jogoSalvo);
        idTextoAtual = parseInt(estadoCarregado.idTextoAtual);
        const progressoAtual = "Passos salvo: " + idTextoAtual;
        document.getElementById('ProgressoJogo').textContent = progressoAtual;

    } else {
        document.getElementById('ProgressoJogo').textContent = "Não Salvo";
    }
});


/*

 ██████  █████  ██████  ██████  ███████  ██████   █████  ██████
██      ██   ██ ██   ██ ██   ██ ██      ██       ██   ██ ██   ██
██      ███████ ██████  ██████  █████   ██   ███ ███████ ██████
██      ██   ██ ██   ██ ██   ██ ██      ██    ██ ██   ██ ██   ██
 ██████ ██   ██ ██   ██ ██   ██ ███████  ██████  ██   ██ ██   ██

*/

//FUNÇÃO DE CARREGAR JOGO SALVO
export function carregarEstado() {
    const jogoSalvo = localStorage.getItem('jogoSalvo');
    //CARREGANDO O VALOR DAS VARIÁVEIS
    if (jogoSalvo) {
        const estadoCarregado = JSON.parse(jogoSalvo);
        idTextoAtual = parseInt(estadoCarregado.idTextoAtual);
        estado = estadoCarregado.estado;
        localStorage.setItem('Ouro', estadoCarregado.Ouro)
        localStorage.setItem('Vida', estadoCarregado.Vida)
        localStorage.setItem('Armadura', estadoCarregado.Armadura)
        localStorage.setItem('Armamento', estadoCarregado.Armamento)
        mostrarTexto(idTextoAtual) // atualiza o texto para a tela salva
        ajustarVidaNoCSS()
        atualizarVida()
        atualizarOuro()
        atualizarItem()

        alert('Jogo carregado.');
    } else {
        alert('Nenhum jogo salvo encontrado.');
    }
}

/*

███████  ███████ ██      ███████ ██████████  ██████  ██████
██    ██ ██      ██      ██          ██     ██    ██ ██   ██
██    ██ █████   ██      █████       ██     ████████ ██████
██    ██ ██      ██      ██          ██     ██    ██ ██   ██
███████  ███████ ███████ ███████     ██     ██    ██ ██   ██

*/

//FUNÇÃO DE DELETAR JOGO SALVO
export function deletarSave() {
    // abre uma caixa de alerta de confirmação
    const confirmacao = confirm("Tem certeza que quer excluir seu jogo?");

    //SUBSTITUI O JOGO SALVO DO LOCAL STORAGE POR UM JOGO SALVO VAZIO
    if (confirmacao) {
        const jogoSalvo = localStorage.getItem('jogoSalvo');
        if (jogoSalvo) {
            localStorage.removeItem('jogoSalvo');
            alert('Jogo salvo deletado.');
        } else {
            alert('Nenhum jogo salvo encontrado.');
        }

        //RESETA O PROGRESSO
        const Progresso = "Não Salvo";
        document.getElementById('ProgressoJogo').textContent = Progresso;
    }
}

//FUNÇÃO QUE FAZ COM QUE AS OPÇÕES APAREÇAM NA TELA
function mostrarOpcao(opcao) {
    return opcao.estadoRequerido == null || opcao.estadoRequerido(estado);
}

//FUNÇÃO QUE DETECTA PARA QUAL MENSAGEM CADA BOTÃO VAI LEVAR
function selecionarOpcao(opcao) {
    const proximoTextoId = opcao.proximoTexto;

    //SE O ID FOR MENOR OU IGUAL A 0, O JOGO REINICIARÁ
    if (proximoTextoId <= 0) {
        return iniciarJogo();
    }
    estado = Object.assign(estado, opcao.setEstado);
    idTextoAtual = proximoTextoId;
    mostrarTexto(proximoTextoId);
}

/*

███    ██  ██████  ███    ███ ███████
████   ██ ██    ██ ████  ████ ██
██ ██  ██ ██    ██ ██ ████ ██ █████
██  ██ ██ ██    ██ ██  ██  ██ ██
██   ████  ██████  ██      ██ ███████

*/

//FUNÇÃO QUE RECEBE NOME DO JOGADOR 
export function CapturarNome() {
    var Nome = document.getElementById("CaixaNome");
    var CaixaNome = document.getElementById("NomePersonagem");
    const img = document.createElement("img");
    audioAtual.volume = 0.4;

    //EASTEREGGS
    if (Nome.value == "") {
        audioAtual.pause()
        const audio = new Audio("./Recursos/Audios/Iframe You did something wrong. [r-LHfrDQOE4].mp3"); // Caminho do arquivo de áudio
        audio.volume = 0.5;
        audio.play();
        img.style.zIndex = "1";
        img.src = "./Recursos/gifs/sad-emoji-sad.gif";
        img.alt = "Descrição da imagem";
        img.style.width = "100vw";
        img.style.height = "100vh";
        img.style.position = "absolute"

        setInterval(() => {
            location.reload();
        }, 5000);

        document.body.appendChild(img);
    }


    if (Nome.value == "Professor Chico") {
        audioAtual.pause()
        img.style.zIndex = "1";
        img.src = "./Recursos/ChicoEaster.png"; // Definir a imagem
        img.alt = "Descrição da imagem";
        img.style.width = "100vw";
        img.style.height = "100vh";
        img.style.position = "absolute";
        document.body.appendChild(img);

        setInterval(() => {
            document.body.removeChild(img);
        }, 4000);
    }
    if (Nome.value == "Baldo" || Nome.value == "baldo") {
        audioAtual.pause()
        const audio = new Audio("./Recursos/Audios/GG.mp3");
        audio.play()
        img.style.zIndex = "1";
        img.src = "./Recursos/Imagens/Cavaleiro.png"; // Define a imagem
        img.alt = "Descrição da imagem"; // Texto alternativo
        img.style.width = "100vw"; // Define o tamanho
        img.style.height = "100vh"; // Mantém a proporção
        img.style.position = "absolute";
        document.body.appendChild(img); // Adiciona ao body da página

        setInterval(() => {
            location.reload();
            document.body.removeChild(img);
        }, 39000);
    }
    if (Nome.value == "Baldo" || Nome.value == "baldo") {
        Nome.value = "Todo Poderoso Baldo"
    }
    localStorage.setItem('Nome', Nome.value);
    console.log(Nome.value);
    CaixaNome.textContent = `Nome: ${Nome.value}`;

}

/*

███    ███ ██    ██ ███████ ██ ███████  ██████
████  ████ ██    ██ ██      ██ ██      ██    ██
██ ████ ██ ██    ██ ███████ ██ ██      ████████
██  ██  ██ ██    ██      ██ ██ ██      ██    ██
██      ██  ██████  ███████ ██ ███████ ██    ██

*/

//FUNÇÃO PARA TOCAR MÚSICA
function MudarMusica(confirmacao, ID) {
    const NovaMusica = "./Recursos/Audios/" + ID;
    if (confirmacao == "S") {
        audioAtual.pause();
        audioAtual.currentTime = 0;

        audioAtual = new Audio(NovaMusica);
        audioAtual.loop = true;
        audioAtual.volume = 0.3;
        audioAtual.play();

        console.log("Música modificada para: " + NovaMusica);
    }
}
function TocarSom(Som) {
    if (Som) {
        // Para qualquer áudio atual antes de tocar o novo
        if (!audioAtual.paused) {
            audioAtual.pause();
            audioAtual.currentTime = 0;
        }

        // Define e toca o som
        audioAtual = new Audio(`./Recursos/Audios/${Som}`);
        audioAtual.volume = 0.3;
        audioAtual.play()
            .then(() => console.log("Música modificada para:", Som))
            .catch(error => console.error("Erro ao tocar som:", error));
    }
}

/*

██████████ ██ ██████████ ██    ██ ██       ██████
    ██     ██     ██     ██    ██ ██      ██    ██
    ██     ██     ██     ██    ██ ██      ██    ██
    ██     ██     ██     ██    ██ ██      ██    ██
    ██     ██     ██      ██████  ███████  ██████

*/

function MostrarTitulo(Titulo) {
    if (Titulo) {
        const Div = document.createElement("div");
        Div.classList.add("Titulo");
        Div.classList.add("Piscar")
        Div.innerText = Titulo;
        Div.style.zIndex = "1";
        document.body.appendChild(Div);
    }
}


/*

███    ███  ██████  ██████  ██████████ ███████
████  ████ ██    ██ ██   ██     ██     ██
██ ████ ██ ██    ██ ██████      ██     █████
██  ██  ██ ██    ██ ██   ██     ██     ██
██      ██  ██████  ██   ██     ██     ███████

*/

//FUNÇÃO PARA MATAR O JOGADOR
function Morte(confirmacao) {
    if (confirmacao === true) {
        let Vida = 0;
        localStorage.setItem('Vida', Vida.toString()); //ATUALIZA A VIDA NO LOCALSTORAGE

        //PARA A MÚSICA ATUAL
        if (!audioAtual.paused) {
            audioAtual.pause();
            audioAtual.currentTime = 0;
        }

        // Define e toca o som de morte
        audioAtual = new Audio("./Recursos/Audios/Morte.mp3");
        audioAtual.volume = 0.5;
        audioAtual.play()
            .then(() => console.log("Som de morte reproduzido"))
            .catch(error => console.error("Erro ao tocar som:", error));

        //AJUSTA A VISA NA INTERFACE
        ajustarVidaNoCSS();
    }
}

/*

██████  ███████ ███████ ██████████  ██████  ██████  ██████████
██   ██ ██      ██          ██     ██    ██ ██   ██     ██
██████  █████   ███████     ██     ████████ ██████      ██
██   ██ ██           ██     ██     ██    ██ ██   ██     ██
██   ██ ███████ ███████     ██     ██    ██ ██   ██     ██

*/

//FUNÇÃO PARA REINICIAR O JOGO
function Restartar(Confirm) {
    if (Confirm == true) {
        location.reload();
    }
}

window.CapturarNome = CapturarNome;

//VERIFICAÇÃO SE O ESCRIPT ESTÁ SENDO LIDO
console.log("abubublé");