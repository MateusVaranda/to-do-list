const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton")
const taskList = document.getElementById("taskList")

addButton.addEventListener("click", () => {
    if (taskInput.value.trim() === "") {
        return;
    }
    const item = document.createElement("li");
    item.textContent = taskInput.value;
    taskList.appendChild(item);
    taskInput.value = "";

    const deleteButton = document.createElement("button")
    deleteButton.textContent = "Deletar";
    item.appendChild(deleteButton);

    deleteButton.addEventListener("click", () => {
        item.remove();
    })

});

