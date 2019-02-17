namespace DatabaseClient {
    window.addEventListener("load", init);
    //let serverAddress: string = "http://localhost:8100";
    let serverAddress: string = "https://eia2-justine.herokuapp.com/";

    function init(_event: Event): void {

    }

    export function insert(): void {

        let url: string = "command=insert" + "&" + "score" + "=" + rodelbahnA12.score + "&name=" + rodelbahnA12.name;
        sendRequest(url, handleInsertResponse);
    }




    export function getHighscore(): void {
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

            let hs: Highscore[] = JSON.parse(xhr.response);

            function sortierescores(_h1: Highscore, _h2: Highscore): number {
                if (_h1.score > _h2.score) {
                    return -1;
                }
                if (_h1.score < _h2.score) {
                    return 1;
                }

                return 0;

            }

            hs.sort(sortierescores);
            console.log(hs);


            for (let b: number = 0; b < 10 && b < hs.length; b++) {
                let div: HTMLDivElement = document.createElement("div");
                document.getElementById("High").appendChild(div);
                div.innerHTML = "Name" + " " + "_" +  hs[b].name;
                div.innerHTML += "___" + "\t Score" + " " + "_" + hs[b].score;

            }
        }
    }
}