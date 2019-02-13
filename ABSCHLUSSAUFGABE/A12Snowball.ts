namespace rodelbahnA12 {

    export class Snowball extends DrawObjects {

        
        radius: number;

        constructor() {
            super();
            this.radius = 20;
            
        }
        
        move(): void {

                  }


        draw(): void {



            crc2.beginPath();
            crc2.arc(this.xPos, this.yPos, this.radius, 0, 2 * Math.PI, false);

            crc2.fillStyle = "red";
            crc2.fill();
            crc2.lineWidth = .2;
            crc2.strokeStyle = "#D2EEF2";
            crc2.stroke();


        }




    }

}


