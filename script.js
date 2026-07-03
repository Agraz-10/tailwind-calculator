const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        const value = button.dataset.value;
        
        if (value === "AC") {
            display.value = "";
        }else if (value === "DEL") {
            display.value = display.value.slice(0, -1);
        }else if (value === "=") {
            display.value = eval(display.value);
        }else {
            display.value += value;
        }
    });
});