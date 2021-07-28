var hh = 0
var mm = 0
var ss = 0
var tempo = 1000

var clean

function iniciar() {

    clean = setInterval(()=> start(), tempo)
}

function zerar() {
    clearInterval(clean)

    hh = 0
    mm = 0
    ss = 0 

    document.getElementById("resultado").innerHTML = "00:00:00"

}

function pausar(){

    clearInterval(clean)

}


function start() {

    ss++;
    if (ss == 60) {
        ss = 0;
        mm++;

        if (mm == 60) {
            mm = 0;
            hh++
        }
    }


    const final = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss)

    document.getElementById("resultado").innerHTML = final


}