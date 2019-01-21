var rodelbahnA11;
(function (rodelbahnA11) {
    class Snow extends rodelbahnA11.DrawObjects {
        constructor() {
            super();
            this.xPos = Math.random() * 700;
            this.yPos = Math.random() * 1100;
        }
        move() {
            this.yDir = 2;
            this.xDir = Math.random() * 4 - 2;
            this.xPos += this.xDir;
            this.yPos += this.yDir;
            if (this.yPos > 1100) {
                this.yPos = 0;
            }
            this.draw();
        }
        draw() {
            rodelbahnA11.crc2.beginPath();
            rodelbahnA11.crc2.arc(this.xPos, this.yPos, 3, 0, 2 * Math.PI, false);
            rodelbahnA11.crc2.fillStyle = "#F5FEFF";
            rodelbahnA11.crc2.fill();
            rodelbahnA11.crc2.lineWidth = .2;
            rodelbahnA11.crc2.strokeStyle = "#D2EEF2";
            rodelbahnA11.crc2.stroke();
        }
    }
    rodelbahnA11.Snow = Snow;
})(rodelbahnA11 || (rodelbahnA11 = {}));
//# sourceMappingURL=A11Snow.js.map