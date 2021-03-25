function shuffle() {
    var container = document.getElementById("container");
    var cardArray = Array.prototype.slice.call(container.getElementsByClassName('card'));
    cardArray.forEach(function (ele) {
        container.removeChild(ele);
    })
    shuffleArray(cardArray);
    cardArray.forEach(function (ele) {
        container.appendChild(ele);
    })
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function sortCards() {

    var toSortArray = document.getElementById('container').children;
    toSortArray = Array.prototype.slice.call(toSortArray, 0);

    toSortArray.sort(function (a, b) {
        var aord = +a.id.split('-')[1];
        var bord = +b.id.split('-')[1];
        return (aord > bord) ? 1 : -1;
    });

    var parent = document.getElementById('container');
    parent.innerHTML = "";

    for (var i = 0, l = toSortArray.length; i < l; i++) {
        parent.appendChild(toSortArray[i]);
    }
}