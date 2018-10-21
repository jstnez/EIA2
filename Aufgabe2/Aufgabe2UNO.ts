/*Aufgabe: Aufgabe0
Name: Justine Zythke
Matrikel: 259315
Datum: 10.10.2018
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/




    

/* Zuordnung der karten */

namespace Aufgabe2 {

    function UnoSpiel(): void {

        interface UnoKarten { 
            name: string;
            red: number;
            blue: number;
            green: number;
            yellow: number;
        }

        let K0: UnoKarten = {
            name: "0",
            red: 1,
            blue: 1,
            green: 1,
            yellow: 1
        };

        let K1: UnoKarten = {
            name: "1",
            red: 2,
            blue: 2,
            green: 2,
            yellow: 2
        };

        let K2: UnoKarten = {
            name: "2",
            red: 2,
            blue: 2,
            green: 2,
            yellow: 2
        };

        let K3: UnoKarten = {
            name: "3",
            red: 2,
            blue: 2,
            green: 2,
            yellow: 2
        };

        let K4: UnoKarten = {
            name: "4",
            red: 2,
            blue: 2,
            green: 2,
            yellow: 2
        };

        let K5: UnoKarten = {
            name: "5",
            red: 2,
            blue: 2,
            green: 2,
            yellow: 2
        };

        let K6: UnoKarten = {
            name: "6",
            red: 2,
            blue: 2,
            green: 2,
            yellow: 2
        };

        let K7: UnoKarten = {
            name: "7",
            red: 2,
            blue: 2,
            green: 2,
            yellow: 2
        };

        let K8: UnoKarten = {
            name: "8",
            red: 2,
            blue: 2,
            green: 2,
            yellow: 2
        };

        let K9: UnoKarten = {
            name: "9",
            red: 2,
            blue: 2,
            green: 2,
            yellow: 2
        };

        let Kr: UnoKarten = {
            name: "Reverse",
            red: 2,
            blue: 2,
            green: 2,
            yellow: 2
        };

        let Kz: UnoKarten = {
            name: "Plus 2",
            red: 2,
            blue: 2,
            green: 2,
            yellow: 2
        };

        let Kaus: UnoKarten = {
            name: "Aussetzen",
            red: 2,
            blue: 2,
            green: 2,
            yellow: 2
        };

       /* Erstellung des Array*/
        
        let AlleUnoKarten: UnoKarten[] = [K0, K1, K2, K3, K4, K5, K6, K7, K8, K9, Kr, Kz, Kaus];
        let s1: number = 4;
        let s2: number = 4;
        let c: string = ""; 



        function random1(x: number): number { 
            return Math.floor(Math.random() * Math.floor(x));
        }



        function placeDiv(_color: string, _v: string, _y: number): void { 
            let div: HTMLDivElement = document.createElement("div");
            document.body.appendChild(div);

            div.setAttribute("id", "a" + _y); 
            document.getElementById("a" + _y).innerHTML += _v; 
            let s: CSSStyleDeclaration = div.style;
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

        let z: number;
        let input: string = prompt("Geb hier bitte deine Katenanzahl ein"); 
        z = Number(input); 


        for (let d: number = 0; d < z; d++) { 
            let l: number = random1(15); 
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
                    let b: number = random1(4); 
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
        function Nachziehstapel(): void { 
            let div: HTMLElement = document.createElement("div");
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

        function Ablagestapel(): void {
            let div: HTMLElement = document.createElement("div");
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


}