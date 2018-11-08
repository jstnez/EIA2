/*Aufgabe: Aufgabe0
Name: Justine Zythke
Matrikel: 259315
Datum: 10.10.2018
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
namespace UnoSpielA3 {

    document.addEventListener("DOMContentLoaded", Eingabe);
    document.addEventListener("keydown", pressKeyboard);

    interface Unocard {
        color: string;
        value: string;
    }

    let colors: string[] = ["red", "blue", "green", "yellow"];
    let values: string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "+2", "X", "<=>"];
    let cards: Unocard[] = [{ color: "red", value: "0" }, { color: "blue", value: "0" }, { color: "green", value: "0" }, { color: "yellow", value: "0" }, { color: "black", value: "+4" }, { color: "black", value: "+4" }, { color: "black", value: "+4" }, { color: "black", value: "+4" }, { color: "black", value: "FW" }, { color: "black", value: "FW" }, { color: "black", value: "FW" }, { color: "black", value: "FW" }];
    let placeToKeep: Unocard[] = [];

    for (let i: number = 0; i < colors.length; i++) {
        for (let j: number = 0; j < values.length; j++) {
            for (let k: number = 0; k < 2; k++) {
                let card: Unocard = { color: colors[i], value: values[j] };
                cards.push(card);
            }
        }
    }
    console.log(cards);

    let handcards: Unocard[] = [];

    function Eingabe(): void {
        var kartenanzahl: string = prompt("Kartenanzahl");
        let n: number = parseInt(kartenanzahl);

        randomCard(n);
        displayHand();

        let button: HTMLElement = document.getElementById("button");
    button.addEventListener("click", sortierekarten);
        
        let pull: HTMLElement = document.getElementById("Nachziehstapel");
        pull.addEventListener("click", pullFromNachziehstapel);

    }

    function randomCard(_anz: number): void {
        for (let anz: number = _anz; anz > 0; anz--) {
            let r: number = Math.floor(Math.random() * (cards.length - 1));
            handcards.push(cards[r]);
            cards.splice(r, 1);
        }
    }

    function pullFromNachziehstapel(): void {
        randomCard(1);
        displayHand();

    }

    function pressKeyboard(_event: KeyboardEvent): void {
        if (_event.keyCode == 32) {
            pullFromNachziehstapel();
        }
    }

    function displayHand(): void {

        document.getElementById("Handkarten").innerHTML = "";
        for (let b: number = 0; b < handcards.length; b++) {
            let div: HTMLElement = document.createElement("div");
            document.getElementById("Handkarten").appendChild(div);
            div.innerHTML = handcards[b].value;
            let id: string = b.toString();
            div.setAttribute("id", id);
            div.classList.add("Handkarten");
            div.classList.add(handcards[b].color);
            div.addEventListener("click", karteAblegen);

        }
    }

    function karteAblegen(_event: MouseEvent): void {
        document.getElementById("Ablagestapel").innerHTML = "";
        let clickedCard: HTMLElement = <HTMLElement>_event.target;
        let index: number = parseInt(clickedCard.id);
        placeToKeep.push(handcards[index]);
        let div: HTMLElement = document.createElement("div");
        document.getElementById("Ablagestapel").appendChild(div);
        div.innerHTML = handcards[index].value;
        div.classList.add(handcards[index].color);
        handcards.splice(index, 1);
        displayHand();
    }
    
    

    function sortierekarten(): void {
        console.log(handcards);
        document.getElementById("Handkarten").innerHTML = "";
        handcards.sort(function(a: Unocard, b: Unocard): number {
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

}