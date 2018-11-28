var HolyChristmasTree2;
(function (HolyChristmasTree2) {
    window.addEventListener("DOMContentLoaded", init);
    function init() {
        createInput();
        document.getElementById("button").addEventListener("click", checkOrder);
    }
    function createInput() {
        for (let key in HolyChristmasTree2.offers) {
            let product = HolyChristmasTree2.offers[key];
            let fieldset = document.getElementById(key);
            fieldset.addEventListener("change", createCart);
            fieldset.setAttribute("id", key);
            for (let a = 0; a < product.length; a++) {
                let input = document.createElement("input");
                document.getElementById(key).appendChild(input);
                input.name = key;
                input.value = HolyChristmasTree2.offers[key][a].name;
                input.id = HolyChristmasTree2.offers[key][a].name;
                input.setAttribute("group", key);
                input.setAttribute("index", "" + a);
                input.setAttribute("price", "" + HolyChristmasTree2.offers[key][a].price);
                let label = document.createElement("label");
                document.getElementById(key).appendChild(label);
                label.setAttribute("for", HolyChristmasTree2.offers[key][a].name);
                label.innerHTML = HolyChristmasTree2.offers[key][a].name + " " + HolyChristmasTree2.offers[key][a].price + "Euro";
                if (key == "trees" || key == "treeholder" || key == "top" || key == "lightstrings") {
                    input.type = "radio";
                }
                else {
                    input.type = "number";
                    input.name = HolyChristmasTree2.offers[key][a].name;
                    input.step = "1.0";
                    input.min = "0";
                    input.max = "100";
                    input.value = "0";
                }
                document.getElementById(key).appendChild(document.createElement("br"));
            }
        }
    }
    function createCart() {
        let p = document.getElementById("cart");
        let total = 0;
        let inputs = document.getElementsByTagName("input");
        p.innerHTML = " ";
        p.innerHTML = "<h2>Warenkorb</h2>";
        for (let i = 0; i < inputs.length; i++) {
            let input = inputs[i];
            if (input.type == "number") {
                if (parseInt(input.value) > 0) {
                    let value = parseFloat(input.value);
                    let name = input.getAttribute("name");
                    let price = parseFloat(input.getAttribute("price"));
                    p.innerHTML += "<p>" + value + "x " + name + " " + " " + (price * value).toFixed(2) + "Euro" + " " + "</p>";
                    total += parseFloat((price * value).toFixed(2));
                }
            }
            if (input.checked == true) {
                let value = input.getAttribute("value");
                let price = parseFloat(input.getAttribute("price"));
                total += parseFloat((price).toFixed(2));
                p.innerHTML += "<p>" + value + " " + " " + price + "Euro" + "</p>";
            }
        }
        p.innerHTML += "Geamtpreis " + total.toFixed(2) + "Euro";
    }
    function checkOrder() {
    }
})(HolyChristmasTree2 || (HolyChristmasTree2 = {}));
//# sourceMappingURL=WeihnachtsbaumMitWarenkorbCode.js.map