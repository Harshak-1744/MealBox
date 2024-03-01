document.addEventListener('DOMContentLoaded', (function() {
    const confirmButton = document.getElementById('confirm-selection');
    const confirmationMessage = document.getElementById('confirmation-message');
    const selectedItems = document.getElementById('selected-items');

    // Cache DOM references for inputs
    const vegInput = document.getElementById('veg');
    const nonVegInput = document.getElementById('non-veg');
    const juiceInput = document.getElementById('juice');

    confirmButton.addEventListener('click', function() {
        // Use cached inputs
        const veg = vegInput.value;
        const nonVeg = nonVegInput.value;
        const juice = juiceInput.value;

        selectedItems.innerHTML = `
            <p>Selected Veg Starter: ${veg}</p>
            <p>Selected Non-Veg Starter: ${nonVeg}</p>
            <p>Selected Juice: ${juice}</p>
        `;
        
        confirmationMessage.style.display = 'block';
        confirmationMessage.innerHTML = `
            <p>These are the items you selected. Do you want to edit them?</p>
            <button id="edit-selection">Edit</button>
            <button id="finalize-selection">Confirm</button>
        `;

        // Use event delegation for dynamically added buttons
        confirmationMessage.addEventListener('click', function(event) {
            if (event.target.id === 'edit-selection') {
                editSelection();
            } else if (event.target.id === 'finalize-selection') {
                finalizeSelection();
            }
        }, { once: true }); // Use { once: true } to automatically remove the listener after execution
    });

    function editSelection() {
        confirmationMessage.style.display = 'none';
    }

    function finalizeSelection() {
        confirmationMessage.innerHTML = '<p>Wish you a happy meal! :)<p><img src="happyMeal.jpg" alt="Happy Meal">';
    }
})());
