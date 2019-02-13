var rodelbahnA12;
(function (rodelbahnA12) {
    class Snow extends rodelbahnA12.DrawObjects {
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
            rodelbahnA12.crc2.beginPath();
            rodelbahnA12.crc2.arc(this.xPos, this.yPos, 3, 0, 2 * Math.PI, false);
            rodelbahnA12.crc2.fillStyle = "#F5FEFF";
            rodelbahnA12.crc2.fill();
            rodelbahnA12.crc2.lineWidth = .2;
            rodelbahnA12.crc2.strokeStyle = "#D2EEF2";
            rodelbahnA12.crc2.stroke();
        }
    }
    rodelbahnA12.Snow = Snow;
})(rodelbahnA12 || (rodelbahnA12 = {}));
//# sourceMappingURL=A12Snow.js.map