const display = document.getElementById("display");
const clearButton = document.getElementById("clear");
const buttons = document.querySelectorAll("button");
const operators = ["+", "-", "*", "/", "%"];

function updateDisplaySize() {
    let length = display.value.length;

    display.classList.remove("text-5xl", "text-4xl", "text-3xl", "text-2xl");

    if (length <= 10) {
        display.classList.add("text-5xl");
    } else if (length <= 15) {
        display.classList.add("text-4xl");
    } else if (length <= 20) {
        display.classList.add("text-3xl");
    } else {
        display.classList.add("text-2xl");
    }
}

function updateClearButton()  {
    
    if(display.value === "") {
        clearButton.textContent = "AC";
    } else {
        clearButton.textContent = "C";
    }
}

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        const value = button.dataset.value;

        if (display.value === "Error" && value !== "AC") {
            display.value = "";
        } else if (value === "SIGN") {
            if (display.value !== ""){
                if (display.value.startsWith("-")) {
                    display.value = display.value.slice(1);
                } else {
                    display.value = "-" + display.value;
                }
            } 
        } else if (value === "AC") {
            display.value = "";
        } else if (value === "DEL") {
            display.value = display.value.slice(0, -1);
        } else if (value === "=") {
            try{
                let result = eval(display.value);
                
                if (Number.isInteger(result)) {
                    display.value = result;
                } else {
                    display.value = parseFloat(result.toFixed(10));
                }
            } catch (error) {
                display.value = "Error";
            }
        } else {

            if (display.value === "" && ["+", "*", "/", "%"].includes(value)) {
                return;
            }

            let lastCharacter = display.value.slice(-1);
            if (operators.includes(lastCharacter) && operators.includes(value)){
                return;
            }

            if (value === ".") {
                let numbers = display.value.split(/[\+\-\*\/\%]/);
                let currentNumber = numbers[numbers.length - 1];
                if (currentNumber.includes(".")) {
                    return;
                }
            }
            display.value += value;
        }

        updateDisplaySize();
        updateClearButton();
    });
});