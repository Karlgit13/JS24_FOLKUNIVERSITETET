const productButtons: NodeList = document.querySelectorAll("button");
const shoppingCart: (string | null)[] = [];
const cart: HTMLElement | null = document.querySelector("#cart");
const openCartButton: HTMLElement | null = document.querySelector("#open-cart");

function updateCart(): void {}

function addClickEvent(): void {
  // Void betyder att funktionen ej returnerar något värde
  // För att kunna använda parentElement behöver vi göra om det till ett HTMLElement istället för typen EventTarget
}

function listProductsInCart(): void {}

addClickEvent();
