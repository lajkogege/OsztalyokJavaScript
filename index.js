import Kutya from "./Kutya.js";

//példányositom a kutyát

const ujKutya = new Kutya("Nelson", "golden retrivel", "Adj enni!", $(".tarolo"));
const ujKutya2 = new Kutya("Dézi", "keverék", "Szeretek gazdi!", $(".tarolo"));

//ujKutya.nev="Átnevezem"
//kivűlről tudok újabb adattagokat hozzáadni az osztályhoz, DE ILYENT INKÁBB NE!!
//ujKutya.egyEgeszenUjTulajdonsag="Osztályon kivűl is tudok, konstruktor hivás nélkül is értéket adni neki";
//delete ujKutya.fajta //tudok adattagokat törrölni is, DE ILYENEKET INKÁBB NE!! 
//console.log(ujKutya.nev)
//privát adattagokat akarjuk elrni, akkor GETER-eket használunk
console.log(ujKutya2.nev)//azért tudttam a név tulajdonságot elérni, mert van hozzá getter, de megváltoztani nem tudom, mert nincs hozá SET-tel

ujKutya.mondat="Köszi már nem vagyok éhes.";

console.log(ujKutya);
console.log(ujKutya2);
ujKutya.beszel();
ujKutya2.beszel();