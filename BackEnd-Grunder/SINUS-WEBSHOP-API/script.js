// Hämta alla produkter från din API och visa dem i HTML
fetch("http://localhost:3000/products")
    .then(res => res.json())
    .then(products => {
        const container = document.getElementById("product-list");

        products.forEach(product => {
            const div = document.createElement("div");
            div.innerHTML = `
        <h2>${product.title}</h2>
        <p>${product.shortDesc}</p>
        <p><strong>Pris:</strong> ${product.price} kr</p>
        <img src="./images/${product.imgFile}" alt="${product.title}" width="150"/>
        <hr />
      `;
            container.appendChild(div);
        });
    })
    .catch(err => {
        console.error("Fel vid hämtning av produkter:", err);
    });
