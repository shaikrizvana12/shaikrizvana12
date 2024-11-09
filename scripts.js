// Contact Form Submission Handling
document.getElementById('order-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const vegetables = document.getElementById('vegetables').selectedOptions;

    // Basic Validation
    if (!name || !email || vegetables.length === 0) {
        alert('Please fill in all fields and select at least one vegetable.');
        return;
    }

    // Email Regex Validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // If valid, alert the user with their order details
    alert(`Order Submitted for ${name}!\nEmail: ${email}\nVegetables: ${Array.from(vegetables).map(option => option.value).join(', ')}`);
});

// To-Do List Functionality
const addButton = document.getElementById('add-vegetable');
const vegetableSelect = document.getElementById('add-vegetable-select');
const todoList = document.getElementById('todo-list');

// Add Vegetable to To-Do List
addButton.addEventListener('click', function() {
    const vegetableName = vegetableSelect.value;

    if (vegetableName.trim() !== '') {
        addToDoItem(vegetableName);
    }
});

// Function to Add Item to To-Do List
function addToDoItem(vegetableName) {
    const listItem = document.createElement('li');
    listItem.classList.add('todo-item');
    listItem.textContent = vegetableName;

    // Add Remove Button to List Item
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('remove-btn');
    removeButton.addEventListener('click', function() {
        removeToDoItem(listItem);
    });

    // Add Click Event to Mark as Completed
    listItem.addEventListener('click', function() {
        listItem.classList.toggle('completed');
    });

    // Append the Remove Button and Item to the List
    listItem.appendChild(removeButton);
    todoList.appendChild(listItem);
}

// Function to Remove Item from To-Do List
function removeToDoItem(item) {
    todoList.removeChild(item);
}
