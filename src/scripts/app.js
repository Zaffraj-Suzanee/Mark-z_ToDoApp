let tasks = []; // tasks come from backend API
const API_URL = "/api/todos"; // Vercel backend endpoint
let filter = "all";

// Fetch tasks from backend
async function loadTasks() {
    try {
        const res = await fetch(API_URL);
        tasks = await res.json();
        renderTasks();
    } catch (error) {
        console.error("Failed to load tasks:", error);
    }
}

// Save / Add task
async function addTask() {
    const input = document.getElementById("taskInput");
    if (!input.value) return;

    try {
        const res = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text: input.value })
        });

        const newTask = await res.json();
        tasks.push(newTask);

        input.value = "";
        renderTasks();
    } catch (error) {
        console.error("Failed to add task:", error);
    }
}

// Toggle task completed
async function toggleTask(id) {
    try {
        await fetch(`${API_URL}/${id}`, {
            method: "PUT"
        });

        tasks = tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        );
        renderTasks();
    } catch (error) {
        console.error("Failed to toggle task:", error);
    }
}

// Delete task
async function deleteTask(id) {
    try {
        await fetch(`${API_URL}/${id}`, {
            method: "DELETE"
        });

        tasks = tasks.filter(task => task.id !== id);
        renderTasks();
    } catch (error) {
        console.error("Failed to delete task:", error);
    }
}

// Filter tasks
function filterTasks(type) {
    filter = type;
    renderTasks();
}

// Render tasks in UI
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

// Load tasks on page load
loadTasks();