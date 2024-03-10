

// script.js
// Section 1: TODOs
// TODO: Register submissions from the user on the form.
// TODO: Determine the value of the data submitted and add 
//it to a JavaScript array call // TODO: Call the render function
// to update the table with the new tasks.


// script.js
// Section 2: App State Variables
let tasks = [];

// script.js
// Section 3: Cached Element References
//const taskForm = null;
//const taskTable = null;


const taskForm = document.getElementById('taskForm');
const taskTable = document.getElementById('taskTable');


// Function to handle form submissions
function handleSubmission(event) { 
    event.preventDefault();
    // TODO: Get form input values
    const taskNameInput = document.getElementById('taskName');
    const taskDescriptionInput = document.getElementById('taskDescription');
    const taskDeadlineInput = document.getElementById('taskDeadline');
    // TODO: Validate input fields
    const taskName = taskNameInput.value;
    const taskDescription = taskDescriptionInput.value;
    const taskDeadline = taskDeadlineInput.value;

     // Validate input fields
     if (taskName.trim() === '') {
        alert('Task name and deadline are required!');
        return;
    }

    // TODO: Update the tasks array
    tasks.push({ name: taskName, description: taskDescription, deadline: taskDeadline });
    render();
}



// Function to render tasks in the table
function render() {
    // TODO: Use array methods to create a new table row of data for each item in the ar
    taskTable.innerHTML = tasks.map(task => ` <tr>
<td>${task.name}</td>
<td>${task.description}</td>
<td>${task.deadline}</td>
<td><button onclick="markTaskComplete(this)">Complete</button></td> <td><button onclick="removeTask(this)">Remove</button></td>
</tr> `).join('');
}
// Function to initialize the table
function init() {
taskTable.innerHTML = ''; // Clear the table tasks = []; // Reset the tasks array render(); // Call the render function
}

// Event listener for form submission
taskForm.addEventListener('submit', handleSubmission);

// Call the init function to set up the initial state of the app
init();