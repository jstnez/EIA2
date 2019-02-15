namespace DatabaseClient {
    window.addEventListener("load", init);
    //let serverAddress: string = "http://localhost:8100";
    let serverAddress: string = "https://eia2-justine.herokuapp.com/";

    function init(_event: Event): void {

    }

    function insert(_event: Event): void {

        let url: string = "command=insert" + "&" + "score" + "=" + rodelbahnA12.score + "&name=" + rodelbahnA12.name;
        sendRequest(url, handleInsertResponse);
    }




    function getHighscore(_event: Event): void {
        let query: string = "command=getHighscore";
        sendRequest(query, handleHighscoreResponse);
    }

    function sendRequest(_query: string, _callback: EventListener): void {
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", serverAddress + "?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
    }

    function handleInsertResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }

    function handleHighscoreResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
          console.log(xhr.response);
        }
    }
}