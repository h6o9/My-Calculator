let string = "";
let memory = 0; // Initialize memory variable
const buttons = document.querySelectorAll('button');
const input = document.querySelector('input');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML === '=') {
            try {
                string = eval(string);
                input.value = string;
            } catch (error) {
                console.error('Invalid expression:', error);
            }
        } else if (e.target.innerHTML === 'C') {
            string = "";
            input.value = string;
        } else if (e.target.innerHTML === 'M+') {
            try {
                memory += eval(string);
            } catch (error) {
                console.error('Invalid expression:', error);
            }
            string = ""; // Clear the current input
            input.value = string;
        } else if (e.target.innerHTML === 'M-') {
            try {
                memory -= eval(string);
            } catch (error) {
                console.error('Invalid expression:', error);
            }
            string = ""; 
            input.value = string;
        } else {
            string += button.innerHTML;
            input.value = string;
        }
    });
});
