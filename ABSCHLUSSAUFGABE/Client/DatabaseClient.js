var DatabaseClient;
(function (DatabaseClient) {
    window.addEventListener("load", init);
    //let serverAddress: string = "http://localhost:8100";
    let serverAddress = "https://eia2-justine.herokuapp.com/";
    function init(_event) {
    }
    function insert(_event) {
        let url = "command=insert" + "&" + "score" + "=" + rodelbahnA12.score + "&name=" + rodelbahnA12.name;
        sendRequest(url, handleInsertResponse);
    }
    function getHighscore(_event) {
        let query = "command=getHighscore";
        sendRequest(query, handleHighscoreResponse);
    }
    function sendRequest(_query, _callback) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", serverAddress + "?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
    }
    function handleInsertResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }
    function handleHighscoreResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            console.log(xhr.response);
        }
    }
})(DatabaseClient || (DatabaseClient = {}));
//# sourceMappingURL=DatabaseClient.js.map