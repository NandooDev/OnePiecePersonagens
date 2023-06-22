var sele = document.querySelectorAll("#perso img");
let imgsele = document.querySelector("#info img");
let nomeperso = document.querySelector("#info h1");
let descperso = document.querySelector("#info p");
let luffy = "Luffy é o chefe do bando pirata Mugiwaras e o protagonista do anime!"
let zoro = "Homem forte, sério, alfa, sigma, chad e ainda um ótimo lutador, também está no top 3 dos Mugiwaras!"
let sanji = "Sanji, está no top 3 dos mais fortes dos Mugiwaras e ainda é um ótimo cozinheiro!"
let ace = "Irmão de Luffy e filho do rei dos piratas Gol D. Roger. Infelizmente foi morto pela Marinha!"
let barba_branca = "Antes de sua morte considerado o mais forte pirata de todos!"
let barba_negra = "Um dos piores e mais imundos piratas, ele que vem ganhando força roubando os poderes dos outros!"
let kaidou = "Kaidou é um dos Chefões piratas, considerado depois do Barba Branca, o mais forte pirata!"
let roger = "Roger foi o maior pirata de One Piece, ele foi o rei dos piratas!"
let doff = "Doflamingo é um dos maiores vilões da obra de One Piece!"

for (var i = 0; i < sele.length; i++) {
    sele[i].addEventListener("click", function (e) {
        let srcc = this.src;
        let altt = this.alt;
        imgsele.setAttribute("src", srcc);
        nomeperso.innerHTML = altt;
        if (altt == "Monkey D. Luffy") {
            descperso.innerHTML = luffy;
        }
        if (altt == "Roronoa Zoro") {
            descperso.innerHTML = zoro;
        }
        if (altt == "Vinsmoke Sanji") {
            descperso.innerHTML = sanji;
        }
        if (altt == "Portgas D. Ace") {
            descperso.innerHTML = ace;
        }
        if (altt == "Barba Branca") {
            descperso.innerHTML = barba_branca;
        }
        if (altt == "Barba Negra") {
            descperso.innerHTML = barba_negra;
        }
        if (altt == "Kaidou") {
            descperso.innerHTML = kaidou;
        }
        if (altt == "Gol D. Roger") {
            descperso.innerHTML = roger;
        }
        if (altt == "Donquixote Doflamingo") {
            descperso.innerHTML = doff;
        }

    })
}