var rodelbahn;
(function (rodelbahn) {
    class ChildDown {
        draw() {
            rodelbahn.crc2.beginPath();
            rodelbahn.crc2.arc(this.xPos + 25, this.yPos - 50, 10, 0, 2 * Math.PI, false);
            rodelbahn.crc2.fillStyle = "#FFD8BE";
            rodelbahn.crc2.fill();
            rodelbahn.crc2.lineWidth = .2;
            rodelbahn.crc2.strokeStyle = "#A57658";
            rodelbahn.crc2.stroke();
            rodelbahn.crc2.fillStyle = this.color;
            rodelbahn.crc2.beginPath();
            rodelbahn.crc2.moveTo(this.xPos + 10, this.yPos - 15);
            rodelbahn.crc2.lineTo(this.xPos + 45, this.yPos - 15);
            rodelbahn.crc2.lineTo(this.xPos + 25, this.yPos - 40);
            rodelbahn.crc2.fill();
            rodelbahn.crc2.beginPath();
            rodelbahn.crc2.moveTo(this.xPos, this.yPos);
            rodelbahn.crc2.lineTo(this.xPos + 55, this.yPos);
            rodelbahn.crc2.lineWidth = 4;
            rodelbahn.crc2.strokeStyle = "#683737";
            rodelbahn.crc2.stroke();
            rodelbahn.crc2.beginPath();
            rodelbahn.crc2.moveTo(this.xPos, this.yPos - 15);
            rodelbahn.crc2.lineTo(this.xPos + 55, this.yPos - 15);
            rodelbahn.crc2.lineWidth = 4;
            rodelbahn.crc2.strokeStyle = "#683737";
            rodelbahn.crc2.stroke();
            rodelbahn.crc2.beginPath();
            rodelbahn.crc2.moveTo(this.xPos + 10, this.yPos);
            rodelbahn.crc2.lineTo(this.xPos + 10, this.yPos - 15);
            rodelbahn.crc2.lineWidth = 4;
            rodelbahn.crc2.strokeStyle = "#683737";
            rodelbahn.crc2.stroke();
            rodelbahn.crc2.beginPath();
            rodelbahn.crc2.moveTo(this.xPos + 45, this.yPos);
            rodelbahn.crc2.lineTo(this.xPos + 45, this.yPos - 15);
            rodelbahn.crc2.lineWidth = 4;
            rodelbahn.crc2.strokeStyle = "#683737";
            rodelbahn.crc2.stroke();
        }
        move() {
            this.yDir = 2;
            this.xDir = 5;
            this.xPos += this.xDir;
            this.yPos += this.yDir;
            if (this.xPos > 750) {
                this.xPos = -60;
                this.yPos = Math.random() * 250 + 400;
            }
        }
        getRandomColor() {
            var r = ("0" + Math.floor(Math.random() * 256).toString(16)).substr(-2);
            var g = ("0" + Math.floor(Math.random() * 256).toString(16)).substr(-2);
            var b = ("0" + Math.floor(Math.random() * 256).toString(16)).substr(-2);
            return "#" + r + g + b;
        }
    }
    rodelbahn.ChildDown = ChildDown;
})(rodelbahn || (rodelbahn = {}));
//# sourceMappingURL=A10ChildDown.js.map