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


readTextFile("json/container-main.json", function(animeData){
    var data = JSON.parse(animeData);
    console.log(data);


        var animeName;
        var animeGenre;
        var animeEpisodes;
        var animeImageLocation;

        var html = '';
        var maindiv = '<div class="anime-list">';

        var innermaindiv1 = '<div style="display: inline-block;">';
        var innermaindiv1imgstart = '<img src="images/';
        var innermaindiv1imgend = '" id="anime-icon-list"></img>';
        var innermaindiv1end = '</div>';

        var innermaindiv2 = '<div id="anime-text">';
        var innermaindiv2li1 = '<li id="anime-utext-list">'
        var innermaindiv2li1end = '</li>';
        var innermaindiv2li2 = '<li id="anime-mtext-list">Genres: ';
        var innermaindiv2li2end = '</li>';
        var innermaindiv2li3 = '<li id="anime-ltext-list">Episodes: ';
        var innermaindiv2li3end = '</li>';
        var innermaindiv2end = '</div>';

        var maindivend = '</div>';

    

        var animeCount = Object.keys(data).length;
        var i = 0;
        console.log(animeCount);

        while (i<animeCount) {
            
            animeName = data[i].animeName;
            animeGenre = data[i].animeGenre;
            animeEpisodes = data[i].animeEpisodes;
            animeImageLocation = data[i].animeImageLocation;

            var html = maindiv + 
                        innermaindiv1 + 
                        innermaindiv1imgstart + 
                        animeImageLocation + 
                        innermaindiv1imgend + 
                        innermaindiv1end +
                        innermaindiv2 +
                        innermaindiv2li1 + 
                        animeName +
                        innermaindiv2li1end +
                        innermaindiv2li2 + 
                        animeGenre +
                        innermaindiv2li2end +
                        innermaindiv2li3 + 
                        animeEpisodes +
                        innermaindiv2li3end +
                        innermaindiv2end +
                       maindivend;

                        maindivend;
            document.getElementById("container-main").innerHTML += html;

            console.log(html);
            i++;
        }


});


