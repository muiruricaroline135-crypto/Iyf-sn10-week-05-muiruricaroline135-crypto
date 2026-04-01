// SELECT ELEMENTS
const form = document.getElementById("todo-form");
const input = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

// HANDLE FORM SUBMIT EVENT
form.addEventListener("submit", function (e) {
  e.preventDefault(); // prevent page reload

  const taskText = input.value;

  if (taskText === "") return;

  // CREATE NEW LIST ITEM
  const li = document.createElement("li");
  li.textContent = taskText;

  // TOGGLE COMPLETE ON CLICK
  li.addEventListener("click", function () {
    li.classList.toggle("completed");
  });

  // CREATE DELETE BUTTON
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";

  deleteBtn.addEventListener("click", function () {
    li.remove();
  });

  // APPEND BUTTON TO LI
  li.appendChild(deleteBtn);

  // ADD LI TO LIST
  taskList.appendChild(li);

  // CLEAR INPUT
  input.value = "";
});
