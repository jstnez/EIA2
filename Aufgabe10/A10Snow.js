var rodelbahn;
(function (rodelbahn) {
    class Snow {
        draw() {
            rodelbahn.crc2.beginPath();
            rodelbahn.crc2.arc(this.xPos, this.yPos, 3, 0, 2 * Math.PI, false);
            rodelbahn.crc2.fillStyle = "#F5FEFF";
            rodelbahn.crc2.fill();
            rodelbahn.crc2.lineWidth = .2;
            rodelbahn.crc2.strokeStyle = "#D2EEF2";
            rodelbahn.crc2.stroke();
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
    }
    rodelbahn.Snow = Snow;
})(rodelbahn || (rodelbahn = {}));
//# sourceMappingURL=A10Snow.js.map