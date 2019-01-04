var rodelbahn;
(function (rodelbahn) {
    window.addEventListener("load", init);
    let crc2;
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        drawSky();
        drawSun();
        gernerateTrees();
        gernerateTrees2();
        drawCloud1();
        drawCloud2();
        generateSnow();
        drawChild1();
        drawChild2();
        drawChild3();
        drawSleigh();
        drawChild4();
        drawSleigh2();
        drawSleigh3();
        drawRope();
        console.log("Canvas started");
    }
    function drawSun() {
        var gradient = crc2.createRadialGradient(300, 80, 10, 238, 5, 300);
        gradient.addColorStop(0, "#F7FF00");
        gradient.addColorStop(0.5, "#FEFFE4");
        gradient.addColorStop(1, "#FAFDA2");
        let centerX = 170;
        let centerY = 75;
        let radius = 40;
        crc2.beginPath();
        crc2.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
        crc2.fillStyle = gradient;
        crc2.fill();
    }
    function drawSky() {
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
    function drawCloud1() {
        crc2.beginPath();
        crc2.arc(50, 220, 45, 0, 2 * Math.PI);
        crc2.arc(120, 220, 70, 0, 2 * Math.PI);
        crc2.arc(190, 220, 45, 0, 2 * Math.PI);
        crc2.fillStyle = "#FFFFFF";
        crc2.fill();
    }
    function drawCloud2() {
        crc2.beginPath();
        crc2.arc(470, 180, 20, 0, 2 * Math.PI);
        crc2.arc(510, 180, 40, 0, 2 * Math.PI);
        crc2.arc(570, 180, 70, 0, 2 * Math.PI);
        crc2.arc(630, 180, 40, 0, 2 * Math.PI);
        crc2.arc(670, 180, 20, 0, 2 * Math.PI);
        crc2.fillStyle = "#FFFFFF";
        crc2.fill();
    }
    function gernerateTrees() {
        for (let i = 0; i < 8; i++) {
            let x = 40 + Math.random() * 200;
            let y = 800 + Math.random() * 200;
            drawTrees(x, y);
        }
    }
    function drawTrees(_x, _y) {
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
    function gernerateTrees2() {
        for (let i = 0; i < 4; i++) {
            let x = 550 + Math.random() * 150;
            let y = 600 + Math.random() * 150;
            drawTrees2(x, y);
        }
    }
    function drawTrees2(_x, _y) {
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
    function generateSnow() {
        for (let i = 0; i < 200; i++) {
            let x = Math.random() * 700;
            let y = Math.random() * 1100;
            drawSnow(x, y);
        }
    }
    function drawSnow(_x, _y) {
        crc2.beginPath();
        crc2.arc(_x, _y, 5, 0, 2 * Math.PI, false);
        crc2.fillStyle = "#FFFFFF";
        crc2.fill();
        crc2.lineWidth = .2;
        crc2.strokeStyle = "#545454";
        crc2.stroke();
    }
    function drawChild1() {
        crc2.beginPath();
        crc2.arc(500, 900, 10, 0, 2 * Math.PI, false);
        crc2.fillStyle = "#FFD8BE";
        crc2.fill();
        crc2.lineWidth = .2;
        crc2.strokeStyle = "#A57658";
        crc2.stroke();
        crc2.beginPath();
        crc2.moveTo(490, 910);
        crc2.lineTo(510, 910);
        crc2.lineTo(510, 940);
        crc2.lineTo(490, 940);
        crc2.fillStyle = "#4FCDCA";
        crc2.fill();
    }
    function drawChild2() {
        crc2.beginPath();
        crc2.arc(400, 950, 10, 0, 2 * Math.PI, false);
        crc2.fillStyle = "#FFD8BE";
        crc2.fill();
        crc2.lineWidth = .2;
        crc2.strokeStyle = "#A57658";
        crc2.stroke();
        crc2.beginPath();
        crc2.moveTo(390, 960);
        crc2.lineTo(410, 960);
        crc2.lineTo(410, 1000);
        crc2.lineTo(390, 1000);
        crc2.fillStyle = "#FFA929";
        crc2.fill();
    }
    function drawChild3() {
        crc2.beginPath();
        crc2.arc(200, 440, 10, 0, 2 * Math.PI, false);
        crc2.fillStyle = "#FFD8BE";
        crc2.fill();
        crc2.lineWidth = .2;
        crc2.strokeStyle = "#A57658";
        crc2.stroke();
        crc2.beginPath();
        crc2.moveTo(200, 450);
        crc2.lineTo(220, 480);
        crc2.lineTo(180, 467);
        crc2.fillStyle = "#9BB2F5";
        crc2.fill();
    }
    function drawSleigh() {
        crc2.beginPath();
        crc2.moveTo(160, 467);
        crc2.lineTo(240, 480);
        crc2.lineWidth = 4;
        crc2.strokeStyle = "#683737";
        crc2.stroke();
        crc2.beginPath();
        crc2.moveTo(160, 477);
        crc2.lineTo(240, 490);
        crc2.lineWidth = 4;
        crc2.strokeStyle = "#683737";
        crc2.stroke();
        crc2.beginPath();
        crc2.moveTo(175, 467);
        crc2.lineTo(170, 480);
        crc2.lineWidth = 4;
        crc2.strokeStyle = "#683737";
        crc2.stroke();
        crc2.beginPath();
        crc2.moveTo(225, 477);
        crc2.lineTo(230, 490);
        crc2.lineWidth = 4;
        crc2.strokeStyle = "#683737";
        crc2.stroke();
    }
    function drawChild4() {
        crc2.beginPath();
        crc2.arc(350, 650, 10, 0, 2 * Math.PI, false);
        crc2.fillStyle = "#FFD8BE";
        crc2.fill();
        crc2.lineWidth = .2;
        crc2.strokeStyle = "#A57658";
        crc2.stroke();
        crc2.beginPath();
        crc2.moveTo(350, 660);
        crc2.lineTo(370, 690);
        crc2.lineTo(330, 680);
        crc2.fillStyle = "#990A4D";
        crc2.fill();
    }
    function drawSleigh2() {
        crc2.beginPath();
        crc2.moveTo(330, 678);
        crc2.lineTo(390, 695);
        crc2.lineWidth = 4;
        crc2.strokeStyle = "#683737";
        crc2.stroke();
        crc2.beginPath();
        crc2.moveTo(330, 700);
        crc2.lineTo(390, 717);
        crc2.lineWidth = 4;
        crc2.strokeStyle = "#683737";
        crc2.stroke();
        crc2.beginPath();
        crc2.moveTo(340, 678);
        crc2.lineTo(335, 700);
        crc2.lineWidth = 4;
        crc2.strokeStyle = "#683737";
        crc2.stroke();
        crc2.beginPath();
        crc2.moveTo(360, 685);
        crc2.lineTo(365, 710);
        crc2.lineWidth = 4;
        crc2.strokeStyle = "#683737";
        crc2.stroke();
    }
    function drawSleigh3() {
        crc2.beginPath();
        crc2.moveTo(500, 1000);
        crc2.lineTo(560, 1010);
        crc2.lineWidth = 4;
        crc2.strokeStyle = "#683737";
        crc2.stroke();
        crc2.beginPath();
        crc2.moveTo(500, 1010);
        crc2.lineTo(560, 1020);
        crc2.lineWidth = 4;
        crc2.strokeStyle = "#683737";
        crc2.stroke();
        crc2.beginPath();
        crc2.moveTo(510, 1000);
        crc2.lineTo(505, 1010);
        crc2.lineWidth = 4;
        crc2.strokeStyle = "#683737";
        crc2.stroke();
        crc2.beginPath();
        crc2.moveTo(550, 1008);
        crc2.lineTo(555, 1020);
        crc2.lineWidth = 4;
        crc2.strokeStyle = "#683737";
        crc2.stroke();
    }
    function drawRope() {
        crc2.beginPath();
        crc2.moveTo(500, 1000);
        crc2.lineTo(410, 970);
        crc2.lineWidth = 2;
        crc2.strokeStyle = "#000000";
        crc2.stroke();
    }
})(rodelbahn || (rodelbahn = {}));
//# sourceMappingURL=Aufgabe9.js.map