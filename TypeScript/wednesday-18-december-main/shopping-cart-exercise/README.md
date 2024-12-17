# Övning shopping cart

I denna övning ska du få fixa till en e-handelssida som inte fungerar. En användare får en lista med produkter som den kan lägga till i en varukorg och sedan se sina tillagda produkter genom att klicka på länken **cart**.

## Instruktioner

### Level 1

På denna nivå är er utmaning att lösa så sidan fungerar och det går att lägga till en produkt i varukorgen.
All HTML, CSS och Javascript som ni behöver finns. Testa er fram och använd konsolen i Chrome developer tools för att se eventuella Javascript fel. När sidan funkar har ni löst det.

Se gi nedan på hur det ska fungera.

![alt text](shopping-cart-example.gif)

### Level 2

**På denna nivå och level 3 behöver ni utöka och skriva egen JS-kod!**

Nu när ni har fått er sida att fungera vill man ha lite ny funktionalitet. Bygg så det inte går att kunna lägga till samma bok igen och om en användare klickar på knappen **Add to cart** på en bok som redan är tillagd så ska denna se ett meddelande om att boken redan är tillagd i varukorgen.

<details>
    <summary>hint</summary>
    Använd for-loop för att söka igenom din array efter samma produkt.
</details>

### Level 3

Ytterligare funktionalitet önskas! Nu vill man även kunna ta bort produkter som är tillagda i varukorgen.
Lägg till en knapp som heter **Remove product** i din lista i varukorgen och koppla en `eventListener` till varje knapp. När en användare klickar på **Remove product** ska produkten tas bort och kunna läggas till igen.
