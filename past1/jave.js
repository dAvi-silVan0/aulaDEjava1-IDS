function calcImc(){
    let altura = (document.getElementById("al").value)/100;
    let peso = (document.getElementById("ps").value);

    altura = parseFloat(altura); /*float = de ponto flutuante*/
    peso = parseFloat(peso);

    let imc = peso / (altura * altura);
    window.alert('Seu IMC é:' + imc);
}

function alternarTema_escuro(){
    const corpo = document.body;
    corpo.classList.toggle("escuro");
}
function alternarTema_claro(){
    const corpo = document.body;
    corpo.classList.toggle("claro");
}

