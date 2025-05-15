let altura;
let peso;
let imc;

function calcImc(altura, peso)
{
    let altura = (document.getElementById("al").value)/100;
    let peso = (document.getElementById("ps").value)

    altura = parseFloat(altura);
    peso = parseFloat(peso);

    imc = peso / (altura * altura);
    window.alert('Seu IMC é:' + imc);
}


