/*Aufgabe: Aufgabe0
Name: Justine Zythke
Matrikel: 259315
Datum: 10.10.2018
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var UnoSpiel;
(function (UnoSpiel) {
    let colors = ["red", "blue", "green", "yellow"];
    let values = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "+2", "X", "<=>"];
    let cards = [{ color: "red", value: "0" }, { color: "blue", value: "0" }, { color: "green", value: "0" }, { color: "yellow", value: "0" }, { color: "black", value: "+4" }, { color: "black", value: "+4" }, { color: "black", value: "+4" }, { color: "black", value: "+4" }, { color: "black", value: "FW" }, { color: "black", value: "FW" }, { color: "black", value: "FW" }, { color: "black", value: "FW" }];
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
        for (let anz = n; anz > 0; anz--) {
            let r = Math.floor(Math.random() * (cards.length - 1));
            handcards.push(cards[r]);
            cards.splice(r, 1);
        }
        for (let b = 0; b < handcards.length; b++) {
            let div = document.createElement("div");
            document.getElementById("Handkarten").appendChild(div);
            div.innerHTML = handcards[b].value;
            div.classList.add("Handkarten");
            div.classList.add(handcards[b].color);
        }
    }
    document.addEventListener("DOMContentLoaded", Eingabe);
})(UnoSpiel || (UnoSpiel = {}));
//# sourceMappingURL=Aufgabe2UNO.js.map