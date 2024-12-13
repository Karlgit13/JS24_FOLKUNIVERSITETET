let twoTypes: string | [] = [];

let names: string[] = [];
names.push("Kalle");
console.log(names);

function getNames(firstName: string, lastName: string) {
  return firstName + lastName;
}

getNames("Kalle", "Vareskog");
