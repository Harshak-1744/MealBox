document.addEventListener('DOMContentLoaded', () => {
    const confirmButton = document.getElementById('confirm-selection');
    const confirmationMessage = document.getElementById('confirmation-message');
    const selectedItems = document.getElementById('selected-items');

    confirmButton.addEventListener('click', () => {
        const veg = document.getElementById('veg').value;
        const nonVeg = document.getElementById('non-veg').value;
        const juice = document.getElementById('juice').value;

        selectedItems.innerHTML = `
            <p>Selected Veg Starter: ${veg}</p>
            <p>Selected Non-Veg Starter: ${nonVeg}</p>
            <p>Selected Juice: ${juice}</p>
        `;
        
        confirmationMessage.style.display = 'block';
        confirmationMessage.innerHTML = `
            <p>These are the items you selected. Do you want to edit them?</p>
            <button onclick="editSelection()">Edit</button>
            <button onclick="finalizeSelection()">Confirm</button>
        `;
    });
});

function editSelection() {
    document.getElementById('confirmation-message').style.display = 'none';
}

function finalizeSelection() {
    document.getElementById('confirmation-message').innerHTML = '<p>Wish you a happy meal! :)<p><img src="happyMeal.jpg" alt="Happy Meal">';
}
