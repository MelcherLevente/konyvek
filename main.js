function Konyv(cim, szerzo, kategoria, kiadas, oldalszam){
    this.cim = cim
    this.szerzo = szerzo
    this.kategoria = kategoria
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


const egriCsillagok = new Konyv("Egri csillagok", "Gárdonyi Géza", "Történelmi", 1901, 605)
const aPalUtcaiFiuk = new Konyv("A Pál utcai fiúk", "Molnár Ferenc", "Sci-fi", 1907, 200)
const aranyEmber = new Konyv("Az arany ember", "Jókai Mór", "Fantasy", 1872, 550)

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
            <td>${konyv.kategoria}</td>
            <td>${konyv.kiadas}</td>
            <td>${konyv.oldalszam}</td>
            <td>${(konyv.kolcsonozve) ? "Nem kölcsönözhető" : "Kölcsönözhető"}</td>
            <td><button type="button" onclick="kolcsonzes(${index})">${(konyv.kolcsonozve) ? "Visszahozás" : "Kölcsönzés"}</button></td>
            <td><button onclick="torles(${index})">Törlés</button></td>
        </tr>`).join('')

    tablazatTorzs.innerHTML = tablazatSor
    
    inputokUritese()
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

function legregebbiKonyv(){
    let legregebbi = 10000
    let legregebbiCim = ""
    konyvek.forEach(konyv => {
        if(konyv.kiadas < legregebbi){
            legregebbi = konyv.kiadas
            legregebbiCim = konyv.cim
        }
    });

    document.getElementById("legregebbi").textContent = `Legrégebbi könyv: ${legregebbiCim} (${legregebbi})`
}

function legvastagabbKonyv(){
    let legvastagabb = 0
    let legvastagabbCim = ""
    konyvek.forEach(konyv => {
        if(konyv.oldalszam > legvastagabb){
            legvastagabb = konyv.oldalszam
            legvastagabbCim = konyv.cim
        }
    });

    document.getElementById("legvastagabb").textContent = `Legvastagabb könyv: ${legvastagabbCim} (${legvastagabb})`
}

function atlagosOldalszam(){
    let sum = 0
    let db = 0
    konyvek.forEach(konyv => {
        sum+=konyv.oldalszam
        db++
    });
    document.getElementById("atlagosOldalszam").textContent = `Átlagos oldalszám: ${Math.round(sum/db)}`
}

function torles(index){
    konyvek.splice(index, 1)
    betoltes(konyvek)
}

function inputokUritese(){
    document.getElementById("cim").value = ""
    document.getElementById("szerzo").value = ""
    document.getElementById("kiadas").value = ""
    document.getElementById("oldalszam").value = ""
}

// function kategoriaSzerint(){
//     let kategoriaLista = []
//     if(document.getElementById("kategoriaLista").onselectionchange){
//         konyvek.forEach(konyv => {
//             if(konyv.kategoria = document.getElementById("kategoriaLista").value){
//                 kategoria.push(konyv)
//             }
//         });
//     }

//     betoltes(kategoriaLista)
// }

// let kategoriaLista = []
// document.getElementById("kategoriaLista").onselectionchange =
//     konyvek.forEach(konyv => {
//         if(konyv.kategoria = document.getElementById("kategoriaLista").value){
//             kategoria.push(konyv)
//         }
//     });

// betoltes(kategoriaLista)
