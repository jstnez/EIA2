var rodelbahnA12;
(function (rodelbahnA12) {
    class Child extends rodelbahnA12.DrawObjects {
        constructor() {
            super();
            this.initialise();
        }
        initialise() {
            this.xPos = Math.random() * 100;
            this.yPos = Math.random() * 250 + 400;
            this.mDown = true;
            this.color = this.getRandomColor();
            this.onlysledge = false;
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
                if (this.onlysledge == true) {
                    this.moveDown();
                    if (this.xPos >= 800) {
                        this.initialise();
                    }
                }
                else {
                    this.moveUp();
                }
            }
        }
        drawDown() {
            //kind
            if (this.onlysledge == false) {
                rodelbahnA12.crc2.beginPath();
                rodelbahnA12.crc2.arc(this.xPos + 25, this.yPos - 50, 10, 0, 2 * Math.PI, false);
                rodelbahnA12.crc2.fillStyle = "#FFD8BE";
                rodelbahnA12.crc2.fill();
                rodelbahnA12.crc2.lineWidth = .2;
                rodelbahnA12.crc2.strokeStyle = "#A57658";
                rodelbahnA12.crc2.stroke();
                rodelbahnA12.crc2.fillStyle = this.color;
                rodelbahnA12.crc2.beginPath();
                rodelbahnA12.crc2.moveTo(this.xPos + 10, this.yPos - 15);
                rodelbahnA12.crc2.lineTo(this.xPos + 45, this.yPos - 15);
                rodelbahnA12.crc2.lineTo(this.xPos + 25, this.yPos - 40);
                rodelbahnA12.crc2.fill();
            }
            //schlitten
            rodelbahnA12.crc2.beginPath();
            rodelbahnA12.crc2.moveTo(this.xPos, this.yPos);
            rodelbahnA12.crc2.lineTo(this.xPos + 55, this.yPos);
            rodelbahnA12.crc2.lineWidth = 4;
            rodelbahnA12.crc2.strokeStyle = "#683737";
            rodelbahnA12.crc2.stroke();
            rodelbahnA12.crc2.beginPath();
            rodelbahnA12.crc2.moveTo(this.xPos, this.yPos - 15);
            rodelbahnA12.crc2.lineTo(this.xPos + 55, this.yPos - 15);
            rodelbahnA12.crc2.lineWidth = 4;
            rodelbahnA12.crc2.strokeStyle = "#683737";
            rodelbahnA12.crc2.stroke();
            rodelbahnA12.crc2.beginPath();
            rodelbahnA12.crc2.moveTo(this.xPos + 10, this.yPos);
            rodelbahnA12.crc2.lineTo(this.xPos + 10, this.yPos - 15);
            rodelbahnA12.crc2.lineWidth = 4;
            rodelbahnA12.crc2.strokeStyle = "#683737";
            rodelbahnA12.crc2.stroke();
            rodelbahnA12.crc2.beginPath();
            rodelbahnA12.crc2.moveTo(this.xPos + 45, this.yPos);
            rodelbahnA12.crc2.lineTo(this.xPos + 45, this.yPos - 15);
            rodelbahnA12.crc2.lineWidth = 4;
            rodelbahnA12.crc2.strokeStyle = "#683737";
            rodelbahnA12.crc2.stroke();
        }
        moveDown() {
            this.yDir = 2;
            this.xDir = 5;
            this.xPos += this.xDir;
            this.yPos += this.yDir;
            if (this.xPos > 600) {
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
            if (this.onlysledge == false) {
                rodelbahnA12.crc2.beginPath();
                rodelbahnA12.crc2.arc(this.xPos - 45, this.yPos - 45, 10, 0, 2 * Math.PI, false);
                rodelbahnA12.crc2.fillStyle = "#FFD8BE";
                rodelbahnA12.crc2.fill();
                rodelbahnA12.crc2.lineWidth = .2;
                rodelbahnA12.crc2.strokeStyle = "#A57658";
                rodelbahnA12.crc2.stroke();
                rodelbahnA12.crc2.beginPath();
                rodelbahnA12.crc2.moveTo(this.xPos - 35, this.yPos);
                rodelbahnA12.crc2.lineTo(this.xPos - 55, this.yPos);
                rodelbahnA12.crc2.lineTo(this.xPos - 55, this.yPos - 35);
                rodelbahnA12.crc2.lineTo(this.xPos - 35, this.yPos - 35);
                rodelbahnA12.crc2.fillStyle = this.color;
                rodelbahnA12.crc2.fill();
            }
            rodelbahnA12.crc2.beginPath();
            rodelbahnA12.crc2.moveTo(this.xPos, this.yPos);
            rodelbahnA12.crc2.lineTo(this.xPos + 55, this.yPos);
            rodelbahnA12.crc2.lineWidth = 4;
            rodelbahnA12.crc2.strokeStyle = "#683737";
            rodelbahnA12.crc2.stroke();
            rodelbahnA12.crc2.beginPath();
            rodelbahnA12.crc2.moveTo(this.xPos, this.yPos - 15);
            rodelbahnA12.crc2.lineTo(this.xPos + 55, this.yPos - 15);
            rodelbahnA12.crc2.lineWidth = 4;
            rodelbahnA12.crc2.strokeStyle = "#683737";
            rodelbahnA12.crc2.stroke();
            rodelbahnA12.crc2.beginPath();
            rodelbahnA12.crc2.moveTo(this.xPos + 10, this.yPos);
            rodelbahnA12.crc2.lineTo(this.xPos + 10, this.yPos - 15);
            rodelbahnA12.crc2.lineWidth = 4;
            rodelbahnA12.crc2.strokeStyle = "#683737";
            rodelbahnA12.crc2.stroke();
            rodelbahnA12.crc2.beginPath();
            rodelbahnA12.crc2.moveTo(this.xPos + 45, this.yPos);
            rodelbahnA12.crc2.lineTo(this.xPos + 45, this.yPos - 15);
            rodelbahnA12.crc2.lineWidth = 4;
            rodelbahnA12.crc2.strokeStyle = "#683737";
            rodelbahnA12.crc2.stroke();
            rodelbahnA12.crc2.beginPath();
            rodelbahnA12.crc2.moveTo(this.xPos, this.yPos - 15);
            rodelbahnA12.crc2.lineTo(this.xPos - 35, this.yPos - 30);
            rodelbahnA12.crc2.lineWidth = 2;
            rodelbahnA12.crc2.strokeStyle = "#000000";
            rodelbahnA12.crc2.stroke();
        }
        moveUp() {
            this.yDir = Math.random() * (-2);
            this.xDir = Math.random() * (-5);
            this.xPos += this.xDir;
            this.yPos += this.yDir;
            if (this.xPos < 50) {
                this.mDown = true;
            }
        }
    }
    rodelbahnA12.Child = Child;
})(rodelbahnA12 || (rodelbahnA12 = {}));
//# sourceMappingURL=A12Child.js.map