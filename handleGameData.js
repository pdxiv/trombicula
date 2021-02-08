var commandHistory = [];
var commandHistoryPointer = 0;
const inputThang = document.querySelector('#textBox');
inputThang.addEventListener('keyup', updateValue);

function focusMethod() {
    document.getElementById(`textBox`).focus();
}

function updateValue(e) {
    // Register a new input
    if (e.keyCode === 13) {
        const enteredText = inputThang.value;
        inputThang.value = ``;
        const messageField = document.querySelector('#messageField');
        commandHistory.push(enteredText);
        messageField.innerHTML += `<br/>` + enteredText;
        messageField.scrollTop = messageField.scrollHeight; // Scroll to bottom        
        commandHistoryPointer = commandHistory.length;

        doSomethingWithInput(enteredText);
    }
    // Bring up previous command
    else if (e.code === `ArrowUp`) {
        if (commandHistoryPointer > 0 && commandHistory.length > 0) {
            commandHistoryPointer--;
            inputThang.value = commandHistory[commandHistoryPointer];
        }
        inputThang.selectionStart = inputThang.value.length;
        inputThang.selectionEnd = inputThang.value.length;

    }
    // Bring up later command
    else if (e.code === `ArrowDown`) {
        if (commandHistoryPointer < commandHistory.length - 1) {
            commandHistoryPointer++;
            inputThang.value = commandHistory[commandHistoryPointer];
        } else {
            commandHistoryPointer = commandHistory.length;
            inputThang.value = ``;
        }
    }
}

// Dummy "game logic"
function doSomethingWithInput(text) {
    const regex = /^ *go\s+(\w+)/;
    const found = text.match(regex);
    if (found !== null) {
        const roomField = document.querySelector('#roomField');
        roomField.innerHTML = found[1];
    }
}