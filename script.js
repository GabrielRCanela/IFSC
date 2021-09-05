var arrayImagens =
    ["imagens/Axolotl.jpg",
        "imagens/Lagarto jesus.jpg",
        "imagens/Matamatá.jpg",
        "imagens/Tarsius.jpg",
        "imagens/Urutau.jpg"];
var nomeAnimais = ['Axolotl', 'Lagarto jesus', 'Matamatá', 'Tarsius', 'Urutau']
var nomeAleatorio = ['urso', 'jacare', 'cagado', 'lagartixa', 'macaco']
var cont = 0;
var qtdAnimais = nomeAnimais.length
var fotoAtual = document.getElementById("img");
var botao = document.getElementById("animal1");
var botao2 = document.getElementById('animal2')
var botao3 = document.getElementById("animal3")
var tn = document.getElementById("tn")
var ti = document.getElementById("ti")
var pontos = 0;

var teste1 = document.getElementById("teste1")
var teste2 = document.getElementById("teste2")
var teste3 = document.getElementById("teste3")
tn.style.visibility = 'hidden';
ti.style.visibility = 'hidden';

function passaFoto() {
    var valor1
    var btn

    do {
        valor1 = Math.floor(Math.random() * 20)
    } while (valor1 > 4)


    var valor2
    do {
        valor2 = Math.floor(Math.random() * 20)
    } while (valor2 > 4 | valor2 == valor1)

    btn = Math.floor(getRandomArbitrary(1, 3));

    if (btn == 1) {
        botao3.innerText = nomeAnimais[cont]
        botao2.innerText = nomeAleatorio[valor1]
        botao.innerText = nomeAleatorio[valor2]
    } else if (btn == 2) {
        botao.innerText = nomeAleatorio[valor1]
        botao2.innerText = nomeAnimais[cont]
        botao3.innerText = nomeAleatorio[valor2]
    } else if (btn == 3) {
        botao3.innerText = nomeAleatorio[valor1]
        botao2.innerText = nomeAleatorio[valor2]
        botao.innerText = nomeAnimais[cont]
    }
    fotoAtual.setAttribute("src", arrayImagens[cont]);
    cont++;

}


function conta_pontos(nmbotao) {
    var pontuacao = document.getElementById('pontuacao');
    if (nmbotao == 'botao') {
        if ('imagens/' + botao.innerText + '.jpg' == arrayImagens[cont - 1]) {
            pontos++
            pontuacao.innerText = 'Pontuação atual: ' + pontos;
            botao.innerText = '---'
            botao2.innerText = '---'
            botao3.innerText = '---'
        }
    } else if (nmbotao == 'botao2') {
        if ('imagens/' + botao2.innerText + '.jpg' == arrayImagens[cont - 1]) {
            pontos++
            pontuacao.innerText = 'Pontuação atual: ' + pontos;
            botao.innerText = '---'
            botao2.innerText = '---'
            botao3.innerText = '---'
        }
    } else if (nmbotao == 'botao3') {
        if ('imagens/' + botao3.innerText + '.jpg' == arrayImagens[cont - 1]) {
            pontos++
            pontuacao.innerText = 'Pontuação atual: ' + pontos;
            botao.innerText = '---'
            botao2.innerText = '---'
            botao3.innerText = '---'
        }
    }
    if (valida_andamento() == false) {
        pontuacao.innerText = 'FIM DE JOGO! SUA PONTUAÇÃO FINAL FOI DE ' + pontos + '/'+qtdAnimais;
        /*botao.disabled = true;
        botao2.disabled = true;
        botao3.disabled = true;
        
*/
tn.style.visibility = 'visible';
ti.style.visibility = 'visible';
        fotoAtual.style.display = 'none';

        animal1.style.visibility = 'hidden';
        animal2.style.visibility = 'hidden';
        animal3.style.visibility = 'hidden';
    }
    if (valida_andamento() == true){
        passaFoto()
    }
}

function valida_andamento() {
    if (cont < qtdAnimais) {
        return true;
    } else return false;
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

