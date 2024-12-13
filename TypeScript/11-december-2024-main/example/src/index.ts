let greeting: string = 'Hello World';
let isGreeting: boolean = true;
let randomNumber: number = Math.floor(Math.random() * 10);

// Denna variabel kan ha vilken datatyp som helst
let changing: any = "Hej"; 
changing = 1;

// Detta betyder att names är en array med strängar i
let names: string[] = [];
names.push('Ada Lovelace');

// Denna variabel kan antingen vara en sträng eller en boolean
let twoTypes: string | boolean = "Hej";
twoTypes = true;

// lastname är en frivillig parameter i funktionen nedan och måste alltså inte få ett värdet vi
// funktionsanropet. Detta visas med ett ? efter namnet.
function getName(firstname: string, lastname?: string): string {
    console.log(firstname, lastname);
    const fullname = firstname + ' ' + lastname;
    return fullname;
}

const fullname: string = getName('Ada', 'Lovelace');