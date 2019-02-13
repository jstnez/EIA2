namespace rodelbahnA12 {

    export class Trees extends DrawObjects {

       
        
        constructor() {
            super();
            this.xPos = 40 + Math.random() * 200;
            this.yPos = 800 + Math.random() * 200;      }


        draw(): void {


            crc2.beginPath();
            crc2.moveTo(this.xPos - 10, this.yPos + 70);
            crc2.lineTo(this.xPos + 10, this.yPos + 70);

            crc2.lineTo(this.xPos + 7, this.yPos - 0);
            crc2.closePath();

            crc2.fillStyle = "#612A05";
            crc2.fill();

            crc2.beginPath();
            crc2.moveTo(this.xPos - 30, this.yPos + 50);
            crc2.lineTo(this.xPos, this.yPos - 20);
            crc2.lineTo(this.xPos + 30, this.yPos + 50);
            crc2.closePath();

            crc2.fillStyle = "#018A0E";
            crc2.fill();
        }
        
        
    }
}