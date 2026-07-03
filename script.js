const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");
const operators = ["+", "-", "*", "/", "%"];

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        const value = button.dataset.value;

        if (display.value === "Error" && value !== "AC") {
            display.value = "";
        }
        
        if (value === "AC") {
            display.value = "";
        } else if (value === "DEL") {
            display.value = display.value.slice(0, -1);
        } else if (value === "=") {
            try{
                display.value = eval(display.value);
            } catch (error) {
                display.value = "Error";
            }
        } else {

            if (display.value === "" && ["+", "-", "*", "/", "%"].includes(value)) {
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
    });
});