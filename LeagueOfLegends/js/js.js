var info = {};

function mostrarSummoner() {
    var summoner = document.getElementById("summoner").value;
    var request = new XMLHttpRequest();
    request.open('GET', `https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summoner}?api_key=RGAPI-67ef9dde-3fe4-4a06-b9f3-f0dc900ed837`, true);
    request.onload = function () {
        var data = JSON.parse(this.response);
        if (request.status >= 200 && request.status < 400) {
            console.log(data);
            nivel = data.summonerLevel;
            summonerId = data.id;
            mandarNombre(summonerId, nivel);
        } else {
            console.log('error');
        }
    }
    request.send();
 
}

function mandarNombre(summonerId, nivel) {
    var request = new XMLHttpRequest();
    request.open('GET',`https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/${summonerId}?api_key=RGAPI-67ef9dde-3fe4-4a06-b9f3-f0dc900ed837`, true);
    request.onload = function() {
        var data = JSON.parse(this.response);
        if(request.status >= 200 && request.status < 400) {
            console.log(data);
            var nombre = data[0].summonerName;
            var tier = data[0].tier;
            var rank = data[0].rank;
            var wins = data[0].wins;
            var losses = data[0].losses;
            info = summonerId + ";" + nombre + ";" + nivel + ";" + tier + ";" + rank + ";" + wins + ";" + losses;
            window.location.href = "info.html " + "#" + nombre + "#" + nivel + "#" + tier + "#" + rank + "#" + wins + "#" + losses;    
        } else {
            console.log('error');
        }
    }
    request.send();

}


function mostrarXMLS() {
    var datos = document.URL.toString().split("#");
    var nombre = datos[1];
    var nivel = datos[2];
    var tier = datos[3];
    var rank = datos[4];
    var wins = datos[5];
    var losses = datos[6];
    alert("<nombre>" + nombre + "</nombre>" + "<nivel>" + nivel + "</nivel>" + "<rango>" + tier + "</rango>" + "<rank>" + rank + "</rank>" + "<victorias>" + wins + "</victorias>" + "<derrotas>" +losses + "</derrotas>"); 
   
}

function mostrarJSON() {
    var datos = document.URL.toString().split("#");
    var nombre = datos[1];
    var nivel = datos[2];
    var tier = datos[3];
    var rank = datos[4];
    var wins = datos[5];
    var losses = datos[6];
     alert("{'{Summoner' : {'datosSummoner' {'nombre':" + nombre + "'nivel' : " + nivel + "}, 'datosRango': {'rango':" + rank + ",'victorias' : " + wins + "'derrotas' : " + losses+"}}}");
                
}


function leerUrl() {
    var datos = document.URL.toString().split("#");
    var nombre = datos[1];
    var nivel = datos[2];
    var tier = datos[3];
    var rank = datos[4];
    var wins = datos[5];
    var losses = datos[6];

    document.getElementById("nombreSummoner").innerHTML=datos[1];
    document.getElementById("nivel").innerHTML=datos[2];
    document.getElementById("rank").innerHTML=datos[3];
    document.getElementById("tier").innerHTML=datos[4];
    document.getElementById("victorias").innerHTML=datos[5];
    document.getElementById("derrotas").innerHTML=datos[6];
}



