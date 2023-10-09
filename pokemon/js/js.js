var pokemon;
var id;
var type;
var img;
var location;


function searchPokemon() {
    var pokemon = document.getElementById("pokemon").value;
    var request = new XMLHttpRequest();
    request.open('GET', `https://pokeapi.co/api/v2/pokemon/${pokemon}`, true);
    request.onload = function () {
        var data = JSON.parse(this.response);
        if (request.status >= 200 && request.status < 400) {
            console.log(data);
            var id = data.id;
            var type = data.types[0].type.name;
            console.log("Id = " + id + "----" +" Nombre = " + pokemon +" Tipo = " + type);
            searchSpecies(id, pokemon, type);
        } else {
            console.log('error');
        }
    }
    request.send();
}

function searchSpecies(id, pokemon, type) {
    var request = new XMLHttpRequest();
    request.open('GET', `https://pokeapi.co/api/v2/location/${id}/`, true);
    request.onload = function () {
        var data = JSON.parse(this.response);
        if (request.status >= 200 && request.status < 400) {
            console.log(data);
            var location = data.region.url;
            window.location.href = "mostrarInformacionPokemon.html " + "#" + id + "#" + pokemon +  "#" + location+ "#" + type; 
            console.log("Id = " + id + "----" +" nombre = " + pokemon +" url location = " + location +" tipo = " + type);
        } else {
            console.log('error');
        }
    }
    request.send();
}

function recogerDatosInfo() {
    datos = document.URL.toString().split("#"); 
    document.getElementById("id").innerHTML=datos[1];
    document.getElementById("nombre").innerHTML=datos[2];
    document.getElementById("location").innerHTML=datos[3];
    document.getElementById("tipo").innerHTML=datos[4];
    document.getElementById("img").src=datos[5];
}

function pokedex() {
    var request = new XMLHttpRequest();
    request.open('GET', `https://pokeapi.co/api/v2/pokemon?limit=10`, true);
    request.onload = function () {
        var data = JSON.parse(this.response);
        if (request.status >= 200 && request.status < 400) {
            console.log(data);
            var p1= data.results[0].name;
            var p2 =data.results[1].name;
            var p3 =data.results[2].name;
            var p4 =data.results[3].name;
            var p5 =data.results[4].name;
            var p6 =data.results[5].name;
            var p7 =data.results[6].name;
            var p8 =data.results[7].name;
            var p9 =data.results[8].name;
            var p10 =data.results[9].name;
            var u1 =data.results[0].url;
            var u2 =data.results[1].url;
            var u3 =data.results[2].url;
            var u4 =data.results[3].url;
            var u5 =data.results[4].url;
            var u6 =data.results[5].url;
            var u7 =data.results[6].url;
            var u8 =data.results[7].url;
            var u9 =data.results[8].url;
            var u10 =data.results[9].url;
            window.location.href = "listaPokemon.html " + "#" + p1 + "#" + p2 + "#" + p3 + "#" + p4 + "#" + p5 + 
            "#" + p6 + "#" + p7 + "#" + p8 + "#" + p9 + "#" + p10 + "#" + u1 + "#" + u2 + "#" + u3 + "#" + u4 + "#" + u5 + "#" + u6
            + "#" + u7 + "#" + u8 + "#" + u9 + "#" + u10; 
            console.log(data);
        } else {
            console.log('error');
        }
    }
    request.send();
}


function recogerDatosLista() {
    datos = document.URL.toString().split("#"); 
    document.getElementById("nombre").innerHTML=datos[1];
    document.getElementById("nombre2").innerHTML= datos[2];
    document.getElementById("nombre3").innerHTML= datos[3];
    document.getElementById("nombre4").innerHTML= datos[4];
    document.getElementById("nombre5").innerHTML= datos[5];
    document.getElementById("nombre6").innerHTML= datos[6];
    document.getElementById("nombre7").innerHTML= datos[7];
    document.getElementById("nombre8").innerHTML= datos[8];
    document.getElementById("nombre9").innerHTML= datos[9];
    document.getElementById("nombre10").innerHTML= datos[10];
    document.getElementById("url").innerHTML= datos[11];
    document.getElementById("url2").innerHTML= datos[12];
    document.getElementById("url3").innerHTML= datos[13];
    document.getElementById("url4").innerHTML= datos[14];
    document.getElementById("url5").innerHTML= datos[15];
    document.getElementById("url6").innerHTML= datos[16];
    document.getElementById("url7").innerHTML= datos[17];
    document.getElementById("url8").innerHTML= datos[18];
    document.getElementById("url9").innerHTML= datos[19];
    document.getElementById("url10").innerHTML= datos[20];
}


