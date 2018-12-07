var HolyChristmasTree2;
(function (HolyChristmasTree2) {
    window.addEventListener("DOMContentLoaded", init);
    let address = "http://localhost:8100";
    function init() {
        createInput();
        let bestellButton = document.getElementById("Bestellbutton");
        bestellButton.addEventListener("click", handleClickOnAsync);
    }
    function handleClickOnAsync(_event) {
        document.getElementById("order").innerHTML = " ";
        let inputs = document.getElementsByTagName("input");
        for (let i = 0; i < inputs.length; i++) {
            let input = inputs[i];
            if (input.type == "number") {
                if (parseInt(input.value) > 0) {
                    sendRequestWithCustomData(input.name, parseInt(input.value));
                }
            }
            if (input.checked == true) {
                sendRequestWithCustomData(input.value, 1);
            }
        }
        let product = document.querySelector(":checked").value;
        console.log(product);
    }
    function sendRequestWithCustomData(_product, _amount) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", address + "?" + _product + "=" + _amount, true);
        xhr.addEventListener("readystatechange", handleStateChange);
        xhr.send();
    }
    function handleStateChange(_event) {
        var xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            console.log("ready: " + xhr.readyState, " | type: " + xhr.responseType, " | status:" + xhr.status, " | text:" + xhr.statusText);
            console.log("response: " + xhr.response);
            document.getElementById("order").innerHTML += xhr.response;
        }
    }
    function createInput() {
        for (let key in HolyChristmasTree2.offers) {
            let product = HolyChristmasTree2.offers[key];
            let fieldset = document.getElementById(key);
            fieldset.addEventListener("change", createCart);
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
})(HolyChristmasTree2 || (HolyChristmasTree2 = {}));
//# sourceMappingURL=WeihnachtsbaumMitWarenkorbCode.js.map