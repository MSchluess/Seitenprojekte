function rangeDeclared() {
    var lower = document.getElementById('von').value;
    var upper = document.getElementById('bis').value;

    if (lower == null || upper == null || lower >= upper) {
        alert('ERROR: Field empty or invalid numbers entered!');
        return;
    }

    document.getElementById('von').disabled = true;
    document.getElementById('bis').disabled = true;
    document.getElementById('start1').disabled = true;

    var result = Math.floor(Math.random() * upper - lower) + lower;

    var hiddenResultLabel = document.createElement('LABEL');
    hiddenResultLabel.innerHTML = result;
    document.body.appendChild(hiddenResultLabel);
}