document.querySelector(".art-1 h3").textContent = "Potato"

document.querySelector("nav a:first-child").textContent = "Start"

document.querySelector("nav a:nth-child(3)").textContent = "Mail us"

document.querySelector(".art-2 p").textContent = "test"

document.querySelector(".art-1 button").style.backgroundColor = "green"
document.querySelector(".art-1 button").textContent = "order"

document.querySelector(".art-1 figure").style.backgroundColor = "green"
document.querySelector(".art-2 figure").style.backgroundColor = "blue"
document.querySelector(".art-3 figure").style.backgroundColor = "red"

document.querySelector("footer section article:nth-child(2) p").textContent = "adresss"

document.querySelectorAll("p").forEach((p) => {
    p.style.color = "black"
})

document.querySelectorAll("button").forEach((button) => {
    button.innerHTML = "add to cart"
    button.style.width = "auto"
})

document.querySelector("nav a:first-child").classList.add("active")

document.querySelector(".logo").classList.remove("logo")


const newProduct = document.createElement("article")
newProduct.classList.add("art-4")
newProduct.innerHTML = `
    <figure><img src="img/hoodie-forrest.png" alt="hoodie"></figure>
    <h2>Sinus Hoodie</h2>
    <h3>Forrest</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolores.</p>
    <button>Add to Cart</button> `
document.querySelector("main").appendChild(newProduct)

document.querySelectorAll("button").forEach((button) => {
    button.style.width = "auto"
})


document.querySelector("header img").addEventListener("click", () => {
    console.log("found you");

})



document.querySelectorAll("article").forEach((article) => {
    article.addEventListener("click", () => {
        const hoodieName = article.querySelector("h3").textContent
        console.log(`Hi im article ${hoodieName}`);

    })
})