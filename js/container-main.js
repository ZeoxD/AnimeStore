function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

readTextFile("json/container-main.json", function(animeData) {
   var data = JSON.parse(animeData);

    var animeName;
    var animeGenre;
    var animeEpisodes;
    var animeImageLocation;

    var i = 0;
    if (data != null) {
        var animeCount = Object.keys(data).length;
    }

    while (i<animeCount) {
        animeName = data[i].animeName;
        animeGenre = data[i].animeGenre;
        animeEpisodes = data[i].animeEpisodes;
        animeImageLocation = data[i].animeImageLocation;

        var html = `<div class="anime-list">
                            <div style="display: inline-block;">
                                <img src="images/${animeImageLocation}" id="anime-icon-list"></img>
                            </div>

                            <div id="anime-text">
                                <li id="anime-utext-list">${animeName}</li>
                                <li id="anime-mtext-list">Genres: ${animeGenre}</li>
                                <li id="anime-ltext-list">Episodes: ${animeEpisodes}</li>
                            </div>
                        </div>`

        document.getElementById("container-main").innerHTML += html;
        i++;

        console.log(html);
    }
});
