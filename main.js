function Konyv(cim, szerzo, kiadas, oldalszam){
    this.cim = cim
    this.szerzo = szerzo
    this.kiadas = kiadas
    this.oldalszam = oldalszam
    this.kolcsonozve = false
    this.kolcsonoz = function(){
        if(this.kolcsonoz){
            this.kolcsonoz = false
        }
    }
    this.visszahoz = function(){
        if(!this.kolcsonoz){
            this.kolcsonoz = true
        }
    }
}

const egriCsillagok = new Konyv("Egri csillagok", "Gárdonyi Géza", 1901, 605)
const aPalUtcaiFiuk = new Konyv("A Pál utcai fiúk", "Molnár Ferenc", 1907, 200)
const aranyEmber = new Konyv("Az arany ember", "Jókai Mór", 1872, 550)



function konyvHozzaadas(){
    
}