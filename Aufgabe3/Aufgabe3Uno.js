/*Aufgabe: Aufgabe0
Name: Justine Zythke
Matrikel: 259315
Datum: 10.10.2018
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var UnoSpielA3;
(function (UnoSpielA3) {
    document.addEventListener("DOMContentLoaded", Eingabe);
    document.addEventListener("keydown", pressKeyboard);
    let colors = ["red", "blue", "green", "yellow"];
    let values = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "+2", "X", "<=>"];
    let cards = [{ color: "red", value: "0" }, { color: "blue", value: "0" }, { color: "green", value: "0" }, { color: "yellow", value: "0" }, { color: "black", value: "+4" }, { color: "black", value: "+4" }, { color: "black", value: "+4" }, { color: "black", value: "+4" }, { color: "black", value: "FW" }, { color: "black", value: "FW" }, { color: "black", value: "FW" }, { color: "black", value: "FW" }];
    let placeToKeep = [];
    for (let i = 0; i < colors.length; i++) {
        for (let j = 0; j < values.length; j++) {
            for (let k = 0; k < 2; k++) {
                let card = { color: colors[i], value: values[j] };
                cards.push(card);
            }
        }
    }
    console.log(cards);
    let handcards = [];
    function Eingabe() {
        var kartenanzahl = prompt("Kartenanzahl");
        let n = parseInt(kartenanzahl);
        randomCard(n);
        displayHand();
        let button = document.getElementById("button");
        button.addEventListener("click", sortierekarten);
        let pull = document.getElementById("Nachziehstapel");
        pull.addEventListener("click", pullFromNachziehstapel);
    }
    function randomCard(_anz) {
        for (let anz = _anz; anz > 0; anz--) {
            let r = Math.floor(Math.random() * (cards.length - 1));
            handcards.push(cards[r]);
            cards.splice(r, 1);
        }
    }
    function pullFromNachziehstapel() {
        randomCard(1);
        displayHand();
    }
    function pressKeyboard(_event) {
        if (_event.keyCode == 32) {
            pullFromNachziehstapel();
        }
    }
    function displayHand() {
        document.getElementById("Handkarten").innerHTML = "";
        for (let b = 0; b < handcards.length; b++) {
            let div = document.createElement("div");
            document.getElementById("Handkarten").appendChild(div);
            div.innerHTML = handcards[b].value;
            let id = b.toString();
            div.setAttribute("id", id);
            div.classList.add("Handkarten");
            div.classList.add(handcards[b].color);
            div.addEventListener("click", karteAblegen);
        }
    }
    function karteAblegen(_event) {
        document.getElementById("Ablagestapel").innerHTML = "";
        let clickedCard = _event.target;
        let index = parseInt(clickedCard.id);
        placeToKeep.push(handcards[index]);
        let div = document.createElement("div");
        document.getElementById("Ablagestapel").appendChild(div);
        div.innerHTML = handcards[index].value;
        div.classList.add(handcards[index].color);
        handcards.splice(index, 1);
        displayHand();
    }
    function sortierekarten() {
        console.log(handcards);
        document.getElementById("Handkarten").innerHTML = "";
        handcards.sort(function (a, b) {
            if (a.color > b.color) {
                return 1;
            }
            if (a.color < b.color) {
                return -1;
            }
            if (a.value > b.value) {
                return 1;
            }
            if (a.value < b.value) {
                return -1;
            }
            return 0;
        });
        console.log(handcards);
        displayHand();
    }
})(UnoSpielA3 || (UnoSpielA3 = {}));
//# sourceMappingURL=Aufgabe3Uno.js.map