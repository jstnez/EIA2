var rodelbahnA11;
(function (rodelbahnA11) {
    class Trees extends rodelbahnA11.DrawObjects {
        constructor() {
            super();
            this.xPos = 40 + Math.random() * 200;
            this.yPos = 800 + Math.random() * 200;
        }
        draw() {
            rodelbahnA11.crc2.beginPath();
            rodelbahnA11.crc2.moveTo(this.xPos - 10, this.yPos + 70);
            rodelbahnA11.crc2.lineTo(this.xPos + 10, this.yPos + 70);
            rodelbahnA11.crc2.lineTo(this.xPos + 7, this.yPos - 0);
            rodelbahnA11.crc2.closePath();
            rodelbahnA11.crc2.fillStyle = "#612A05";
            rodelbahnA11.crc2.fill();
            rodelbahnA11.crc2.beginPath();
            rodelbahnA11.crc2.moveTo(this.xPos - 30, this.yPos + 50);
            rodelbahnA11.crc2.lineTo(this.xPos, this.yPos - 20);
            rodelbahnA11.crc2.lineTo(this.xPos + 30, this.yPos + 50);
            rodelbahnA11.crc2.closePath();
            rodelbahnA11.crc2.fillStyle = "#018A0E";
            rodelbahnA11.crc2.fill();
        }
    }
    rodelbahnA11.Trees = Trees;
})(rodelbahnA11 || (rodelbahnA11 = {}));
//# sourceMappingURL=A11Trees.js.map