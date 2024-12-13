let greeting = 'Hello World';
let isGreeting = true;
let randomNumber = Math.floor(Math.random() * 10);
// Denna variabel kan ha vilken datatyp som helst
let changing = "Hej";
changing = 1;
// Detta betyder att names är en array med strängar i
let names = [];
names.push('Ada Lovelace');
// Denna variabel kan antingen vara en sträng eller en boolean
let twoTypes = "Hej";
twoTypes = true;
// lastname är en frivillig parameter i funktionen nedan och måste alltså inte få ett värdet vi
// funktionsanropet. Detta visas med ett ? efter namnet.
function getName(firstname, lastname) {
    console.log(firstname, lastname);
    const fullname = firstname + ' ' + lastname;
    return fullname;
}
const fullname = getName('Ada', 'Lovelace');
