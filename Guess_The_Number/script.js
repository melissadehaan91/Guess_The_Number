const maxTries = 5;
let minNumber = 0;
let maxNumber = 25;

function getRandom(min, max) {
    return Math.round(Math.random() * (max - min) + min);
} 

let name = "";
while(name == true || name.length == 0){
    name = prompt("Welkom! Wat is je naam?");
}

alert(`Hey ${name}`);

minNumber = parseInt(prompt("Wat mag het kleinste getal zijn?", minNumber));
maxNumber = parseInt(prompt("Wat mag het grootste getal zijn?", maxNumber));

let success = false, tries = 0;
while (!success && tries++ < maxTries) {
    let rand = getRandom(minNumber, maxNumber);
    let nummer = prompt(`Voer een nummer in van ${minNumber} tot ${maxNumber} om te beginnen met raden...`);

    if (rand === parseInt(nummer)) { 
        alert("Gefeliciteerd je hebt gewonnen!"); 
        success = true;
    }
    else if (maxTries - tries > 0) { 
        alert(`Dat is niet correct, je hebt nog ${maxTries - tries} poging${maxTries - tries == 1 ? '' : 'en'} over.`); 
    }
    else {
        alert("Dat is niet correct, dit was je laatste poging.");
    }
}

alert(`Dag ${name}`);