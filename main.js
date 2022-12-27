// Zadatak 1.
function askUser() {
  let result = window.prompt('Kako se zoveš ?');
  let ispis = 'Korisnik se zove ' + result;
  console.log(ispis);
}

// Primjer block scopea
function blockScopeExample() {
  if (true) {
    var skill1 = 'HTML';        // postoji u function scopeu
    const skill2 = 'CSS';     // postoji u block scopeu
    let skill3 = 'Javascript';   // postoji u bloxk scopeu

  }
  // console.log(skill1); OK
  // console.log(skill2); ERROR
  // console.log(skill3); ERROR
}

// blockScopeExample();
// HTML
// error: skill2 is not defined
// error: skill3 is not defined


// Zadatak 2
let niz = [1,2,3,4,5,6,7];

function jeliBrojParan(broj) {
  // Kada provjeravamo jednakost nečega svakako ćemo nazad dobiti TRUE ili FALSE pa stoga ne moramo pisati IF/ELSE
  return broj % 2 === 0;

  // Ovo bi radilo isto što i linija iznad
  // if (broj % 2 === 0) {
  //   return true;
  // } else {
  //   return false;
  // }
}

function jeliBrojNeparan(broj) {
  return broj % 2 !== 0;
}

function jeliBroj6(broj) {
  return broj === 6;
}

function ispisBrojeva(niz, callback) {
  for (let i = 0; i < niz.length; i++) {
    if (callback(niz[i])) {
      console.log(niz[i]);
    }
  }
}

ispisBrojeva(niz, jeliBrojParan);
// ispisBrojeva(niz, jeliBroj6);
// ispisBrojeva(niz, jeliBrojNeparan);


// Primjer ispisivanja atributa i vrijednosti nekog objekta koristeci for in petlju
let objektKorisnik = {
  'ime': 'Marin',
  'prezime': 'Maric'
};

for (let key in objektKorisnik) {
  console.log(objektKorisnik[key]);
}

let prices = ['1.00 KM', '1.95 KM', '14.50 KM', '9.40 KM'];
let sum = 0;
for (let i = 0; i < prices.length; i++) {
  // Razdvojiti svaku cijenu po razmaku tako da nam ostane dio gdje se nalazi broj
  let cijena = prices[i];
  let broj = cijena.split(' ');
  // ['1.00', 'KM']
  let prviDioBroja = broj[0];

  // dio gdje se nalazi broj će biti u obliku stringa pa pretvorit ga u float ili integer
  let floatBroj = parseFloat(prviDioBroja);

  // u varijabli sum zbrajamo cijene tako da nju mozemo povecavat s onim brojem kojeg dobijemo u svakoj iteraciji
  sum = sum + floatBroj;
}
console.log('Iznos za platiti: ' + sum);
