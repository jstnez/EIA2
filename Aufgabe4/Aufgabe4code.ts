namespace HolyChristmasTree {
    window.addEventListener("DOMContentLoaded", init);

    function init(): void {
        createInput();
    }

    //        let fieldsets: NodeListOf<HTMLFieldSetElement> = 
    //                    document.getElementsByTagName("fieldset");
    //
    //        for (let i: number = 0; i < fieldsets.length; i++) {
    //            let fieldset: HTMLFieldSetElement = fieldsets[i];
    //            fieldset.addEventListenchange", refreshCart);
    //        }
    //    }


    let cart: Product[] = [];

    function createInput(): void {

        for (let key in offers) {
            let product: Product[] = offers[key];

            let fieldset: HTMLElement = document.getElementById(key);
            fieldset.addEventListener("change", createCart);


            for (let a: number = 0; a < product.length; a++) {



                let input: HTMLInputElement = document.createElement("input");
                document.getElementById(key).appendChild(input);
                input.name = key;
                input.value = offers[key][a].name;
                input.id = offers[key][a].name;
                input.setAttribute("group", key);
                input.setAttribute("index", "" + a);

                let label: HTMLLabelElement = document.createElement("label");
                document.getElementById(key).appendChild(label);
                label.setAttribute("for", offers[key][a].name);
                label.innerHTML = offers[key][a].name + " " + offers[key][a].price + "€";

                if (key == "trees" || key == "treeholder" || key == "top" || key == "lightstrings") {
                    input.type = "radio";

                } else {
                    input.type = "checkbox";


                    let inputStepper: HTMLInputElement = document.createElement("input");
                    document.getElementById(key).appendChild(inputStepper);
                    inputStepper.type = "number";
                    inputStepper.name = " Stepper";
                    inputStepper.step = "1.0";
                    inputStepper.min = "1";
                    inputStepper.max = "100";
                    inputStepper.value = "0";
                }

                document.getElementById(key).appendChild(document.createElement("br"));


                createCart(key);

            }
        }




    }

    let fieldsets: NodeListOf<HTMLFieldSetElement> =
        document.getElementsByTagName("fieldset");



    function createCart(_key: string, _input: ): void {
        let product: Product[] = offers[_key];
        for (let i: number = 0; i < product.length; i++) {
            if (_input == "change") {
ydgfxg
           }
        }
    }

    //    function refreshCart(_event: Event): void {
    //        let target: HTMLInputElement = <HTMLInputElement>_event.target;
    //        let productgroup: string = target.getAttribute("group");
    //        let productindex: string = target.getAttribute("index");
    //        }
    //     
}
