function countWords() {
    var reader = new FileReader();
    const file = document.getElementById('in').files;
    for (let index = 0; index < file.length; index++) {
        reader.readAsText(file[index]);
        reader.onload = function () {
            var resultAr = reader.result.split(' ');
            document.getElementById('lab').innerHTML = resultAr.length+1;
        }
    }
}