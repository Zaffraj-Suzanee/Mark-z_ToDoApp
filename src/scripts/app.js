let tasks = [
  { id: 1, title: "Learn JavaScript", completed: false },
  { id: 2, title: "Build Todo App", completed: true },
  { id: 3, title: "Deploy to Vercel", completed: false }
];

let nextId = 4;

// Render tasks in the UI
function renderTasks() {
  const list = document.getElementById("taskList");
  const counter = document.getElementById("counter");
  list.innerHTML = "";

  tasks.forEach(task => {
    const li = document.createElement("li");
    li.textContent = task.title;
    li.className = task.completed ? "completed" : "";
    
    // Toggle completion on click
    li.onclick = () => toggleTask(task.id);

    // Delete button
    const delBtn = document.createElement("button");
    delBtn.textContent = "❌";
    delBtn.onclick = (e) => {
      e.stopPropagation(); // prevent toggle
      deleteTask(task.id);
    };
    
    li.appendChild(delBtn);
    list.appendChild(li);
  });

  counter.innerText = "Total Tasks: ${tasks.length}";
}

// Add a new task
function addTask() {
  const input = document.getElementById("taskInput");
  if (!input.value) return;

  tasks.push({ id: nextId++, title: input.value, completed: false });
  input.value = "";
  renderTasks();
}

// Toggle task completed
function toggleTask(id) {
  tasks = tasks.map(task =>
    task.id === id ? { ...task, completed: !task.completed } : task
  );
  renderTasks();
}

// Delete a task
function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  renderTasks();
}

// Initialize
window.addEventListener("DOMContentLoaded", () => {
  renderTasks();

  // Add button event
  const addBtn = document.getElementById("addBtn");
  if (addBtn) addBtn.onclick = addTask;
});