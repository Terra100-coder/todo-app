const input = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");

function addTask() {
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Tu dois écrire quelque chose !");
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskText;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Supprimer";
  deleteBtn.classList.add("delete-btn");

  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(deleteBtn);

  taskList.appendChild(li);

  input.value = "";
}

addBtn.addEventListener("click", addTask);

input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});
