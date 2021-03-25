// Performing Shuffle task
function shuffle() {
    var container = document.getElementById("container");
    //Adding all the cards to an array
    var cardArray = Array.prototype.slice.call(container.getElementsByClassName('card'));
    cardArray.forEach(function (ele) {
        container.removeChild(ele);
    })
    shuffleArray(cardArray);
    cardArray.forEach(function (ele) {
        container.appendChild(ele);
    })
}
//Shuffling the array using Random()
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

//Performing Sort function by ID
function sortCards() {

    var toSortArray = document.getElementById('container').children;
    toSortArray = Array.prototype.slice.call(toSortArray, 0);

    toSortArray.sort(function (a, b) {
        var aord = +a.id.split('-')[1];
        var bord = +b.id.split('-')[1];
        // two elements don't have the same ID's
        return (aord > bord) ? 1 : -1;
    });

    var parent = document.getElementById('container');
    parent.innerHTML = "";

    for (var i = 0, l = toSortArray.length; i < l; i++) {
        parent.appendChild(toSortArray[i]);
    }
}