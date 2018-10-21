/*Aufgabe: Aufgabe0
Name: Justine Zythke
Matrikel: 259315
Datum: 10.10.2018
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
/* Zuordnung der karten */
var Aufgabe2;
(function (Aufgabe2) {
    function UnoSpiel() {
        let K0 = {
            name: "0",
            red: 1,
            blue: 1,
            green: 1,
            yellow: 1
        };
        let K1 = {
            name: "1",
            red: 2,
            blue: 2,
            green: 2,
            yellow: 2
        };
        let K2 = {
            name: "2",
            red: 2,
            blue: 2,
            green: 2,
            yellow: 2
        };
        let K3 = {
            name: "3",
            red: 2,
            blue: 2,
            green: 2,
            yellow: 2
        };
        let K4 = {
            name: "4",
            red: 2,
            blue: 2,
            green: 2,
            yellow: 2
        };
        let K5 = {
            name: "5",
            red: 2,
            blue: 2,
            green: 2,
            yellow: 2
        };
        let K6 = {
            name: "6",
            red: 2,
            blue: 2,
            green: 2,
            yellow: 2
        };
        let K7 = {
            name: "7",
            red: 2,
            blue: 2,
            green: 2,
            yellow: 2
        };
        let K8 = {
            name: "8",
            red: 2,
            blue: 2,
            green: 2,
            yellow: 2
        };
        let K9 = {
            name: "9",
            red: 2,
            blue: 2,
            green: 2,
            yellow: 2
        };
        let Kr = {
            name: "Reverse",
            red: 2,
            blue: 2,
            green: 2,
            yellow: 2
        };
        let Kz = {
            name: "Plus 2",
            red: 2,
            blue: 2,
            green: 2,
            yellow: 2
        };
        let Kaus = {
            name: "Aussetzen",
            red: 2,
            blue: 2,
            green: 2,
            yellow: 2
        };
        /* Erstellung des Array*/
        let AlleUnoKarten = [K0, K1, K2, K3, K4, K5, K6, K7, K8, K9, Kr, Kz, Kaus];
        let s1 = 4;
        let s2 = 4;
        let c = "";
        function random1(x) {
            return Math.floor(Math.random() * Math.floor(x));
        }
        function placeDiv(_color, _v, _y) {
            let div = document.createElement("div");
            document.body.appendChild(div);
            div.setAttribute("id", "a" + _y);
            document.getElementById("a" + _y).innerHTML += _v;
            let s = div.style;
            s.border = "solid #DBD6D7";
            s.color = "#6B6465";
            s.textAlign = "center";
            s.position = "absolute";
            s.backgroundColor = _color;
            s.width = 100 + "px";
            s.height = 200 + "px";
            s.left = (_y + 0.2) * 110 + "px";
            s.bottom = 40 + "px";
            if (_color == "#000000") {
                s.color = "white";
            }
            if (_color == "#0000ff") {
                s.color = "white";
            }
        }
        let z;
        let input = prompt("Geb hier bitte deine Katenanzahl ein");
        z = Number(input);
        for (let d = 0; d < z; d++) {
            let l = random1(15);
            if (l == 13 && s1 > 0) {
                c = "#000000";
                s1--;
                placeDiv(c, "+4", d);
                continue;
            }
            else if (l == 13 && s1 <= 0) {
                d--;
                continue;
            }
            else {
                if (l == 14 && s2 > 0) {
                    c = "#000000";
                    s2--;
                    placeDiv(c, "Farbauswahl", d);
                    continue;
                }
                else if (l == 14 && s2 <= 0) {
                    d--;
                    continue;
                }
                else {
                    let b = random1(4);
                    switch (b) {
                        case 0:
                            c = "#F66574";
                            if (AlleUnoKarten[l].red > 0) {
                                placeDiv(c, AlleUnoKarten[l].name, d);
                                AlleUnoKarten[l].red--;
                                continue;
                            }
                        case 1:
                            c = "#6EF665";
                            if (AlleUnoKarten[l].green > 0) {
                                placeDiv(c, AlleUnoKarten[l].name, d);
                                AlleUnoKarten[l].green--;
                                continue;
                            }
                        case 2:
                            c = "#65A8F6";
                            if (AlleUnoKarten[l].blue > 0) {
                                placeDiv(c, AlleUnoKarten[l].name, d);
                                AlleUnoKarten[l].blue--;
                                continue;
                            }
                        case 3:
                            c = "#F1F665";
                            if (AlleUnoKarten[l].yellow > 0) {
                                placeDiv(c, AlleUnoKarten[l].name, d);
                                AlleUnoKarten[l].yellow--;
                                continue;
                            }
                            else {
                                d--;
                                continue;
                            }
                    }
                }
            }
        }
        function Nachziehstapel() {
            let div = document.createElement("div");
            document.body.appendChild(div);
            div.setAttribute("id", "Kartenstapel");
            document.getElementById("Kartenstapel").innerHTML += "Kartenstapel";
            let s = div.style;
            s.border = "#645254";
            s.textAlign = "center";
            s.position = "absolute";
            s.backgroundColor = "#645254";
            s.width = 100 + "px";
            s.height = 200 + "px";
            s.left = 50 + "px";
            s.top = 20 + "px";
            s.color = "white";
        }
        function Ablagestapel() {
            let div = document.createElement("div");
            document.body.appendChild(div);
            div.setAttribute("id", "Ablage");
            document.getElementById("Ablage").innerHTML += "Ablage";
            let s = div.style;
            s.border = "#C7BDBE";
            s.textAlign = "center";
            s.position = "absolute";
            s.backgroundColor = "#C7BDBE";
            s.width = 100 + "px";
            s.height = 200 + "px";
            s.right = 50 + "px";
            s.top = 20 + "px";
        }
        Ablagestapel();
        Nachziehstapel();
    }
    document.addEventListener("DOMContentLoaded", (UnoSpiel));
})(Aufgabe2 || (Aufgabe2 = {}));
//# sourceMappingURL=Aufgabe2UNO.js.map