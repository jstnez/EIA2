var rodelbahn;
(function (rodelbahn) {
    window.addEventListener("load", init);
    let snowflakes = [];
    let childsDown = [];
    let childsUp = [];
    let fps = 25;
    let imgData;
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        rodelbahn.crc2 = canvas.getContext("2d");
        drawSky();
        drawSun();
        gernerateTrees();
        gernerateTrees2();
        drawCloud1();
        drawCloud2();
        imgData = rodelbahn.crc2.getImageData(0, 0, 700, 1100);
        generateSnow();
        generateChildDown();
        generateChildUp();
        update();
    }
    function update() {
        rodelbahn.crc2.putImageData(imgData, 0, 0);
        window.setTimeout(update, 1000 / fps);
        for (let i = 0; i < snowflakes.length; i++) {
            let snowflake = snowflakes[i];
            snowflake.move();
            snowflake.draw();
        }
        for (let i = 0; i < childsDown.length; i++) {
            let childd = childsDown[i];
            childd.move();
            childd.draw();
        }
        for (let i = 0; i < childsUp.length; i++) {
            let childu = childsUp[i];
            childu.move();
            childu.draw();
        }
    }
    function drawSun() {
        var gradient = rodelbahn.crc2.createRadialGradient(300, 80, 10, 238, 5, 300);
        gradient.addColorStop(0, "#F7FF00");
        gradient.addColorStop(0.5, "#FEFFE4");
        gradient.addColorStop(1, "#FAFDA2");
        let centerX = 170;
        let centerY = 75;
        let radius = 40;
        rodelbahn.crc2.beginPath();
        rodelbahn.crc2.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
        rodelbahn.crc2.fillStyle = gradient;
        rodelbahn.crc2.fill();
    }
    function drawSky() {
        rodelbahn.crc2.moveTo(0, 350);
        rodelbahn.crc2.beginPath();
        rodelbahn.crc2.lineTo(700, 700);
        rodelbahn.crc2.lineTo(700, 0);
        rodelbahn.crc2.lineTo(0, 0);
        rodelbahn.crc2.lineTo(0, 350);
        rodelbahn.crc2.closePath();
        var grd = rodelbahn.crc2.createLinearGradient(0, 0, 700, 1110);
        // light blue
        grd.addColorStop(0, "#EFFEFF");
        // dark blue
        grd.addColorStop(1, "#4AF3FF");
        rodelbahn.crc2.fillStyle = grd;
        rodelbahn.crc2.fill();
    }
    function drawCloud1() {
        rodelbahn.crc2.beginPath();
        rodelbahn.crc2.arc(50, 220, 45, 0, 2 * Math.PI);
        rodelbahn.crc2.arc(120, 220, 70, 0, 2 * Math.PI);
        rodelbahn.crc2.arc(190, 220, 45, 0, 2 * Math.PI);
        rodelbahn.crc2.fillStyle = "#FFFFFF";
        rodelbahn.crc2.fill();
    }
    function drawCloud2() {
        rodelbahn.crc2.beginPath();
        rodelbahn.crc2.arc(470, 180, 20, 0, 2 * Math.PI);
        rodelbahn.crc2.arc(510, 180, 40, 0, 2 * Math.PI);
        rodelbahn.crc2.arc(570, 180, 70, 0, 2 * Math.PI);
        rodelbahn.crc2.arc(630, 180, 40, 0, 2 * Math.PI);
        rodelbahn.crc2.arc(670, 180, 20, 0, 2 * Math.PI);
        rodelbahn.crc2.fillStyle = "#FFFFFF";
        rodelbahn.crc2.fill();
    }
    function gernerateTrees() {
        for (let i = 0; i < 8; i++) {
            let x = 40 + Math.random() * 200;
            let y = 800 + Math.random() * 200;
            drawTrees(x, y);
        }
    }
    function drawTrees(_x, _y) {
        rodelbahn.crc2.beginPath();
        rodelbahn.crc2.moveTo(_x - 10, _y + 70);
        rodelbahn.crc2.lineTo(_x + 10, _y + 70);
        rodelbahn.crc2.lineTo(_x + 7, _y - 0);
        rodelbahn.crc2.closePath();
        rodelbahn.crc2.fillStyle = "#612A05";
        rodelbahn.crc2.fill();
        rodelbahn.crc2.beginPath();
        rodelbahn.crc2.moveTo(_x - 30, _y + 50);
        rodelbahn.crc2.lineTo(_x, _y - 20);
        rodelbahn.crc2.lineTo(_x + 30, _y + 50);
        rodelbahn.crc2.closePath();
        rodelbahn.crc2.fillStyle = "#018A0E";
        rodelbahn.crc2.fill();
    }
    function gernerateTrees2() {
        for (let i = 0; i < 4; i++) {
            let x = 550 + Math.random() * 150;
            let y = 600 + Math.random() * 150;
            drawTrees(x, y);
        }
    }
    function generateSnow() {
        for (let i = 0; i < 500; i++) {
            let snowflake = new rodelbahn.Snow();
            snowflake.xPos = Math.random() * 700;
            snowflake.yPos = Math.random() * 1100;
            snowflake.draw();
            snowflakes.push(snowflake);
        }
    }
    function generateChildDown() {
        for (let i = 0; i < 5; i++) {
            let childd = new rodelbahn.ChildDown();
            childd.xPos = Math.random() * 100;
            childd.yPos = Math.random() * 250 + 400;
            childd.color = childd.getRandomColor();
            childd.draw();
            childsDown.push(childd);
        }
    }
    function generateChildUp() {
        for (let i = 0; i < 5; i++) {
            let childu = new rodelbahn.ChildUp();
            childu.xPos = Math.random() * 100 + 500;
            childu.yPos = Math.random() * 100 + 900;
            childu.color = childu.getRandomColor();
            childu.draw();
            childsUp.push(childu);
        }
    }
})(rodelbahn || (rodelbahn = {}));
//# sourceMappingURL=A10Main.js.map