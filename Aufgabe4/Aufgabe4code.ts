namespace HolyChristmasTree {
    window.addEventListener("DOMContentLoaded", init);

    function init(): void {
        generateTrees();
        generateTreeholder();
        generateLightstring();
        generateBalls();
        generateLametta();
        generateTop();
        
        
        
        let fieldsets: NodeListOf<HTMLFieldSetElement> = 
                    document.getElementsByTagName("fieldset");

        for (let i: number = 0; i < fieldsets.length; i++) {
            let fieldset: HTMLFieldSetElement = fieldsets[i];
            fieldset.addEventListener("change", refreshCart);
        }
    }

    
      let cart: Products[] = []; 
    
    
    function generateTrees(): void {
        for (let a: number = 0; a < trees.length; a++) {
            let input: HTMLInputElement = document.createElement("input");
            document.getElementById("trees").appendChild(input);
            input.type = "radio";
            input.name = "treegroup";
            input.value = trees[a].name;
            input.id = trees[a].name;
            input.setAttribute("group", "trees");
            input.setAttribute("index", "" + a);
            
            let label: HTMLLabelElement = document.createElement("label");
            document.getElementById("trees").appendChild(label);
            label.setAttribute("for", trees[a].name);
            label.innerHTML = trees[a].name + " " + trees[a].price + "€";
            let id: string = input.toString();
            input.setAttribute("id", "trees" + id);
            document.getElementById("trees").appendChild(document.createElement("br"));
            
        }
        
       }
        
    
    
    
    
    function generateTreeholder(): void {
        for (let b: number = 0; b < treeholder.length; b++) {
            let input: HTMLInputElement = document.createElement("input");
            document.getElementById("treeholder").appendChild(input);
            input.type = "radio";
            input.name = "treeholdergroup";
            input.value = treeholder[b].name;
            input.id = treeholder[b].name;
            input.setAttribute("group", "treeholder");
            input.setAttribute("index", "" + b);
            
            let label: HTMLLabelElement = document.createElement("label");
            document.getElementById("treeholder").appendChild(label);
            label.setAttribute("for", treeholder[b].name);
            label.innerHTML = treeholder[b].name + " " + treeholder[b].price + "€";
            let id: string = input.toString();
            input.setAttribute("id", "treeholder" + id);
            document.getElementById("treeholder").appendChild(document.createElement("br"));
        }
    }  
    
     function generateLightstring(): void {
        for (let c: number = 0; c < lightstring.length; c++) {
            let input: HTMLInputElement = document.createElement("input");
            document.getElementById("lightstring").appendChild(input);
            input.type = "radio";
            input.name = "lightstringgroup";
            input.value = lightstring[c].name;
            input.id = lightstring[c].name;
            input.setAttribute("group", "lightstring");
            input.setAttribute("index", "" + c);
            
            let label: HTMLLabelElement = document.createElement("label");
            document.getElementById("lightstring").appendChild(label);
            label.setAttribute("for", lightstring[c].name);
            label.innerHTML = lightstring[c].name + " " + lightstring[c].price + "€";
            stepperLightstring();
            let id: string = input.toString();
            input.setAttribute("id", "lightstring" + id);
            document.getElementById("lightstring").appendChild(document.createElement("br"));
            

        }
    }
    function stepperLightstring(): void {
        let input: HTMLInputElement = document.createElement("input");
        document.getElementById("lightstring").appendChild(input);
        input.type = "number";
        input.name = " Stepper";
        input.step = "1.0";
        input.min = "1";
        input.max = "100";
        input.value = "1";
    }


    function generateBalls(): void {
        for (let d: number = 0; d < balls.length; d++) {
            let input: HTMLInputElement = document.createElement("input");
            document.getElementById("balls").appendChild(input);
            input.type = "checkbox";
            input.name = "balls";
            input.value = balls[d].name;
            input.id = balls[d].name;
            input.setAttribute("group", "balls");
            input.setAttribute("index", "" + d);
            
            let label: HTMLLabelElement = document.createElement("label");
            document.getElementById("balls").appendChild(label);
            label.setAttribute("for", balls[d].name);
            label.innerHTML = balls[d].name + " " + balls[d].price + "€";
            stepperBalls();
            let id: string = input.toString();
            input.setAttribute("id", "ball" + id);
            document.getElementById("balls").appendChild(document.createElement("br"));

        }
    }



    function stepperBalls(): void {
        let input: HTMLInputElement = document.createElement("input");
        document.getElementById("balls").appendChild(input);
        input.type = "number";
        input.name = " Stepper";
        input.step = "1.0";
        input.min = "1";
        input.max = "100";
        input.value = "0";
    }


    function generateLametta(): void {
        for (let e: number = 0; e < lametta.length; e++) {
            let input: HTMLInputElement = document.createElement("input");
            document.getElementById("lametta").appendChild(input);
            input.type = "checkbox";
            input.name = "lamettas";
            input.value = lametta[e].name;
            input.id = lametta[e].name;
            input.setAttribute("group", "lametta");
            input.setAttribute("index", "" + e);
            
            let label: HTMLLabelElement = document.createElement("label");
            document.getElementById("lametta").appendChild(label);
            label.setAttribute("for", lametta[e].name);
            label.innerHTML = lametta[e].name + " " + lametta[e].price + "€";
            stepperLametta();
            let id: string = input.toString();
            input.setAttribute("id", "lametta" + id);
            document.getElementById("lametta").appendChild(document.createElement("br"));

        }
    }
    function stepperLametta(): void {
        let input: HTMLInputElement = document.createElement("input");
        document.getElementById("lametta").appendChild(input);
        input.type = "number";
        input.name = " Stepper";
        input.step = "1.0";
        input.min = "1";
        input.max = "100";
        input.value = "0"; }
    
    
    function generateTop(): void {
        for (let f: number = 0; f < top.length; f++) {
            let input: HTMLInputElement = document.createElement("input");
            document.getElementById("top").appendChild(input);
            input.type = "radio";
            input.name = "topgroup";
            input.value = top[f].name;
            input.id = top[f].name;
            input.setAttribute("group", "top");
            input.setAttribute("index", "" + f);
            
            let label: HTMLLabelElement = document.createElement("label");
            document.getElementById("top").appendChild(label);
            label.setAttribute("for", top[f].name);
            label.innerHTML = top[f].name + " " + top[f].price + "€";
            let id: string = input.toString();
            input.setAttribute("id", "top" + id);
            document.getElementById("top").appendChild(document.createElement("br"));
        }
    }
    
    
    
    function refreshCart(_event: Event): void {
        let target: HTMLInputElement = <HTMLInputElement>_event.target;
        let productgroup: string = target.getAttribute("group");
        let productindex: string = target.getAttribute("index");
        }
     
    }
    