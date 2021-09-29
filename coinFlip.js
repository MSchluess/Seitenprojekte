function flip() {
    var picture = document.getElementById('pic');
    if (Math.random() < 0.5) {
        picture.setAttribute('src', 'coin.png');
    } else {
        picture.setAttribute('src', 'dollar.png');
    }
}