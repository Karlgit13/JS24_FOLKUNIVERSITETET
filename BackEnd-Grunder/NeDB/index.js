import Datastore from 'nedb-promise';

// Skapa en databasfil
const db = new Datastore({ filename: 'database.db', autoload: true });

// Funktion för att köra övningarna
async function run() {
  // 1. Lägg till fem personer
  await db.insert([
    { firstname: "Anna", lastname: "Svensson", age: 25 },
    { firstname: "Lars", lastname: "Svensson", age: 42 },
    { firstname: "Eva", lastname: "Karlsson", age: 33 },
    { firstname: "Oskar", lastname: "Nilsson", age: 28 },
    { firstname: "Maria", lastname: "Johansson", age: 45 }
  ]);

  // 2. Hämta alla med efternamn "Svensson"
  const svenssons = await db.find({ lastname: "Svensson" });
  console.log("Svenssons:", svenssons);

  // 3. Hämta en person med ett visst förnamn
  const anna = await db.findOne({ firstname: "Anna" });
  console.log("Anna:", anna);

  // 4. Hämta alla personer över 30
  const over30 = await db.find({ age: { $gt: 30 } });
  console.log("Över 30:", over30);

  // 5. Uppdatera en persons förnamn och ålder
  await db.update({ firstname: "Oskar" }, { $set: { firstname: "Olle", age: 35 } });
  const updated = await db.findOne({ firstname: "Olle" });
  console.log("Uppdaterad person:", updated);

  // 6. Ta bort en person (t.ex. Maria)
  await db.remove({ firstname: "Maria" }, {});
  const afterDelete = await db.find({});
  console.log("Alla efter borttagning:", afterDelete);

  // 7. Lägg till ett objekt med en array
  const arrayObj = await db.insert({ names: [] });

  // Pusha in namn i arrayen
  await db.update({ _id: arrayObj._id }, { $push: { names: "Rickard" } });
  const updatedArray = await db.findOne({ _id: arrayObj._id });
  console.log("Arrayobjekt:", updatedArray);
}

run();
