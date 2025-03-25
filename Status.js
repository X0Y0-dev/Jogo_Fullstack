//DEFININDO O FALOR DOS ITENS
localStorage.setItem('Vida', 4);
localStorage.setItem('vidaMax', 4);
localStorage.setItem('Ouro', 0);
localStorage.setItem('Nome', "none");
localStorage.setItem('Item', 0);
localStorage.setItem('Armamento', 'none');
localStorage.setItem('Armadura', 'none');

ajustarVidaNoCSS()
atualizarVida()
atualizarOuro()

/*
 
 ██████  ██    ██ ██████   ██████
██    ██ ██    ██ ██   ██ ██    ██ 
██    ██ ██    ██ ██████  ██    ██
██    ██ ██    ██ ██   ██ ██    ██
 ██████   ██████  ██   ██  ██████

*/

//FUNÇÃO PARA ATUALIZAR O VALOR DO OURO
export function atualizarOuro() {
    const Ouro = localStorage.getItem('Ouro');
    document.getElementById('CaixaOuro').textContent = `${Ouro} Ouro`;
}

//FUNÇÃO PARA PODER DIMINUIR OU ACRESCENTAR OURO AO JOGADOR
export function modificarOuro(quantidade, tipo) {
    let Ouro = parseInt(localStorage.getItem('Ouro'));

    if (tipo == "-") {
        Ouro -= quantidade;
    }
    if (tipo == "+") {
        Ouro += quantidade;
    }

    //ATUALIZAÇÃO DE OURO NO LOCALSTORAGE
    localStorage.setItem('Ouro', Ouro);
    atualizarOuro();
}

/*

██    ██ ██ ███████   ██████
██    ██ ██ ██    ██ ██    ██
██    ██ ██ ██    ██ ████████
 ██  ██  ██ ██    ██ ██    ██
  ████   ██ ███████  ██    ██
*/

//FUNÇÃO PARA ATUALIZAR O VALOR DE VIDA
export function atualizarVida() {
    const Vida = localStorage.getItem('Vida');
    const vidaMax = localStorage.getItem('vidaMax');
    document.getElementById('CaixaVida').textContent = `${Vida}/${vidaMax}`; //COMO FICARÁ VISUALMENTE: VIDA ATUAL / VIDA MÁXIMA
}

//FUNÇÃO PARA PODER DIMINUIR OU ACRESCENTAR VIDA AO JOGADOR
export function modificarVida(quantidade, tipo) {
    let Vida = parseInt(localStorage.getItem('Vida'));

    if (tipo == "-") {
        Vida -= quantidade;
    }
    if (tipo == "+") {
        Vida += quantidade;
    }

    //ATUALIZAÇÃO DE VIDA NO LOCALSTORAGE
    localStorage.setItem('Vida', Vida);
    atualizarVida();
}

//FUNÇÃO PARA PODER AJUSTAR A VIDA NA HUD
export function ajustarVidaNoCSS() {

    let width = parseInt(localStorage.getItem('Vida')) * 25;
    console.log(width);
    document.querySelector('.vida').style.width = `${width}%`;
}

document.addEventListener('DOMContentLoaded', ajustarVidaNoCSS);

/*

██ ███    ██ ██    ██ ███████ ███    ██ ██████████  ██████  ██████  ██  ██████
██ ████   ██ ██    ██ ██      ████   ██     ██     ██    ██ ██   ██ ██ ██    ██
██ ██ ██  ██ ██    ██ █████   ██ ██  ██     ██     ████████ ██████  ██ ██    ██
██ ██  ██ ██  ██  ██  ██      ██  ██ ██     ██     ██    ██ ██   ██ ██ ██    ██
██ ██   ████   ████   ███████ ██   ████     ██     ██    ██ ██   ██ ██  ██████

*/

//FUNÇÃO PARA IMPLEMENTAR ITENS NO INVENTÁRIO
function Euexisto() {
    const inventario = document.querySelector('#CaixaInventario');

    inventario.classList.remove('animar');
    setTimeout(() => {
        inventario.classList.add('animar');
        inventario.classList.add('visivel');
    }, 10);
}

//FUNÇÃO PARA FECHAR A JANELA DO INVENTÁRIO POR CLASSE
function FecharJanela() {
    const janela = document.getElementById("CaixaInventario");
    janela.classList.remove("visivel");
}

//FUNÇÃO PARA FECHAR A JANELA DO INVENTÁRIO POR ID
function FecharJanelaID(id) {
    const janela = document.getElementById(id);
    janela.style.visibility = "hidden";
}

//FUNÇÃO PARA IMPLEMENTAR ARMADURA E ARMAMENTO NO INVENTÁRIO
export function itemInventario(qntArmadura, qntArmamento, tipoArmadura, tipoArmamento) {
    let Armadura = JSON.stringify(localStorage.getItm('Armadura'))
    let Armamento = JSON.stringify(localStorage.getItm('Armadura'))

    if (tipoArmadura == "+") {
        Armadura += qntArmadura;
    }
    if (tipoArmadura == "-") {
        Armadura -= qntArmadura;
    }
    if (tipoArmamento == "+") {
        Armamento += qntArmamento;
    }
    if (tipoArmamento == "-") {
        Armamento -= qntArmamento;
    }
    atualizarItem();
}

//FUNÇÃO PARA ATUALIZAR O VALOR DOS ITENS AO PERSONAGEM
export function atualizarItem() {
    const Armadura = localStorage.getItem('Armadura');
    document.getElementById('#CaixaInventario').textContent = `Nome: ${Armadura}`;
    const Armamento = localStorage.getItem('Armamento');
    document.getElementById('#CaixaInventario').textContent = `Nome: ${Armamento}`;
}

//ATUALIZA VALOR DE ARMADURA NO LOCALSTORAGE
export function AdicionarArmadura(armadura) {
    localStorage.setItem('Armadura', armadura);
}


//ATUALIZA VALOR DE ARMAMENTO NO LOCALSTORAGE
export function AdicionarArmamento(armamento) {
    localStorage.setItem('Armamento', armamento);
}

window.FecharJanelaID = FecharJanelaID;
window.FecharJanela = FecharJanela;
window.Euexisto = Euexisto;