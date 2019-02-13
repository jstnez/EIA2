var rodelbahnA12;
(function (rodelbahnA12) {
    class Trees extends rodelbahnA12.DrawObjects {
        constructor() {
            super();
            this.xPos = 40 + Math.random() * 200;
            this.yPos = 800 + Math.random() * 200;
        }
        draw() {
            rodelbahnA12.crc2.beginPath();
            rodelbahnA12.crc2.moveTo(this.xPos - 10, this.yPos + 70);
            rodelbahnA12.crc2.lineTo(this.xPos + 10, this.yPos + 70);
            rodelbahnA12.crc2.lineTo(this.xPos + 7, this.yPos - 0);
            rodelbahnA12.crc2.closePath();
            rodelbahnA12.crc2.fillStyle = "#612A05";
            rodelbahnA12.crc2.fill();
            rodelbahnA12.crc2.beginPath();
            rodelbahnA12.crc2.moveTo(this.xPos - 30, this.yPos + 50);
            rodelbahnA12.crc2.lineTo(this.xPos, this.yPos - 20);
            rodelbahnA12.crc2.lineTo(this.xPos + 30, this.yPos + 50);
            rodelbahnA12.crc2.closePath();
            rodelbahnA12.crc2.fillStyle = "#018A0E";
            rodelbahnA12.crc2.fill();
        }
    }
    rodelbahnA12.Trees = Trees;
})(rodelbahnA12 || (rodelbahnA12 = {}));
//# sourceMappingURL=A12Trees.js.map