namespace rodelbahn {
    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;

    let snowflakes: Snow[] = [];
    let childsDown: ChildDown[] = [];
    let childsUp: ChildUp[] = [];

    let fps: number = 25;

    let imgData: ImageData;



    function init(_event: Event): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");

        drawSky();
        drawSun();
        gernerateTrees();
        gernerateTrees2();
        drawCloud1();
        drawCloud2();
        imgData = crc2.getImageData(0, 0, 700, 1100);
        generateSnow();
        generateChildDown();
        generateChildUp();

        update();


    }

    function update(): void {
        crc2.putImageData(imgData, 0, 0);
        window.setTimeout(update, 1000 / fps);



        for (let i: number = 0; i < snowflakes.length; i++) {
            let snowflake: Snow = snowflakes[i];
            snowflake.move();
            snowflake.draw();


        }

        for (let i: number = 0; i < childsDown.length; i++) {
            let childd: ChildDown = childsDown[i];
            childd.move();
            childd.draw();

        }

        for (let i: number = 0; i < childsUp.length; i++) {
            let childu: ChildUp = childsUp[i];
            childu.move();
            childu.draw();
        }

    }

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
    }

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


    }

    function drawCloud1(): void {

        crc2.beginPath();
        crc2.arc(50, 220, 45, 0, 2 * Math.PI);
        crc2.arc(120, 220, 70, 0, 2 * Math.PI);
        crc2.arc(190, 220, 45, 0, 2 * Math.PI);
        crc2.fillStyle = "#FFFFFF";
        crc2.fill();
    }

    function drawCloud2(): void {

        crc2.beginPath();
        crc2.arc(470, 180, 20, 0, 2 * Math.PI);
        crc2.arc(510, 180, 40, 0, 2 * Math.PI);
        crc2.arc(570, 180, 70, 0, 2 * Math.PI);
        crc2.arc(630, 180, 40, 0, 2 * Math.PI);
        crc2.arc(670, 180, 20, 0, 2 * Math.PI);

        crc2.fillStyle = "#FFFFFF";
        crc2.fill();
    }

    function gernerateTrees(): void {


        for (let i: number = 0; i < 8; i++) {
            let x: number = 40 + Math.random() * 200;
            let y: number = 800 + Math.random() * 200;
            drawTrees(x, y);
        }
    }

    function drawTrees(_x: number, _y: number): void {


        crc2.beginPath();
        crc2.moveTo(_x - 10, _y + 70);
        crc2.lineTo(_x + 10, _y + 70);

        crc2.lineTo(_x + 7, _y - 0);
        crc2.closePath();

        crc2.fillStyle = "#612A05";
        crc2.fill();

        crc2.beginPath();
        crc2.moveTo(_x - 30, _y + 50);
        crc2.lineTo(_x, _y - 20);
        crc2.lineTo(_x + 30, _y + 50);
        crc2.closePath();

        crc2.fillStyle = "#018A0E";
        crc2.fill();
    }

    function gernerateTrees2(): void {


        for (let i: number = 0; i < 4; i++) {
            let x: number = 550 + Math.random() * 150;
            let y: number = 600 + Math.random() * 150;
            drawTrees(x, y);
        }
    }


    function generateSnow(): void {

        for (let i: number = 0; i < 500; i++) {
            let snowflake: Snow = new Snow();
            snowflake.xPos = Math.random() * 700;
            snowflake.yPos = Math.random() * 1100;

            snowflake.draw();

            snowflakes.push(snowflake);

        }

    }

    function generateChildDown(): void {

        for (let i: number = 0; i < 5; i++) {
            let childd: ChildDown = new ChildDown();
            childd.xPos = Math.random() * 100;
            childd.yPos = Math.random() * 250 + 400;
            childd.color = childd.getRandomColor();
            childd.draw();

            childsDown.push(childd);
        }
    }

    function generateChildUp(): void {

        for (let i: number = 0; i < 5; i++) {
            let childu: ChildUp = new ChildUp();
            childu.xPos = Math.random() * 100 + 500;
            childu.yPos = Math.random() * 100 + 900;
            childu.color = childu.getRandomColor();
            childu.draw();

            childsUp.push(childu);
        }
    }


}

