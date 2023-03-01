function Funcao() {

    var nome = document.getElementById("nome").value;
    var res =  "Prazer em conhece-lo!   "
    document.getElementById("respon").innerHTML = res + nome;

}

function cor() {

    var ren = document.getElementById("r2").value;
    var res =  " é realmente uma bela cor. "
    document.getElementById("rer").innerHTML = ren + res;

}

function time() {

    var re = document.getElementById("r3").value;
    var reno =  " é um time horrivel, reconsidere seu gosto. "
    document.getElementById("ret").innerHTML =  re + reno ;

}


function com() {
    var nome = document.getElementById("nome").value;
    var ren = document.getElementById("r2").value;
    var re = document.getElementById("r3").value;
    var rensp1 =  " Seu nome é "
    var rensp2 =  ".você adora  "
    var rensp3 = "e o time  "
    var fim = " .Você é uma pessoa interessante e muito amigavel, até mais e vai se ferrar"
    document.getElementById("no").innerHTML =  rensp1 + nome + rensp2 + ren + rensp3 + re + fim;

}