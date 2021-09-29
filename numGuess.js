function rangeDeclared() {
    const br = document.createElement('br');
    var lower = document.getElementById('von').value;
    var upper = document.getElementById('bis').value;
    //check if the input is valid else give an error message
    if (lower == null || upper == null || lower >= upper) {
        alert('ERROR: Field empty or invalid numbers entered!');
        return;
    }
    //disable the inputs so they cant be changed afterwards
    document.getElementById('von').disabled = true;
    document.getElementById('bis').disabled = true;
    document.getElementById('start1').hidden = true;
    //generate the random number
    var result = Math.floor(Math.random() * (upper - lower)) + parseInt(lower);
    //create a hidden label so we can access it later
    var hiddenResultLabel = document.createElement('LABEL');
    hiddenResultLabel.hidden = true;
    hiddenResultLabel.innerHTML = result;
    hiddenResultLabel.setAttribute('id', 'hideRes');
    document.body.appendChild(hiddenResultLabel);
    //create the new input field 
    var guessField = document.createElement('INPUT');
    guessField.setAttribute('id', 'guessField');
    guessField.setAttribute('type', 'number');
    document.body.appendChild(br);
    document.body.appendChild(br);
    document.body.appendChild(guessField);
    //create solution button
    var guessButton = document.createElement('BUTTON');
    guessButton.innerText = 'Rate!';
    guessButton.setAttribute('onclick', 'solve()');
    document.body.appendChild(guessButton);
}

function solve() {
    //pull valueable variables and constants
    const br = document.createElement('br');
    var lower = document.getElementById('von').value;
    var upper = document.getElementById('bis').value;
    var ans = document.getElementById('guessField').value;
    const sol = document.getElementById('hideRes').innerHTML;
    //check if the input is valid else give an error message
    if (lower > ans || ans > upper) {
        alert('Guessed Number should be within parameters.')
        return;
    }
    //check wheater the given answere and give fitting output
    document.body.appendChild(br);
    document.body.appendChild(br);
    document.body.appendChild(br);
    document.body.appendChild(br);
    var rightLabel = document.createElement('LABEL');
    rightLabel.innerHTML = (ans == sol) ? "Korrekt!":"Falsch!";
    document.body.appendChild(rightLabel);
}