const oraSzamok = document.querySelector(".szamokAzOran");
const barMasodperc = document.querySelector(".bar-masodperc");

const numberElement = [];
const barElement = [];

//numberElement lérehozása -->
for (let i = 1; i <=12; i++){
    numberElement.push(
        `<span style="--index:${i};"><p>${i}</p></span>`

    );
}

oraSzamok.insertAdjacentHTML("afterbegin", numberElement.join(""));

//barMasodperc létrehozása -->
for (let i = 1; i <= 60; i++){
    barElement.push(
        `<span style="--index:${i};"><p></p></span>`
    
    );

}

barMasodperc.insertAdjacentHTML("afterbegin", barElement.join(""));

const oraMutato = document.querySelector(".ora.mutato");
const percMutato = document.querySelector(".perc.mutato");
const masodpercMutato = document.querySelector(".masodperc.mutato");

function pontosIdo(){
    let datum = new Date();
   
    let pontosIdoOrak = datum.getMinutes();
    let pontosIdoPercek = datum.getSeconds();
    let pontosIdoMasodpercek = datum.getSeconds();
//Létrehozzuk a dátumot az órák, percek, másodpercek alapján "elkapva"
//60 másodperc = 360 fok, tehét egy másodper 360/60=6 fok, ugyan így a másodperc is
//12 óra 360 fok, 1 óra 360/12=30 fok
//60 perc = 30 fok, így 1 perc 60/30=0,5 fok 
//Ezek alapján egy óra (óra * 30 + percek/2)
    oraMutato.style.transform = `rotate(${pontosIdoOrak * 30 + pontosIdoPercek / 2}deg)`;
    percMutato.style.transform = `rotate(${pontosIdoPercek * 6}deg)`;
    masodpercMutato.style.transform = `rotate(${pontosIdoMasodpercek * 6}deg)`;
//másodperc léptetése 6 fokkal szorozva, majd meghívjuk a pontoIdo függvényt. 
}

pontosIdo();