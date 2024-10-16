# Conditionals bootcamp

## IF

**bigger**
```js
let a = 10;
let b = 20;
```
Ta med hjälp av en *if-sats* reda på om talet ```a``` är större än ```b```.

**equals or not**
```js
let a = 'apple';
let b = 'pear';
```

Ta med hjälp av en *if-sats* reda på om ```a``` är lika ```b```.

Ta med hjälp av en *if-sats* reda på om ```a``` inte är lika ```b```.

## ELSE IF

**Med ta emot värde menas en variabel som har ett värde i sig redan deklarerat**.

Vill man vara lite cool och låta användaren skriva ett värde själv kan man använda en inbyggd metod som heter `prompt()`. Exempel:
```javascript
const number = prompt('Skriv in din ålder?') // Det använder skriver in sparas i variabel number
```

**Biggest**

Gör ett program som tar emot två stycken numeriska värden. Programmet ska utvärdera vilket tal som är störst och skriva ut det.

**Even or not**

Gör en program som tar ett ```number```  och ta reda på om talet är **jämt** eller **udda**.

**Lisebergsvakten**

Gör ett program som ska sitta i en sensor på lisebergs åkattration Helix. För att få åka helix ska man vara minst 150cm lång. Programmet ska skriva ut ```true``` eller ```false```.

**Lisebergsvakten 2**

På Liseberg finns 4 olika åkband; ```small```, ```medium```, ```large``` och ```platinum```. För att få åka Balder krävs ```large``` eller ```platinum```.
Gör ett program som kollar ens åkband och skriver ut ifall man får åka Balder eller inte.


**BMI kalkylator**

BMI ( Body Mass Index ) sägs vara ett hälsomått som visar på under eller övervikt. Det bör dock tas med en nypa salt då vi alla människor är unika ( och awesome! ).

Formeln för BMI är följande:
```
kroppsvikten i kg / (kroppslängden i meter * kroppslängden i meter) 
```

Resultat från formeln delas in i olika *viktklasser*.
|BMI|Klassificering|
|---|---|
|< 18,5|Undervikt|
|18,5 – 25|Normalvikt|
|25 – 30|Övervikt|
|30 > |Fetma|

Skriv en program som tar en persons ```längd i cm``` samt ```vikt i kg``` och skriver ut en BMI-klassificering.

## Switch
**Weekdays**

Gör ett program som tar ett nummer ( 1-7 ) och skriver ut vilken veckodag numret motsvarar. Ex. 1 = måndag, 3 = untzdag.
Om numret inte motsvarar någon veckodag skall programmet skriva ut ```false```.

**Month**

Gör ett program som tar ett nummer ( 1-12 ) och skriver ut vilken *månad* numret motsvarar. Ex. 1 = januari, 10 = oktober.
Om numret inte motsvarar någon månad skall programmet skriva ut ```false```. 

## TERNARY

**Adult or Minor**

let age = 18; // Du kan ändra detta värde för att testa
Använd en ternary operator för att avgöra om personen är en "vuxen" (18 år eller äldre) eller en "minderårig".

**Positive, Negative, or Zero**

let number = -5; // Du kan ändra detta värde för att testa
Använd en ternary operator för att avgöra om ett tal är positivt, negativt eller noll.

**Pass or Fail**

let score = 75; // Du kan ändra detta värde för att testa
Använd en ternary operator för att avgöra om ett betyg är "godkänt" (60 poäng eller mer) eller "icke godkänt".

**Discount Eligibility**

let customerType = 'member'; // Alternativa värden kan vara 'non-member'
Använd en ternary operator för att avgöra om en kund har rätt till rabatt ("eligible") eller inte ("not eligible") beroende på om de är en "member" eller "non-member".