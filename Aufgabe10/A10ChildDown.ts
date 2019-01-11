namespace rodelbahn {

    export class ChildDown {
        xPos: number;
        yPos: number;
        xDir: number;
        yDir: number;
        color: string;


        draw(): void {

            crc2.beginPath();
            crc2.arc(this.xPos + 25, this.yPos - 50, 10, 0, 2 * Math.PI, false);
            crc2.fillStyle = "#FFD8BE";
            crc2.fill();
            crc2.lineWidth = .2;
            crc2.strokeStyle = "#A57658";
            crc2.stroke();

            crc2.fillStyle = this.color;
            crc2.beginPath();
            crc2.moveTo(this.xPos + 10, this.yPos - 15);
            crc2.lineTo(this.xPos + 45, this.yPos - 15);
            crc2.lineTo(this.xPos + 25, this.yPos - 40);


            
            crc2.fill();

            crc2.beginPath();
            crc2.moveTo(this.xPos, this.yPos);
            crc2.lineTo(this.xPos + 55, this.yPos);

            crc2.lineWidth = 4;
            crc2.strokeStyle = "#683737";
            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(this.xPos, this.yPos - 15);
            crc2.lineTo(this.xPos + 55, this.yPos - 15);

            crc2.lineWidth = 4;
            crc2.strokeStyle = "#683737";
            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(this.xPos + 10, this.yPos);
            crc2.lineTo(this.xPos + 10, this.yPos - 15);

            crc2.lineWidth = 4;
            crc2.strokeStyle = "#683737";
            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(this.xPos + 45, this.yPos);
            crc2.lineTo(this.xPos + 45, this.yPos - 15);

            crc2.lineWidth = 4;
            crc2.strokeStyle = "#683737";
            crc2.stroke();

        }

        move(): void {

            this.yDir = 2;
            this.xDir = 5;

            this.xPos += this.xDir;
            this.yPos += this.yDir;

            if (this.xPos > 750) {
                this.xPos = -60;
                this.yPos = Math.random() * 250 + 400;
            }

        }

        getRandomColor(): string {
            var r: string = ("0" + Math.floor(Math.random() * 256).toString(16)).substr(-2);
            var g: string = ("0" + Math.floor(Math.random() * 256).toString(16)).substr(-2);
            var b: string = ("0" + Math.floor(Math.random() * 256).toString(16)).substr(-2);
            return "#" + r + g + b;
        }
    }

}
