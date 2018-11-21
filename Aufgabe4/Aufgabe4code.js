var HolyChristmasTree;
(function (HolyChristmasTree) {
    window.addEventListener("DOMContentLoaded", init);
    function init() {
        generateTrees();
        generateTreeholder();
        generateLightstring();
        generateBalls();
        generateLametta();
        generateTop();
        let fieldsets = document.getElementsByTagName("fieldset");
        for (let i = 0; i < fieldsets.length; i++) {
            let fieldset = fieldsets[i];
            fieldset.addEventListener("change", refreshCart);
        }
    }
    function generateTrees() {
        for (let a = 0; a < HolyChristmasTree.trees.length; a++) {
            let input = document.createElement("input");
            document.getElementById("trees").appendChild(input);
            input.type = "radio";
            input.name = "treegroup";
            input.value = HolyChristmasTree.trees[a].name;
            input.id = HolyChristmasTree.trees[a].name;
            input.setAttribute("group", "trees");
            input.setAttribute("index", "" + a);
            let label = document.createElement("label");
            document.getElementById("trees").appendChild(label);
            label.setAttribute("for", HolyChristmasTree.trees[a].name);
            label.innerHTML = HolyChristmasTree.trees[a].name + " " + HolyChristmasTree.trees[a].price + "�";
            let id = input.toString();
            input.setAttribute("id", "trees" + id);
            document.getElementById("trees").appendChild(document.createElement("br"));
        }
    }
    function generateTreeholder() {
        for (let b = 0; b < HolyChristmasTree.treeholder.length; b++) {
            let input = document.createElement("input");
            document.getElementById("treeholder").appendChild(input);
            input.type = "radio";
            input.name = "treeholdergroup";
            input.value = HolyChristmasTree.treeholder[b].name;
            input.id = HolyChristmasTree.treeholder[b].name;
            input.setAttribute("group", "treeholder");
            input.setAttribute("index", "" + b);
            let label = document.createElement("label");
            document.getElementById("treeholder").appendChild(label);
            label.setAttribute("for", HolyChristmasTree.treeholder[b].name);
            label.innerHTML = HolyChristmasTree.treeholder[b].name + " " + HolyChristmasTree.treeholder[b].price + "�";
            let id = input.toString();
            input.setAttribute("id", "treeholder" + id);
            document.getElementById("treeholder").appendChild(document.createElement("br"));
        }
    }
    function generateLightstring() {
        for (let c = 0; c < HolyChristmasTree.lightstring.length; c++) {
            let input = document.createElement("input");
            document.getElementById("lightstring").appendChild(input);
            input.type = "radio";
            input.name = "lightstringgroup";
            input.value = HolyChristmasTree.lightstring[c].name;
            input.id = HolyChristmasTree.lightstring[c].name;
            input.setAttribute("group", "lightstring");
            input.setAttribute("index", "" + c);
            let label = document.createElement("label");
            document.getElementById("lightstring").appendChild(label);
            label.setAttribute("for", HolyChristmasTree.lightstring[c].name);
            label.innerHTML = HolyChristmasTree.lightstring[c].name + " " + HolyChristmasTree.lightstring[c].price + "�";
            stepperLightstring();
            let id = input.toString();
            input.setAttribute("id", "lightstring" + id);
            document.getElementById("lightstring").appendChild(document.createElement("br"));
        }
    }
    function stepperLightstring() {
        let input = document.createElement("input");
        document.getElementById("lightstring").appendChild(input);
        input.type = "number";
        input.name = " Stepper";
        input.step = "1.0";
        input.min = "1";
        input.max = "100";
        input.value = "1";
    }
    function generateBalls() {
        for (let d = 0; d < HolyChristmasTree.balls.length; d++) {
            let input = document.createElement("input");
            document.getElementById("balls").appendChild(input);
            input.type = "checkbox";
            input.name = "balls";
            input.value = HolyChristmasTree.balls[d].name;
            input.id = HolyChristmasTree.balls[d].name;
            input.setAttribute("group", "balls");
            input.setAttribute("index", "" + d);
            let label = document.createElement("label");
            document.getElementById("balls").appendChild(label);
            label.setAttribute("for", HolyChristmasTree.balls[d].name);
            label.innerHTML = HolyChristmasTree.balls[d].name + " " + HolyChristmasTree.balls[d].price + "�";
            stepperBalls();
            let id = input.toString();
            input.setAttribute("id", "ball" + id);
            document.getElementById("balls").appendChild(document.createElement("br"));
        }
    }
    function stepperBalls() {
        let input = document.createElement("input");
        document.getElementById("balls").appendChild(input);
        input.type = "number";
        input.name = " Stepper";
        input.step = "1.0";
        input.min = "1";
        input.max = "100";
        input.value = "0";
    }
    function generateLametta() {
        for (let e = 0; e < HolyChristmasTree.lametta.length; e++) {
            let input = document.createElement("input");
            document.getElementById("lametta").appendChild(input);
            input.type = "checkbox";
            input.name = "lamettas";
            input.value = HolyChristmasTree.lametta[e].name;
            input.id = HolyChristmasTree.lametta[e].name;
            input.setAttribute("group", "lametta");
            input.setAttribute("index", "" + e);
            let label = document.createElement("label");
            document.getElementById("lametta").appendChild(label);
            label.setAttribute("for", HolyChristmasTree.lametta[e].name);
            label.innerHTML = HolyChristmasTree.lametta[e].name + " " + HolyChristmasTree.lametta[e].price + "�";
            stepperLametta();
            let id = input.toString();
            input.setAttribute("id", "lametta" + id);
            document.getElementById("lametta").appendChild(document.createElement("br"));
        }
    }
    function stepperLametta() {
        let input = document.createElement("input");
        document.getElementById("lametta").appendChild(input);
        input.type = "number";
        input.name = " Stepper";
        input.step = "1.0";
        input.min = "1";
        input.max = "100";
        input.value = "0";
    }
    function generateTop() {
        for (let f = 0; f < HolyChristmasTree.top.length; f++) {
            let input = document.createElement("input");
            document.getElementById("top").appendChild(input);
            input.type = "radio";
            input.name = "topgroup";
            input.value = HolyChristmasTree.top[f].name;
            input.id = HolyChristmasTree.top[f].name;
            input.setAttribute("group", "top");
            input.setAttribute("index", "" + f);
            let label = document.createElement("label");
            document.getElementById("top").appendChild(label);
            label.setAttribute("for", HolyChristmasTree.top[f].name);
            label.innerHTML = HolyChristmasTree.top[f].name + " " + HolyChristmasTree.top[f].price + "�";
            let id = input.toString();
            input.setAttribute("id", "top" + id);
            document.getElementById("top").appendChild(document.createElement("br"));
        }
    }
    function refreshCart(_event) {
        let target = _event.target;
        let productgroup = target.getAttribute("group");
        let productindex = target.getAttribute("index");
    }
})(HolyChristmasTree || (HolyChristmasTree = {}));
//# sourceMappingURL=Aufgabe4code.js.map