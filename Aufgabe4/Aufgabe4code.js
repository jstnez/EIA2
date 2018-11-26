var HolyChristmasTree;
(function (HolyChristmasTree) {
    window.addEventListener("DOMContentLoaded", init);
    function init() {
        createInput();
    }
    function createInput() {
        for (let key in HolyChristmasTree.offers) {
            let product = HolyChristmasTree.offers[key];
            let fieldset = document.getElementById(key);
            fieldset.addEventListener("change", createCart);
            for (let a = 0; a < product.length; a++) {
                let input = document.createElement("input");
                document.getElementById(key).appendChild(input);
                input.name = key;
                input.value = HolyChristmasTree.offers[key][a].name;
                input.id = HolyChristmasTree.offers[key][a].name;
                input.setAttribute("group", key);
                input.setAttribute("index", "" + a);
                input.setAttribute("price", "" + HolyChristmasTree.offers[key][a].price);
                let label = document.createElement("label");
                document.getElementById(key).appendChild(label);
                label.setAttribute("for", HolyChristmasTree.offers[key][a].name);
                label.innerHTML = HolyChristmasTree.offers[key][a].name + " " + HolyChristmasTree.offers[key][a].price + "�";
                if (key == "trees" || key == "treeholder" || key == "top" || key == "lightstrings") {
                    input.type = "radio";
                }
                else {
                    input.type = "checkbox";
                    let inputStepper = document.createElement("input");
                    document.getElementById(key).appendChild(inputStepper);
                    inputStepper.type = "number";
                    inputStepper.name = " Stepper";
                    inputStepper.step = "1.0";
                    inputStepper.min = "1";
                    inputStepper.max = "100";
                    inputStepper.value = "0";
                }
                document.getElementById(key).appendChild(document.createElement("br"));
            }
        }
    }
    function createCart() {
        let inputs = document.getElementsByTagName("input");
        for (let i = 0; i < inputs.length; i++) {
            let input = inputs[i];
            if (input.checked == true) {
                let name = input.getAttribute("name");
                let price = parseInt(input.getAttribute("price"));
            }
        }
    }
})(HolyChristmasTree || (HolyChristmasTree = {}));
//# sourceMappingURL=Aufgabe4code.js.map