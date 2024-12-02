const container = document.querySelector(".container")
const textArea = document.getElementById("textarea")
const sakerAttGöra = document.querySelector(".saker-att-göra")
const sakerGjorda = document.querySelector(".saker-gjorda")
const addBtn = document.querySelector(".addBtn")


function createTask(taskText) {
    const taskDiv = document.createElement("div")
    taskDiv.classList.add("task")

    taskDiv.innerHTML = `
    <span>${taskText}</span>
    <button class="doneBtn">Done</button>
    `

    taskDiv.querySelector(".doneBtn").addEventListener("click", () => {
        taskDiv.remove()
    })
}