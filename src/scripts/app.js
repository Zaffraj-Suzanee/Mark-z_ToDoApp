let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let filter = "all";

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {
    const input = document.getElementById("taskInput");
    if (!input.value) return;

    tasks.push({
        id: Date.now(),
        text: input.value,
        completed: false
    });

    input.value = "";
    saveTasks();
    renderTasks();
}

function toggleTask(id) {
    tasks = tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
    );
    saveTasks();
    renderTasks();
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    saveTasks();
    renderTasks();
}

function filterTasks(type) {
    filter = type;
    renderTasks();
}

function renderTasks() {
    const list = document.getElementById("taskList");
    const counter = document.getElementById("counter");
    list.innerHTML = "";

    let filtered = tasks;
    if (filter === "active") filtered = tasks.filter(t => !t.completed);
    if (filter === "completed") filtered = tasks.filter(t => t.completed);

    filtered.forEach(task => {
        const li = document.createElement("li");
        li.className = task.completed ? "completed" : "";
        li.innerHTML = `
      <span onclick="toggleTask(${task.id})">${task.text}</span>
      <button onclick="deleteTask(${task.id})">❌</button>
    `;
        list.appendChild(li);
    });

    counter.innerText = `Total Tasks: ${tasks.length}`;
}

renderTasks();