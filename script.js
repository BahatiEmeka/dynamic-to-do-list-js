document.addEventListener('DOMContentLoaded', function() {
    // Select the DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to load tasks from Local Storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); // Load tasks without saving duplicates
    }

    // Function to add a task to the to-do list
    function addTask(taskText, save = true) {
        // If the taskText is empty, return early
        if (!taskText) {
            return;
        }

        // Create a new <li> element for the task
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        // Create the 'Remove' button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.classList.add('remove-btn');

        // Add functionality to remove the task when 'Remove' button is clicked
        removeButton.onclick = function() {
            taskList.removeChild(taskItem);
            removeTaskFromStorage(taskText);  // Remove task from Local Storage as well
        };

        // Append the remove button to the task item
        taskItem.appendChild(removeButton);

        // Append the new task item to the task list
        taskList.appendChild(taskItem);

        // Save task to Local Storage if 'save' is true
        if (save) {
            saveTaskToStorage(taskText);
        }

        // Clear the input field after adding the task
        taskInput.value = "";
    }

    // Function to save tasks to Local Storage
    function saveTaskToStorage(taskText) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }

    // Function to remove tasks from Local Storage
    function removeTaskFromStorage(taskText) {
        let storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks = storedTasks.filter(task => task !== taskText);  // Remove the task from the array
        localStorage.setItem('tasks', JSON.stringify(storedTasks));    // Save the updated task array
    }

    // Event listener for the 'Add Task' button
    addButton.addEventListener('click', function() {
        const taskText = taskInput.value.trim();  // Get trimmed input value
        if (taskText) {
            addTask(taskText);  // Add task and save to Local Storage
        } else {
            alert("Please enter a task.");
        }
    });

    // Event listener to allow adding tasks by pressing the 'Enter' key
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            const taskText = taskInput.value.trim();
            if (taskText) {
                addTask(taskText);  // Add task and save to Local Storage
            } else {
                alert("Please enter a task.");
            }
        }
    });

    // Load tasks from Local Storage when the page loads
    loadTasks();
});

    // Select the DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a task to the to-do list
    function addTask() {
        // Get the trimmed value from the task input field
        const taskText = taskInput.value.trim();

        // Check if taskText is not empty
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create a new <li> element for the task
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        // Create the 'Remove' button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.classList.add('remove-btn');

        // Add functionality to remove the task when 'Remove' button is clicked
        removeButton.onclick = function() {
            taskList.removeChild(taskItem);
        };

        // Append the remove button to the task item
        taskItem.appendChild(removeButton);

        // Append the new task item to the task list
        taskList.appendChild(taskItem);

        // Clear the input field after adding the task
        taskInput.value = "";
    }

    // Add event listener to the 'Add Task' button to call addTask on click
    addButton.addEventListener('click', addTask);

    // Add event listener to allow adding tasks by pressing the 'Enter' key
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter'
