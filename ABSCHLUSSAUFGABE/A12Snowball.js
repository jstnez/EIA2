var rodelbahnA12;
(function (rodelbahnA12) {
    class Snowball extends rodelbahnA12.DrawObjects {
        constructor() {
            super();
            this.radius = 20;
        }
        move() {
        }
        draw() {
            rodelbahnA12.crc2.beginPath();
            rodelbahnA12.crc2.arc(this.xPos, this.yPos, this.radius, 0, 2 * Math.PI, false);
            rodelbahnA12.crc2.fillStyle = "#C7C6C6";
            rodelbahnA12.crc2.fill();
            rodelbahnA12.crc2.lineWidth = .2;
            rodelbahnA12.crc2.strokeStyle = "#D2EEF2";
            rodelbahnA12.crc2.stroke();
        }
    }
    rodelbahnA12.Snowball = Snowball;
})(rodelbahnA12 || (rodelbahnA12 = {}));
//# sourceMappingURL=A12Snowball.js.map