let outputScreen = document.getElementById("output-screen");

// Function to handle display updates
function display(num) {
    outputScreen.value += num;
}

// Function to calculate the result
function calculate() {
   try {
       outputScreen.value = eval(outputScreen.value);
   } catch (err) {
       alert("Invalid equation!");
   }
}

// Function to clear the screen
function allClear() {
    outputScreen.value = "";
}

// Function to delete the last character
function del() {
    outputScreen.value = outputScreen.value.slice(0, -1);
}

// Add event listener for keypresses
document.addEventListener('keydown', function(event) {
    const key = event.key;

    if (!isNaN(key)) {  // Number keys
        display(key);
    } else if (key === '+') {
        display('+');
    } else if (key === '-') {
        display('-');
    } else if (key === '*') {
        display('*');
    } else if (key === '/') {
        display('/');
    } else if (key === '%') {
        display('%');
    } else if (key === '.') {
        display('.');
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Backspace') {
        del();
    } else if (key === 'Escape') {
        allClear();
    }
});

// Add click event listeners to buttons
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function() {
        const buttonText = this.textContent;

        if (buttonText === 'C') {
            allClear();
        } else if (buttonText === 'DEL') {
            del();
        } else if (buttonText === '=') {
            calculate();
        } else {
            display(buttonText);
        }
    });
});
