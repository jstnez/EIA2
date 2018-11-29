import * as Http from "http"; // importiert eine Datai als http

namespace L06_SendData { //klassischer namespace 
    console.log("Starting server"); //Konsolenausgabe von "Starting server"
    let port: number = process.env.PORT; //process.env.PORT ist eine Nummer, port definiert wo (welcher server) du bist
    if (port == undefined) //wenn der port nicht definiert ist
        port = 8100; //dann soll port 8100 sein damit man mit dem port verbunden ist

    let server: Http.Server = Http.createServer(); //variable server vom Typ Http.Server und wird gleichgesetzt mit der Funktion Http.createServer()
    server.addListener("request", handleRequest); // Listener auf request gesetzt, handleRequest = Funktion f�r den H�ndler
    server.addListener("listening", handleListen); //Listerner auf listening, handleListen = Funktion f�r den H�ndler, 
    server.listen(port); //schaut nach welcher port benutzt wird, damit geschaut wird dass alles den selben port hat

    function handleListen(): void { //neue funktion wird erstellt
        console.log("Listening"); //gibt Listening in der console aus 
        
    }

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void { //eine Funktion, die bei einer incomingMessage eine ServerResponse zur�ckgibt
        console.log("I hear voices!"); //Konsolenausgabe von i heare voices

        _response.setHeader("content-type", "text/html; charset=utf-8"); //dem header werden die werte die "content-type", "text/html; charset=utf-8", damit die Nachrricht ausgegeben werden kann
        _response.setHeader("Access-Control-Allow-Origin", "*"); //dem header wird Access-Control-Allow-Origin hinzugef�gt, erlaubt die Aussage des Nutzers mit der Quelle zu teilen

        _response.write(_request.url); //Ruft Informationen �ber die URL der aktuellen Anforderung ab.
        console.log(_request.url);
        _response.end(); //konversation wird beendet
    }
}