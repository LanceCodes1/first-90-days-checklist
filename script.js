// script.js

const tasks = [
  { id: 1, text: "Get birth certificate" },
  { id: 2, text: "Get state ID or driver's license" },
  { id: 3, text: "Get Social Security card" },
  { id: 4, text: "Report to parole/probation officer" },
  { id: 5, text: "Confirm housing / shelter intake" },
  { id: 6, text: "Get a working phone number" },
  { id: 7, text: "Set up email address" },
  { id: 8, text: "Apply for CalFresh / benefits" },
  { id: 9, text: "Get transportation sorted (bus pass, license reinstatement)" },
  { id: 10, text: "Start job search / register with reentry employment program" },
];

const taskList = document.getElementById("task-list");

tasks.forEach(function (task) {
  const listItem = document.createElement("li");
  listItem.textContent = task.text;
  taskList.appendChild(listItem);
});