document.addEventListener("DOMContentLoaded", function() {
    // Initialize Flatpickr for date selection
    flatpickr("#dates", {
        dateFormat: "Y-m-d",
        mode: "range"
    });

    // Toggle guests dropdown visibility
    document.getElementById('guests').addEventListener('click', function () {
        var dropdown = document.getElementById('guestsDropdown');
        dropdown.style.display = dropdown.style.display === "none" ? "block" : "none";
    });

    // Add event listeners for incrementing and decrementing adults, children, and rooms
    document.getElementById('adults-plus').addEventListener('click', function() {
        incrementValue('adults');
    });

    document.getElementById('adults-minus').addEventListener('click', function() {
        decrementValue('adults');
    });

    document.getElementById('children-plus').addEventListener('click', function() {
        incrementValue('children');
    });

    document.getElementById('children-minus').addEventListener('click', function() {
        decrementValue('children');
    });

    document.getElementById('rooms-plus').addEventListener('click', function() {
        incrementValue('rooms');
    });

    document.getElementById('rooms-minus').addEventListener('click', function() {
        decrementValue('rooms');
    });
});

// Function to increment the input value
function incrementValue(inputId) {
    var input = document.getElementById(inputId);
    var currentValue = parseInt(input.value);
    input.value = currentValue + 1;
    updateGuests();
}

// Function to decrement the input value with a minimum of 0
function decrementValue(inputId) {
    var input = document.getElementById(inputId);
    var currentValue = parseInt(input.value);
    if (currentValue > 0) {
        input.value = currentValue - 1;
        updateGuests();
    }
}

// Function to update the "Adults, Children & Rooms" input
function updateGuests() {
    var adults = document.getElementById('adults').value;
    var children = document.getElementById('children').value;
    var rooms = document.getElementById('rooms').value;
    var guests = "Adults: " + adults + ", Children: " + children + ", Rooms: " + rooms;
    document.getElementById('guests').value = guests;
}
