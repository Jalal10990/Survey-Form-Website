// first i Wait for the DOM(document object model) to load(loading)
document.addEventListener("DOMContentLoaded", function () {
    // then get the form element to process
    const form = document.getElementById("survey-form");

    // the i adddd a submit event listener to the form
    form.addEventListener("submit", function (event) {
        //then i prevent the default form submission behavior
        event.preventDefault();

        // then validate the form inputs
        if (validateForm()) {
            // If validation passes, display a success message
            alert("Thank you for submitting the form!");
            form.reset(); // reset the form after submission
        }
    });

    // then function to validate the form inputs
    function validateForm() {
        // then i get the form inputs
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const age = document.getElementById("number").value.trim();
        const dropdown = document.getElementById("dropdown").value;
        const radioButtons = document.querySelectorAll('input[name="recommend"]:checked');
        const checkboxes = document.querySelectorAll('input[name="improvement"]:checked');
        const comments = document.getElementById("comments").value.trim();

        // then validate name field
        if (name === "") {
            alert("Please enter your name.");
            return false;
        }

        // then validate email field
        if (email === "" || !validateEmail(email)) {
            alert("Please enter a valid email address.");
            return false;
        }

        // the validate age field (optional but must be within range if provided)
        if (age !== "" && (isNaN(age) || age < 1 || age > 120)) {
            alert("Please enter a valid age between 1 and 120.");
            return false;
        }

        // then validate dropdown selection
        if (dropdown === "") {
            alert("Please select an option from the dropdown.");
            return false;
        }

        // then validate radio buttons (at least one selected)
        if (radioButtons.length === 0) {
            alert("Please select an option for 'Would you recommend us to a friend?'");
            return false;
        }

        // then validate checkboxes (at least one selected)
        if (checkboxes.length === 0) {
            alert("Please select at least one option for 'What would you like to see improved?'");
            return false;
        }

        // then validate comments field (optional)
        if (comments === "") {
            alert("Please provide any comments or suggestions.");
            return false;
        }

        // then if all validations pass, return true
        return true;
    }

    // then a function to validate email format
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
