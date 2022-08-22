// Function to get input value by id
function getInputValueById(inputId) {
    const inputField = document.getElementById(inputId);
    const inputFieldValue = inputField.value;
    const inputValue = parseInt(inputFieldValue);
    return inputValue;
}

// Function to get element value by id
function getElementValueById(elementId) {
    const elementField = document.getElementById(elementId);
    const elementFieldValue = elementField.innerText;
    const elementValue = parseInt(elementFieldValue);
    return elementValue;
}

// Function to set element value by id
function setElementValueById(elementId, result) {
    const elementField = document.getElementById(elementId);
    elementField.innerText = result;
}