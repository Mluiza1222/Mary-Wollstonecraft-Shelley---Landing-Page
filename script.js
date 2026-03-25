document.addEventListener('DOMContentLoaded', function () {

    const botao = document.getElementById('botao');
    const curiosidade = document.getElementById('curiosidade');

    const curiosidades = [
        "Filha de uma filósofa (Mary Wolstonecraft) e um pensador (William Godwin).",
        "Casada com um poeta (Percy Bysshe Shelley).",
        "'Frankenstein' foi publicado de forma anônima.",
        "Perdeu três de seus quatro filhos.",
        "Frankenstein é considerada uma das primeiras ficções científicas.",
        "Fugiu para se casar com Percy pois ele já era casado, porém casaram-se apenas dois anos após a fulga.",
        "A ideia de escrever o renomado livro 'Frankenstein' ocorreu durante a viagem escandalosa que precedeu seu casamento com Percy."
    ];

    botao.addEventListener('click', function () {

        const indice = Math.floor(Math.random() * curiosidades.length);

        curiosidade.textContent = curiosidades[indice];
        curiosidade.style.display = 'block';

    });

});