import * as Http from "http"; // importiert eine Datai als http
import * as Url from "url";

namespace L06_SendData { //klassischer namespace 

    namespace HolyChrismastree3 {
    interface Product {
        [key: string]: number;
} 
   
    
    console.log("Starting server"); //Konsolenausgabe von "Starting server"
    let port: number = process.env.PORT; //process.env.PORT ist eine Nummer, port definiert wo (welcher server) du bist
    if (port == undefined) //wenn der port nicht definiert ist
        port = 8100; //dann soll port 8100 sein damit man mit dem port verbunden ist

    let server: Http.Server = Http.createServer(); //variable server vom Typ Http.Server und wird gleichgesetzt mit der Funktion Http.createServer()
    server.addListener("request", handleRequest); // Listener auf request gesetzt, handleRequest = Funktion für den Händler
    server.addListener("listening", handleListen); //Listerner auf listening, handleListen = Funktion für den Händler, 
    server.listen(port); //schaut nach welcher port benutzt wird, damit geschaut wird dass alles den selben port hat

    function handleListen(): void { //neue funktion wird erstellt
        console.log("Listening"); //gibt Listening in der console aus 
        
    }

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void { //eine Funktion, die bei einer incomingMessage eine ServerResponse zurückgibt
        console.log("I hear voices!"); //Konsolenausgabe von i heare voices

        _response.setHeader("content-type", "text/html; charset=utf-8"); //dem header werden die werte die "content-type", "text/html; charset=utf-8", damit die Nachrricht ausgegeben werden kann
        _response.setHeader("Access-Control-Allow-Origin", "*"); //dem header wird Access-Control-Allow-Origin hinzugefügt, erlaubt die Aussage des Nutzers mit der Quelle zu teilen

        
        console.log(_request.url);
        
        let url: Product = Url.parse(_request.url, true).query;
        console.log(url);
        
        for (let key in url) {
            console.log(url[key]);
            console.log(key);
            
            _response.write(key + " = " + url[key] + "<br>");
} 
        console.log();
        
        _response.end(); //konversation wird beendet
    }
}
    }