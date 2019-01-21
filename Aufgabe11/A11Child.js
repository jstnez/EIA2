var rodelbahnA11;
(function (rodelbahnA11) {
    class Child extends rodelbahnA11.DrawObjects {
        constructor() {
            super();
            this.xPos = Math.random() * 100;
            this.yPos = Math.random() * 250 + 400;
            this.mDown = true;
            this.color = this.getRandomColor();
        }
        draw() {
            if (this.mDown == true) {
                this.drawDown();
            }
            else {
                this.drawUp();
            }
        }
        move() {
            if (this.mDown == true) {
                this.moveDown();
            }
            else {
                this.moveUp();
            }
        }
        drawDown() {
            rodelbahnA11.crc2.beginPath();
            rodelbahnA11.crc2.arc(this.xPos + 25, this.yPos - 50, 10, 0, 2 * Math.PI, false);
            rodelbahnA11.crc2.fillStyle = "#FFD8BE";
            rodelbahnA11.crc2.fill();
            rodelbahnA11.crc2.lineWidth = .2;
            rodelbahnA11.crc2.strokeStyle = "#A57658";
            rodelbahnA11.crc2.stroke();
            rodelbahnA11.crc2.fillStyle = this.color;
            rodelbahnA11.crc2.beginPath();
            rodelbahnA11.crc2.moveTo(this.xPos + 10, this.yPos - 15);
            rodelbahnA11.crc2.lineTo(this.xPos + 45, this.yPos - 15);
            rodelbahnA11.crc2.lineTo(this.xPos + 25, this.yPos - 40);
            rodelbahnA11.crc2.fill();
            rodelbahnA11.crc2.beginPath();
            rodelbahnA11.crc2.moveTo(this.xPos, this.yPos);
            rodelbahnA11.crc2.lineTo(this.xPos + 55, this.yPos);
            rodelbahnA11.crc2.lineWidth = 4;
            rodelbahnA11.crc2.strokeStyle = "#683737";
            rodelbahnA11.crc2.stroke();
            rodelbahnA11.crc2.beginPath();
            rodelbahnA11.crc2.moveTo(this.xPos, this.yPos - 15);
            rodelbahnA11.crc2.lineTo(this.xPos + 55, this.yPos - 15);
            rodelbahnA11.crc2.lineWidth = 4;
            rodelbahnA11.crc2.strokeStyle = "#683737";
            rodelbahnA11.crc2.stroke();
            rodelbahnA11.crc2.beginPath();
            rodelbahnA11.crc2.moveTo(this.xPos + 10, this.yPos);
            rodelbahnA11.crc2.lineTo(this.xPos + 10, this.yPos - 15);
            rodelbahnA11.crc2.lineWidth = 4;
            rodelbahnA11.crc2.strokeStyle = "#683737";
            rodelbahnA11.crc2.stroke();
            rodelbahnA11.crc2.beginPath();
            rodelbahnA11.crc2.moveTo(this.xPos + 45, this.yPos);
            rodelbahnA11.crc2.lineTo(this.xPos + 45, this.yPos - 15);
            rodelbahnA11.crc2.lineWidth = 4;
            rodelbahnA11.crc2.strokeStyle = "#683737";
            rodelbahnA11.crc2.stroke();
        }
        moveDown() {
            this.yDir = 2;
            this.xDir = 5;
            this.xPos += this.xDir;
            this.yPos += this.yDir;
            if (this.xPos > 750) {
                this.mDown = false;
            }
        }
        getRandomColor() {
            var r = ("0" + Math.floor(Math.random() * 256).toString(16)).substr(-2);
            var g = ("0" + Math.floor(Math.random() * 256).toString(16)).substr(-2);
            var b = ("0" + Math.floor(Math.random() * 256).toString(16)).substr(-2);
            return "#" + r + g + b;
        }
        //childup
        drawUp() {
            rodelbahnA11.crc2.beginPath();
            rodelbahnA11.crc2.arc(this.xPos - 45, this.yPos - 45, 10, 0, 2 * Math.PI, false);
            rodelbahnA11.crc2.fillStyle = "#FFD8BE";
            rodelbahnA11.crc2.fill();
            rodelbahnA11.crc2.lineWidth = .2;
            rodelbahnA11.crc2.strokeStyle = "#A57658";
            rodelbahnA11.crc2.stroke();
            rodelbahnA11.crc2.beginPath();
            rodelbahnA11.crc2.moveTo(this.xPos - 35, this.yPos);
            rodelbahnA11.crc2.lineTo(this.xPos - 55, this.yPos);
            rodelbahnA11.crc2.lineTo(this.xPos - 55, this.yPos - 35);
            rodelbahnA11.crc2.lineTo(this.xPos - 35, this.yPos - 35);
            rodelbahnA11.crc2.fillStyle = this.color;
            rodelbahnA11.crc2.fill();
            rodelbahnA11.crc2.beginPath();
            rodelbahnA11.crc2.moveTo(this.xPos, this.yPos);
            rodelbahnA11.crc2.lineTo(this.xPos + 55, this.yPos);
            rodelbahnA11.crc2.lineWidth = 4;
            rodelbahnA11.crc2.strokeStyle = "#683737";
            rodelbahnA11.crc2.stroke();
            rodelbahnA11.crc2.beginPath();
            rodelbahnA11.crc2.moveTo(this.xPos, this.yPos - 15);
            rodelbahnA11.crc2.lineTo(this.xPos + 55, this.yPos - 15);
            rodelbahnA11.crc2.lineWidth = 4;
            rodelbahnA11.crc2.strokeStyle = "#683737";
            rodelbahnA11.crc2.stroke();
            rodelbahnA11.crc2.beginPath();
            rodelbahnA11.crc2.moveTo(this.xPos + 10, this.yPos);
            rodelbahnA11.crc2.lineTo(this.xPos + 10, this.yPos - 15);
            rodelbahnA11.crc2.lineWidth = 4;
            rodelbahnA11.crc2.strokeStyle = "#683737";
            rodelbahnA11.crc2.stroke();
            rodelbahnA11.crc2.beginPath();
            rodelbahnA11.crc2.moveTo(this.xPos + 45, this.yPos);
            rodelbahnA11.crc2.lineTo(this.xPos + 45, this.yPos - 15);
            rodelbahnA11.crc2.lineWidth = 4;
            rodelbahnA11.crc2.strokeStyle = "#683737";
            rodelbahnA11.crc2.stroke();
            rodelbahnA11.crc2.beginPath();
            rodelbahnA11.crc2.moveTo(this.xPos, this.yPos - 15);
            rodelbahnA11.crc2.lineTo(this.xPos - 35, this.yPos - 30);
            rodelbahnA11.crc2.lineWidth = 2;
            rodelbahnA11.crc2.strokeStyle = "#000000";
            rodelbahnA11.crc2.stroke();
        }
        moveUp() {
            this.yDir = Math.random() * (-2);
            this.xDir = Math.random() * (-5);
            this.xPos += this.xDir;
            this.yPos += this.yDir;
            if (this.xPos < 0) {
                this.mDown = true;
            }
        }
    }
    rodelbahnA11.Child = Child;
})(rodelbahnA11 || (rodelbahnA11 = {}));
//# sourceMappingURL=A11Child.js.map