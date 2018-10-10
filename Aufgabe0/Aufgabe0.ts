
document.addEventListener("DOMContentLoaded", Eingabe);

function Eingabe(): void {
    var person: string = prompt("Geb bitte deinen Namen ein");
    document.getElementById("demo").innerHTML =
        "Hello " + person + "! Was geht ab!";
    console.log("Hallo" + person + "! Was geht ab!");
}

