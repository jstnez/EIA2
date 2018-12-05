/*Aufgabe: Aufgabe5
Name: Justine Zythke
Matrikel: 259315
Datum: 16.11.2018
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace HolyChristmasTree {


    export interface Product {
        name: string;
        price: number;
    }


    export interface ProductGroups {
        [key: string]: Product[];
    }

    export let offers: ProductGroups = {
        "trees": [
            { name: "Premium Nordmanntanne", price: 34.95 },
            { name: "Premium Blaufichte", price: 19.85 },
            { name: "Premium Douglasie Tanne", price: 49.90 }
        ],

        "treeholder": [
            { name: "Blumentopf", price: 20 },
            { name: "Star-Max", price: 24.21 },
            { name: "Antiksstaender", price: 16.65 }
        ],

        "lightstring": [
            { name: "Sterne silber", price: 19.95 },
            { name: "600LEDs", price: 55.55 },
            { name: "LED Kugeln weiss", price: 31.43 }
        ],

        "balls": [
            { name: "Eisblau Kunststoff", price: 1.50 },
            { name: "Matt rot, Glas", price: 3.50 },
            { name: "Colori Trendi", price: 5.95 }
        ],

        "lametta": [
            { name: "Schwarz Glizer", price: 4.99 },
            { name: "Gold glaenzend", price: 4.99 },
            { name: "Bunt  matt", price: 4.99 }
        ],

        "top": [
            { name: "Aus irisierendem Klar Glas", price: 22.00 },
            { name: "Inge Glas", price: 12.50 },
            { name: "Satin Glas", price: 24.95 }
        ]

    };

}
