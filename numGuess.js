function rangeDeclared() {
    var lower = document.getElementById('von').value;
    var upper = document.getElementById('bis').value;

    if (lower == null || upper == null || lower >= upper) {
        console.log('ERROR: Field empty or invalid numbers entered!');
        alert('ERROR: Field empty or invalid numbers entered!');
        return;
    }

    document.getElementById('von').disabled = true;
    document.getElementById('bis').disabled = true;
    document.getElementById('start1').disabled = true;

    document.createElement()
}