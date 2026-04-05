const activities = [
  { id: 1, name: "Wake up early", completed: false },
  { id: 2, name: "Exercise", completed: false },
  { id: 3, name: "Study JavaScript", completed: false },
  { id: 4, name: "Complete assignment", completed: false }
];

const list = document.getElementById("activityList");
const progressText = document.getElementById("progressText");

// Render all activities
function renderActivities() {
  list.innerHTML = ""; // Clear the list

  activities.forEach((activity) => {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = activity.name;
    if (activity.completed) span.classList.add("completed");

    const button = document.createElement("button");
    button.textContent = activity.completed ? "Done" : "Mark Complete";
    button.disabled = activity.completed; // Disable button if completed

    button.addEventListener("click", () => {
      markComplete(activity.id);
    });

    li.appendChild(span);
    li.appendChild(button);
    list.appendChild(li);
  });

  updateProgress();
}

// Mark activity as complete by ID
function markComplete(id) {
  const activity = activities.find(a => a.id === id);
  if (activity && !activity.completed) {
    activity.completed = true;
    renderActivities(); // Re-render to reflect changes
  }
}

// Update progress text
function updateProgress() {
  const total = activities.length;
  const completedCount = activities.filter(a => a.completed).length;

  progressText.textContent =
    completedCount === total
      ? "🎉 All activities completed!"
      : `${completedCount} out of ${total} activities completed`;
}

// Initial render
renderActivities();