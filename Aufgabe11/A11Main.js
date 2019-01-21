var rodelbahnA11;
(function (rodelbahnA11) {
    window.addEventListener("load", init);
    let allMovingObjects = [];
    // let i: number = 0;
    let fps = 25;
    let imgData;
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        rodelbahnA11.crc2 = canvas.getContext("2d");
        drawSky();
        drawSun();
        gernerateTrees();
        drawCloud1();
        drawCloud2();
        imgData = rodelbahnA11.crc2.getImageData(0, 0, 700, 1100);
        generateSnow();
        generateChild();
        update();
        function update() {
            rodelbahnA11.crc2.putImageData(imgData, 0, 0);
            window.setTimeout(update, 1000 / fps);
            //        for (let i: number = 0; i < allMovingObjects.length; i++) {
            //            let snowflake: DrawObjects = allMovingObjects[i];
            //            snowflake.move();
            //            snowflake.draw(); }
            //  }
            //        for (let i: number = 0; i < allMovingObjects.length; i++) {
            //            let childs: DrawObjects = allMovingObjects[i];
            //            childs.move();
            //            childs.draw();
            //        }
            //
            //        for (let i: number = 0; i < childsUp.length; i++) {
            //            let childu: ChildUp = childsUp[i];
            //            childu.move();
            //    childu.draw();
            //        }
            for (let i = 0; i < allMovingObjects.length; i++) {
                let object = allMovingObjects[i];
                object.draw();
                object.move();
            }
        }
        function gernerateTrees() {
            for (let i = 0; i < 8; i++) {
                let trees = new rodelbahnA11.Trees();
                allMovingObjects.push(trees);
            }
        } //trees
        function generateSnow() {
            for (let i = 0; i < 500; i++) {
                let snowflake = new rodelbahnA11.Snow();
                allMovingObjects.push(snowflake);
            }
        } //snow
        function generateChild() {
            for (let i = 0; i < 10; i++) {
                let child = new rodelbahnA11.Child();
                allMovingObjects.push(child);
            }
        } //child
        function drawSun() {
            var gradient = rodelbahnA11.crc2.createRadialGradient(300, 80, 10, 238, 5, 300);
            gradient.addColorStop(0, "#F7FF00");
            gradient.addColorStop(0.5, "#FEFFE4");
            gradient.addColorStop(1, "#FAFDA2");
            let centerX = 170;
            let centerY = 75;
            let radius = 40;
            rodelbahnA11.crc2.beginPath();
            rodelbahnA11.crc2.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
            rodelbahnA11.crc2.fillStyle = gradient;
            rodelbahnA11.crc2.fill();
        } //sun
        function drawSky() {
            rodelbahnA11.crc2.moveTo(0, 350);
            rodelbahnA11.crc2.beginPath();
            rodelbahnA11.crc2.lineTo(700, 700);
            rodelbahnA11.crc2.lineTo(700, 0);
            rodelbahnA11.crc2.lineTo(0, 0);
            rodelbahnA11.crc2.lineTo(0, 350);
            rodelbahnA11.crc2.closePath();
            var grd = rodelbahnA11.crc2.createLinearGradient(0, 0, 700, 1110);
            // light blue
            grd.addColorStop(0, "#EFFEFF");
            // dark blue
            grd.addColorStop(1, "#4AF3FF");
            rodelbahnA11.crc2.fillStyle = grd;
            rodelbahnA11.crc2.fill();
        } //sky
        function drawCloud1() {
            rodelbahnA11.crc2.beginPath();
            rodelbahnA11.crc2.arc(50, 220, 45, 0, 2 * Math.PI);
            rodelbahnA11.crc2.arc(120, 220, 70, 0, 2 * Math.PI);
            rodelbahnA11.crc2.arc(190, 220, 45, 0, 2 * Math.PI);
            rodelbahnA11.crc2.fillStyle = "#FFFFFF";
            rodelbahnA11.crc2.fill();
        } //cloud1
        function drawCloud2() {
            rodelbahnA11.crc2.beginPath();
            rodelbahnA11.crc2.arc(470, 180, 20, 0, 2 * Math.PI);
            rodelbahnA11.crc2.arc(510, 180, 40, 0, 2 * Math.PI);
            rodelbahnA11.crc2.arc(570, 180, 70, 0, 2 * Math.PI);
            rodelbahnA11.crc2.arc(630, 180, 40, 0, 2 * Math.PI);
            rodelbahnA11.crc2.arc(670, 180, 20, 0, 2 * Math.PI);
            rodelbahnA11.crc2.fillStyle = "#FFFFFF";
            rodelbahnA11.crc2.fill();
        } //cloud2
    } //init
})(rodelbahnA11 || (rodelbahnA11 = {})); //namespace
//# sourceMappingURL=A11Main.js.map