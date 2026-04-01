// SELECT ELEMENTS const form = document.getElementById("todo-form"); const input = document.getElementById("task-input"); const taskList = document.getElementById("task-list");

// LOAD TASKS WHEN PAGE OPENS document.addEventListener("DOMContentLoaded", loadTasks);

// HANDLE FORM SUBMIT form.addEventListener("submit", function (e) { e.preventDefault();

const taskText = input.value.trim(); if (taskText === "") return;

addTaskToDOM(taskText); saveTask(taskText);

input.value = ""; });

// ADD TASK TO PAGE function addTaskToDOM(taskText) { const li = document.createElement("li");

const span = document.createElement("span"); span.textContent = taskText;

// MARK AS COMPLETED span.addEventListener("click", function () { span.classList.toggle("completed"); });

// DELETE BUTTON const deleteBtn = document.createElement("button"); deleteBtn.textContent = "X";

deleteBtn.addEventListener("click", function () { li.remove(); deleteTask(taskText); });

li.appendChild(span); li.appendChild(deleteBtn); taskList.appendChild(li); }

// SAVE TASK TO LOCAL STORAGE function saveTask(task) { const tasks = JSON.parse(localStorage.getItem("tasks")) || []; tasks.push(task); localStorage.setItem("tasks", JSON.stringify(tasks)); }

// LOAD TASKS FROM LOCAL STORAGE function loadTasks() { const tasks = JSON.parse(localStorage.get
