namespace rodelbahnA12 {
    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;


    export let name: string;
    let life: number = 10;
    export let score: number = 0;
    let snowball: Snowball;
    let allMovingObjects: DrawObjects[] = [];
    // let i: number = 0;


    let fps: number = 25;

    let imgData: ImageData;





    function init(): void {
        document.getElementById("Endbildschirm").hidden = true;
        let spielstart: HTMLElement = document.getElementById("startbutton");

        spielstart.addEventListener("click", spielStart);

    }


    function spielStart(_event: Event): void {

        name = document.getElementsByTagName("input")[0].value;
        if (name != "") {

            document.getElementById("Startbildschirm").hidden = true;

            let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
            crc2 = canvas.getContext("2d");
            canvas.addEventListener("click", throwsnowball);

            drawSky();
            drawSun();
            generateTrees();
            drawCloud1();
            drawCloud2();
            imgData = crc2.getImageData(0, 0, 700, 1100);
            generateSnow();
            generateChild();

            update();
        }
    }

    function checkIfHit(): void {
        if (snowball.radius <= 6) {


            console.log(allMovingObjects);
            let hit: boolean = false;

            for (let i: number = 0; i < allMovingObjects.length; i++) {
                if (allMovingObjects[i] instanceof Child) {

                    if (childChecked(i)) {
                        allMovingObjects[i].onlysledge = true;

                        hit = true;

                        if (allMovingObjects[i].mDown) {
                            score += 20;
                            console.log(score);
                        }

                        else {
                            score += 10;
                            console.log(score);
                        }

                        break;

                    }

                }
            }

            if (!hit) {
                life--;

            }

            console.log(life);

            snowball = null;
            for (let i: number = 0; i < allMovingObjects.length; i++) {
                if (allMovingObjects[i] instanceof Snowball) {
                    allMovingObjects.splice(i, 1);
                }
            }
        }
    }

    function childChecked(_i: number): boolean {
        if (snowball.xPos >= allMovingObjects[_i].xPos && snowball.xPos <= allMovingObjects[_i].xPos + 50) {
            if (snowball.yPos <= allMovingObjects[_i].yPos && snowball.yPos >= allMovingObjects[_i].yPos - 50) {

                return true;
            }
        }
    }

    function throwsnowball(_event: MouseEvent): void {
        if (!snowball) {
            snowball = new Snowball();
            allMovingObjects.push(snowball);
            snowball.xPos = _event.pageX;
            snowball.yPos = _event.pageY;
        }
    }

    function update(): void {
        crc2.putImageData(imgData, 0, 0);
        
        crc2.font = "50px Verdana";
        crc2.fillText("score" + " " + score, 50, 50);


        crc2.font = "50px Verdana";
        crc2.fillText("life" + " " + life, 50, 100);




        for (let i: number = 0; i < allMovingObjects.length; i++) {
            let object: DrawObjects = allMovingObjects[i];
            object.draw();
            object.move();

        }

        if (snowball) {
            snowball.radius -= 2;
            checkIfHit();

        }

        if (life <= 0) {
            document.getElementById("Endbildschirm").hidden = false;
            document.getElementsByTagName("canvas")[0].hidden = true;
            DatabaseClient.insert(); 
            DatabaseClient.getHighscore();
        } else {
            window.setTimeout(update, 1000 / fps);

        }
        
  

    }


    function generateTrees(): void {

        for (let i: number = 0; i < 8; i++) {
            let trees: Trees = new Trees();
            trees.draw();
        }
    }//trees


    function generateSnow(): void {

        for (let i: number = 0; i < 500; i++) {
            let snowflake: Snow = new Snow();
            allMovingObjects.push(snowflake);

        }

    }//snow

    function generateChild(): void {

        for (let i: number = 0; i < 10; i++) {
            let child: Child = new Child();
            allMovingObjects.push(child);
        }
    }//child

    function drawSun(): void {

        var gradient = crc2.createRadialGradient(300, 80, 10, 238, 5, 300);


        gradient.addColorStop(0, "#F7FF00");
        gradient.addColorStop(0.5, "#FEFFE4");
        gradient.addColorStop(1, "#FAFDA2");

        let centerX: number = 170;
        let centerY: number = 75;
        let radius: number = 40;

        crc2.beginPath();
        crc2.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);

        crc2.fillStyle = gradient;
        crc2.fill();
    }//sun


    function drawSky(): void {

        crc2.moveTo(0, 350);
        crc2.beginPath();

        crc2.lineTo(700, 700);
        crc2.lineTo(700, 0);
        crc2.lineTo(0, 0);
        crc2.lineTo(0, 350);
        crc2.closePath();

        var grd = crc2.createLinearGradient(0, 0, 700, 1110);
        // light blue
        grd.addColorStop(0, "#EFFEFF");
        // dark blue
        grd.addColorStop(1, "#4AF3FF");
        crc2.fillStyle = grd;
        crc2.fill();
    }//sky

    function drawCloud1(): void {

        crc2.beginPath();
        crc2.arc(50, 220, 45, 0, 2 * Math.PI);
        crc2.arc(120, 220, 70, 0, 2 * Math.PI);
        crc2.arc(190, 220, 45, 0, 2 * Math.PI);
        crc2.fillStyle = "#FFFFFF";
        crc2.fill();
    }//cloud1

    function drawCloud2(): void {

        crc2.beginPath();
        crc2.arc(470, 180, 20, 0, 2 * Math.PI);
        crc2.arc(510, 180, 40, 0, 2 * Math.PI);
        crc2.arc(570, 180, 70, 0, 2 * Math.PI);
        crc2.arc(630, 180, 40, 0, 2 * Math.PI);
        crc2.arc(670, 180, 20, 0, 2 * Math.PI);

        crc2.fillStyle = "#FFFFFF";
        crc2.fill();
    }//cloud2




} //namespace

