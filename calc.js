function clearScreen() {
    document.getElementById('screen').innerText = '';
}

function appendCharacter(character) {
    let screen = document.getElementById('screen');
    screen.innerText += character;
}

function calculateResult() {
    let screen = document.getElementById('screen');
    try {
        screen.innerText = eval(screen.innerText);
    } catch {
        screen.innerText = 'Error';
    }
}