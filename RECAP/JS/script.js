function changeColor() {
    const color = document.getElementById("colorPicker").value
    document.getElementById("colorBox").style.background = color


    document.querySelector(".colorText").innerHTML = color
}