const tasks = [];

function addTask() {
	const taskInput = document.getElementById("task");
	if (taskInput.value !== "") {
		tasks.push(taskInput.value);
	
		taskInput.value = "";
		
		updateTaskList();
	}
    else{
        alert('It is empty')
    }
}

function updateTaskList() {
	const taskListDiv = document.querySelector(".TasksList");

	taskListDiv.innerHTML = "";



	tasks.forEach(function(task, index) {
		const taskDiv = document.createElement("div");
		taskDiv.classList.add("task");
	
		const checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.id = "task_" + index;

		const label = document.createElement("label");
		label.setAttribute("for", "task_" + index);
		label.textContent = task;
		const button = document.createElement("button");
		button.classList.add("delete");
		button.innerHTML = '<i class="fas fa-times"></i>';
		
		taskDiv.appendChild(checkbox);
		taskDiv.appendChild(label);
		taskDiv.appendChild(button);
		taskListDiv.appendChild(taskDiv);
	});
}