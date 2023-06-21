var sele = document.querySelectorAll("#perso img");
let imgsele = document.querySelector("#info img")
let nomeperso = document.querySelector("#info h1")

for (var i = 0; i < sele.length; i++) {
    sele[i].addEventListener("click", function (e) {
        let srcc = this.src;
        let altt = this.alt;
        imgsele.setAttribute("src", srcc);
        nomeperso.innerHTML = altt;
    })
}