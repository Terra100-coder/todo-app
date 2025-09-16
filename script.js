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

  const editBtn = document.createElement("button");
  editBtn.textContent = "Modifier";
  editBtn.classList.add("edit-btn");

  editBtn.addEventListener("click", () => {
    const newText = prompt(" Modifier la tâche :", li.firstChild.textContent);
    if (newText !== null && newText.trim() !== "") {
      li.firstChild.textContent = newText.trim();
    }
  });

  li.appendChild(editBtn);

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
