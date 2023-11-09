const visor = document.getElementById("resultado");
function insert(num) {
    visor.innerHTML += num;



};
function clean() {
    visor.innerHTML = ""
    let numeroVisor= visor.insertAdjacentHTML;
    visor.insetHTML= numeroVisor.substaing(0,numeroVisor.length-1);

    
}

function calcular() {
    let calculo = vigor.innerHTML;
    visor.innerHTML= eval(calculo),
    
}