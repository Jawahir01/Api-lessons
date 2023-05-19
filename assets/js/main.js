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


function writeToDocument(type) {
    var el = document.getElementById("data");     //to make sure only clicked item would apear
    el.innerHTML = "";

    getData(type, function(data) {
        data = data.results;

        data.forEach(function(item) {                   // add <br> for each item
            el.innerHTML +=  item.name + "<br>";        // but the film will undefined beacuse it does not have a name proberty
        });
    });
}*/



// we will use Object.keys() to Create an array comprised of the keys in an object
//The function inside this is going to iterate over each key and push it to our tableHeaders array.

function getTableHeaders(obj) {
    var tableHeaders = [];

    Object.keys(obj).forEach(function(key) {
        tableHeaders.push(`<td>${key}</td>`)
    });

    return `<tr>${tableHeaders}</tr>`;
}

/*

function writeToDocument(type) {
    var el = document.getElementById("data");
    el.innerHTML = "";

    getData(type, function(data) {
        data = data.results;
var tableHeaders = getTableHeaders(data[0]);

        data.forEach(function(item) {
            // el.innerHTML += "<p>" + item.name + "</p>";
        });

        el.innerHTML = `<table>${tableHeaders}</table>`;
    });
}
*/

// to display everything neatly we will truncate the text using the substring method

function writeToDocument(type) {
    var tableRows = [];
    var el = document.getElementById("data");

    getData(type, function(data) {
        data = data.results;
        var tableHeaders = getTableHeaders(data[0]);

        data.forEach(function(item) {
            var dataRow = [];
            Object.keys(item).forEach(function(key) {
                var rowData = item[key].toString();
                var truncatedData = rowData.substring(0, 15);
                dataRow.push(`<td>${truncatedData}</td>`);
            });
            tableRows.push(`<tr>${dataRow}</tr>`)
        });

        el.innerHTML = `<table>${tableHeaders}${tableRows}</table>`;
    });
}

// To be continued in with index2.html and main2.js
