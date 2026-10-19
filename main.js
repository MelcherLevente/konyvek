function Konyv(cim, szerzo, kiadas, oldalszam){
    this.cim = cim
    this.szerzo = szerzo
    this.kiadas = kiadas
    this.oldalszam = oldalszam
    this.kolcsonozve = false
    this.kolcsonoz = function(){
        if(this.kolcsonozve){
            this.kolcsonozve = false
        }
        else{
            this.kolcsonozve = true
        }
    }
}


const egriCsillagok = new Konyv("Egri csillagok", "Gárdonyi Géza", 1901, 605)
const aPalUtcaiFiuk = new Konyv("A Pál utcai fiúk", "Molnár Ferenc", 1907, 200)
const aranyEmber = new Konyv("Az arany ember", "Jókai Mór", 1872, 550)

let konyvek = [egriCsillagok, aPalUtcaiFiuk, aranyEmber]

function konyvHozzaadas(){
    let cim = document.getElementById("cim").value
    let szerzo = document.getElementById("szerzo").value
    let kiadas = document.getElementById("kiadas").value
    let oldalszam = document.getElementById("oldalszam").value
    const ujKonyv = new Konyv(cim, szerzo, kiadas, oldalszam)

    konyvek.push(ujKonyv)

    betoltes(konyvek)
}

function betoltes(konyvek){
    const tablazatTorzs = document.getElementById("tablazatTorzs")
    const tablazatSor = konyvek.map((konyv, index) => `
        <tr>
            <td>${konyv.cim}</td>
            <td>${konyv.szerzo}</td>
            <td>${konyv.kiadas}</td>
            <td>${konyv.oldalszam}</td>
            <td>${(konyv.kolcsonozve) ? "Nem kölcsönözhető" : "Kölcsönözhető"}</td>
            <td><button type="button" onclick="kolcsonzes(${index})">${(konyv.kolcsonozve) ? "Visszahozás" : "Kölcsönzés"}</button></td>
        </tr>`).join('')

    tablazatTorzs.innerHTML = tablazatSor
}

function kolcsonzes(index){
    konyvek[index].kolcsonoz()
    betoltes(konyvek)
}

function szabadKonyvek(){
    let szabadKonyvek = []
    konyvek.forEach(konyv => {
        if(konyv.kolcsonozve === false){
            szabadKonyvek.push(konyv)
        }
    });
    betoltes(szabadKonyvek)
}

