namespace Boxes {
    function Boxxx(): void {
    let n: number = 5;
    let c: string;
    let x: number = 0;
    let y: number = 0;

    for (let i: number = 0; i < n; i++) {
        y += (i == 2) ? 20 : 50;
        x = (x + 170) % 400;
        switch (i) {
            case 0:
                c = "#ff0000";
                break;
            case 1:
            case 4:
                c = "#00ff00";
                break;
            case 3:
                continue;
            default:
                c = "#0000ff";
        }
        for (let a: number = 50; a > 0; a -= 20) {
            placeDiv(c, x, y, a, a);
            if (i == 4)
                break;
        }
    }


    function placeDiv(_color: string, _x: number, _y: number, _width: number, _height: number): void {
        let div: HTMLDivElement = document.createElement("div");
        document.body.appendChild(div);
        
        let s: CSSStyleDeclaration = div.style;
        s.border = "thin solid black";
        s.position = "absolute";
        s.backgroundColor = _color;
        s.width = _width + "px";
        s.height = _height + "px";
        s.left = _x + "px";
        s.top = _y + "px";
    }
    }    document.addEventListener("DOMContentLoaded", Boxxx ); 
    
}
