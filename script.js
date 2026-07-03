const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        const value = button.dataset.value;
        
        if (value === "AC") {
            display.value = "";
        }else {
            display.value += value;
        }
    });
});