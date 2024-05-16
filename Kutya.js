export default class Kutya {
    //privát adattagok lesznek //az osztályon kivűl nem érhetőek el a privát adattagok.

    #nev = ""; //privátáttá teszi a #-t
    #fajta = "";
    #mondat = "";
    #szuloElem;

    constructor(nev, fajta, mondat, szuloElem) {//adattag az osztály tulajdonságai, változoi
        /*constructor feladat hogy beálitja az adattagokat */
        //this mindig az osztály aktuális pldányára fog mutatni
        this.#nev = nev; //publicus adattag, kivűlröl hozzáférhető, megváltoztatható
        this.#fajta = fajta;
        this.#mondat = mondat;
        this.#szuloElem = szuloElem;
        this.#megjelenit();
    }

    /*privát adattagok elérése GETTER-rel*/
    get nev() {
        return this.#nev;
    }

    //tagfügvény, az adattagokon végez műveleteket
    beszel() {
        console.log(this.mondat);
    }

    #htmlOsszealit() {//privát, kivűlről nem elérhető
        let txt = `<div class="kutya">
                    <h2>${this.#nev}</h2>
                    <h2>${this.fajta}</h2>
                </div>`;
        return txt;
    }

    #megjelenit() {//privát, kivűlről nem elérhető
        this.#szuloElem.append(this.#htmlOsszealit());
    }

}

//export default Kutya