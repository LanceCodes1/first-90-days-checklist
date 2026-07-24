// script.js
const tasks = [
  { id: 1, text: "Get birth certificate", completed: false },
  { id: 2, text: "Get state ID or driver's license", completed: false },
  { id: 3, text: "Get Social Security card", completed: false },
  { id: 4, text: "Report to parole/probation officer", completed: false },
  { id: 5, text: "Confirm housing / shelter intake", completed: false },
  { id: 6, text: "Get a working phone number", completed: false },
  { id: 7, text: "Set up email address", completed: false },
  { id: 8, text: "Apply for CalFresh / benefits", completed: false },
  { id: 9, text: "Get transportation sorted (bus pass, license reinstatement)", completed: false },
  { id: 10, text: "Start job search / register with reentry employment program", completed: false },
];
const taskList = document.getElementById("task-list");

function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach(function (task) {
    const listItem = document.createElement("li");
    listItem.textContent = task.text;
    listItem.dataset.id = task.id;
    if (task.completed) {
      listItem.classList.add("completed");
    }
    taskList.appendChild(listItem);
  });
}

renderTasks();

taskList.addEventListener("click", function (event) {
  const clickedId = event.target.dataset.id;
  if (!clickedId) {
    return;
  }
  const clickedTask = tasks.find(function (task) {
    return task.id === Number(clickedId);
  });
  clickedTask.completed = !clickedTask.completed;
  renderTasks();
});

const addTaskForm = document.getElementById("add-task-form");
const taskInput = document.getElementById("task-input");

function addTask(text) {
  if (text === "") {
    return;
  }

  const newId = tasks.length === 0
    ? 1
    : Math.max(...tasks.map(function (task) { return task.id; })) + 1;

  tasks.push({ id: newId, text: text, completed: false });
  renderTasks();
  taskInput.value = "";
}

addTaskForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const typedText = taskInput.value.trim();
  addTask(typedText);
});
