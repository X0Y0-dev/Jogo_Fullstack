function obterConselho() {
    fetch('https://api.adviceslip.com/advice')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro na requisição');
            }
            return response.json();
        })
        .then(data => {
            const conselhoEmIngles = data.slip.advice;
            
            // Traduzir para português usando a API do Google Tradutor
            traduzirConselho(conselhoEmIngles);
        })
        .catch(error => {
            console.error('Houve um erro:', error);
        });
}

function traduzirConselho(texto) {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=pt&dt=t&q=${encodeURIComponent(texto)}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const conselhoTraduzido = data[0][0][0];
            document.getElementById('conselho0o0').innerHTML = `Dica de vida: ${conselhoTraduzido}`;
        })
        .catch(error => console.error('Erro ao traduzir:', error));
}

// Atualiza o conselho a cada 10 segundos
setInterval(obterConselho, 10000);
obterConselho();
