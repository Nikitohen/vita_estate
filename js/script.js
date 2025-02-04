document.getElementById("submit_form").addEventListener("submit", function (event) {
    event.preventDefault();
    
    let inputs = document.querySelectorAll("input");
    let isValid = true;

    inputs.forEach(input => {
        let errorMessage = input.nextElementSibling;
        if (!input.checkValidity()) {
            isValid = false;
            errorMessage.textContent = getCustomMessage(input);
            errorMessage.style.display = "block";
        } else {
            errorMessage.textContent = "";
            errorMessage.style.display = "none";
        }
    });

    if (isValid) {
        alert("Form submitted successfully!");
    }
});

function getCustomMessage(input) {
    if (input.validity.valueMissing) {
        return "This field is required!";
    } else if (input.validity.typeMismatch && input.type === "email") {
        return "Please enter a valid email address!"
    } 
    return "Invalid input!";
}