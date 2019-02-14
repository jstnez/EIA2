var rodelbahnA12;
(function (rodelbahnA12) {
    window.addEventListener("load", init);
    let life = 10;
    let score = 0;
    let snowball;
    let allMovingObjects = [];
    // let i: number = 0;
    let fps = 25;
    let imgData;
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        rodelbahnA12.crc2 = canvas.getContext("2d");
        canvas.addEventListener("click", throwsnowball);
        drawSky();
        drawSun();
        //        generateTrees();
        drawCloud1();
        drawCloud2();
        imgData = rodelbahnA12.crc2.getImageData(0, 0, 700, 1100);
        generateSnow();
        generateChild();
        update();
    }
    function checkIfHit() {
        if (snowball.radius <= 6) {
            console.log(allMovingObjects);
            let hit = false;
            for (let i = 0; i < allMovingObjects.length; i++) {
                if (allMovingObjects[i] instanceof rodelbahnA12.Child) {
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
            for (let i = 0; i < allMovingObjects.length; i++) {
                if (allMovingObjects[i] instanceof rodelbahnA12.Snowball) {
                    allMovingObjects.splice(i, 1);
                }
            }
        }
    }
    function childChecked(_i) {
        if (snowball.xPos >= allMovingObjects[_i].xPos && snowball.xPos <= allMovingObjects[_i].xPos + 50) {
            if (snowball.yPos <= allMovingObjects[_i].yPos && snowball.yPos >= allMovingObjects[_i].yPos - 70) {
                return true;
            }
        }
    }
    function throwsnowball(_event) {
        if (!snowball) {
            snowball = new rodelbahnA12.Snowball();
            allMovingObjects.push(snowball);
            snowball.xPos = _event.pageX;
            snowball.yPos = _event.pageY;
        }
    }
    function update() {
        rodelbahnA12.crc2.putImageData(imgData, 0, 0);
        window.setTimeout(update, 1000 / fps);
        rodelbahnA12.crc2.font = "50px Verdana";
        rodelbahnA12.crc2.fillText("score" + " " + score, 50, 50);
        rodelbahnA12.crc2.font = "50px Verdana";
        rodelbahnA12.crc2.fillText("life" + " " + life, 50, 100);
        for (let i = 0; i < allMovingObjects.length; i++) {
            let object = allMovingObjects[i];
            object.draw();
            object.move();
        }
        if (snowball) {
            snowball.radius -= 2;
            checkIfHit();
        }
        if (life <= 0) {
        }
    }
    function generateTrees() {
        for (let i = 0; i < 8; i++) {
            let trees = new rodelbahnA12.Trees();
            trees.draw();
        }
    } //trees
    function generateSnow() {
        for (let i = 0; i < 500; i++) {
            let snowflake = new rodelbahnA12.Snow();
            allMovingObjects.push(snowflake);
        }
    } //snow
    function generateChild() {
        for (let i = 0; i < 10; i++) {
            let child = new rodelbahnA12.Child();
            allMovingObjects.push(child);
        }
    } //child
    function drawSun() {
        var gradient = rodelbahnA12.crc2.createRadialGradient(300, 80, 10, 238, 5, 300);
        gradient.addColorStop(0, "#F7FF00");
        gradient.addColorStop(0.5, "#FEFFE4");
        gradient.addColorStop(1, "#FAFDA2");
        let centerX = 170;
        let centerY = 75;
        let radius = 40;
        rodelbahnA12.crc2.beginPath();
        rodelbahnA12.crc2.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
        rodelbahnA12.crc2.fillStyle = gradient;
        rodelbahnA12.crc2.fill();
    } //sun
    function drawSky() {
        rodelbahnA12.crc2.moveTo(0, 350);
        rodelbahnA12.crc2.beginPath();
        rodelbahnA12.crc2.lineTo(700, 700);
        rodelbahnA12.crc2.lineTo(700, 0);
        rodelbahnA12.crc2.lineTo(0, 0);
        rodelbahnA12.crc2.lineTo(0, 350);
        rodelbahnA12.crc2.closePath();
        var grd = rodelbahnA12.crc2.createLinearGradient(0, 0, 700, 1110);
        // light blue
        grd.addColorStop(0, "#EFFEFF");
        // dark blue
        grd.addColorStop(1, "#4AF3FF");
        rodelbahnA12.crc2.fillStyle = grd;
        rodelbahnA12.crc2.fill();
    } //sky
    function drawCloud1() {
        rodelbahnA12.crc2.beginPath();
        rodelbahnA12.crc2.arc(50, 220, 45, 0, 2 * Math.PI);
        rodelbahnA12.crc2.arc(120, 220, 70, 0, 2 * Math.PI);
        rodelbahnA12.crc2.arc(190, 220, 45, 0, 2 * Math.PI);
        rodelbahnA12.crc2.fillStyle = "#FFFFFF";
        rodelbahnA12.crc2.fill();
    } //cloud1
    function drawCloud2() {
        rodelbahnA12.crc2.beginPath();
        rodelbahnA12.crc2.arc(470, 180, 20, 0, 2 * Math.PI);
        rodelbahnA12.crc2.arc(510, 180, 40, 0, 2 * Math.PI);
        rodelbahnA12.crc2.arc(570, 180, 70, 0, 2 * Math.PI);
        rodelbahnA12.crc2.arc(630, 180, 40, 0, 2 * Math.PI);
        rodelbahnA12.crc2.arc(670, 180, 20, 0, 2 * Math.PI);
        rodelbahnA12.crc2.fillStyle = "#FFFFFF";
        rodelbahnA12.crc2.fill();
    } //cloud2
})(rodelbahnA12 || (rodelbahnA12 = {})); //namespace
//# sourceMappingURL=A12Main.js.map