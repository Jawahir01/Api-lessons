/*
Getting The Data Onto The Page by Using 
innerHTML
*/

const baseURL = "https://ci-swapi.herokuapp.com/api/";

function getData(type, cb) {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };

    xhr.open("GET", baseURL + type + "/");
    xhr.send();
}
/*                  // result >> [object Object]
function writeToDocument(type) {
    getData(type, function(data) {
        document.getElementById("data").innerHTML = data;
    });
}
*/


/*
Unpacking Our Data Onto The DOM: it allows us to present our data to our users.

*/
function writeToDocument(type) {
    var el = document.getElementById("data");     //to make sure only clicked item would apear
    el.innerHTML = "";

    getData(type, function(data) {
        data = data.results;

        data.forEach(function(item) {
            el.innerHTML +=  item.name + "<br>";    // add <br> for each item
        });
    });
}
/*
*/