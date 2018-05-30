function exo1() {
    let nombre = 6;
    let caractere = "char";
    let booleen = true;
    let symbole = Symbol(123456);
    let nul = null;
    let indefini = undefined;

    console.log(typeof (nombre));
    console.log(typeof (caractere));
    console.log(typeof (booleen));
    console.log(typeof (symbole));
    console.log(typeof (nul));
    console.log(typeof (indefini));
}
exo1();

function exo2(a) {
    console.log(a[0] + a[a.length - 1]);
}
exo2("test tag");

function exo3(a, b) {
    console.log(Number(a) + Number(b));
}
exo3("12", "12");

function exo4(a) {
    let tablo = a.split(" ");
    /*tablo.forEach(function (element) {
        if (element.indexOf() % 2 == 0) {
            console.log(element.toUpperCase());
        } else {
            console.log(element);
        }
        
    });*/
    for(let i=0; i<tablo.length; i++){
        if (i % 2 == 0){
            console.log(tablo[i].toUpperCase());
        } else {
            console.log(tablo[i]);
        }
    }
}
exo4("grand petit encoregrand petitpetit");

function exo5() {
    let datenow = new Date();
    console.log(datenow.toString());
}
exo5();

function exo6(a) {
    let chaine = a.toString();
    let tab = chaine.split("");
    console.log("Tableau: " + tab);
    console.log("Tableau inversé: " + tab.reverse());
}
exo6(12345);

