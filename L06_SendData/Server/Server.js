"use strict";
const Http = require("http"); // importiert eine Datai als http
const Url = require("url");
var L06_SendData;
(function (L06_SendData_1) {
    var L06_SendData;
    (function (L06_SendData) {
        console.log("Starting server"); //Konsolenausgabe von "Starting server"
        let port = process.env.PORT; //process.env.PORT ist eine Nummer, port definiert wo (welcher server) du bist
        if (port == undefined)
            port = 8100; //dann soll port 8100 sein damit man mit dem port verbunden ist
        let server = Http.createServer(); //variable server vom Typ Http.Server und wird gleichgesetzt mit der Funktion Http.createServer()
        server.addListener("request", handleRequest); // Listener auf request gesetzt, handleRequest = Funktion f�r den H�ndler
        server.addListener("listening", handleListen); //Listerner auf listening, handleListen = Funktion f�r den H�ndler, 
        server.listen(port); //schaut nach welcher port benutzt wird, damit geschaut wird dass alles den selben port hat
        function handleListen() {
            console.log("Listening"); //gibt Listening in der console aus 
        }
        function handleRequest(_request, _response) {
            console.log("I hear voices!"); //Konsolenausgabe von i heare voices
            _response.setHeader("content-type", "text/html; charset=utf-8"); //dem header werden die werte die "content-type", "text/html; charset=utf-8", damit die Nachrricht ausgegeben werden kann
            _response.setHeader("Access-Control-Allow-Origin", "*"); //dem header wird Access-Control-Allow-Origin hinzugef�gt, erlaubt die Aussage des Nutzers mit der Quelle zu teilen
            _response.write(_request.url); //Ruft Informationen �ber die URL der aktuellen Anforderung ab.
            console.log(_request.url);
            let url = Url.parse(_request.url, true).query;
            console.log(url);
            for (let key in url) {
                console.log(url[key]);
                console.log(key);
                _response.write(key + " = " + url[key] + "<br>");
            }
            _response.end(); //konversation wird beendet
        }
    })(L06_SendData || (L06_SendData = {}));
})(L06_SendData || (L06_SendData = {}));
//# sourceMappingURL=Server.js.map