var cols = [];

window.addEventListener("load", LoadTable);

window.setInterval(LoadTable, 3000);

function setup() {
  loadData();
}

function loadData() {
  loadJSON("api", mydata);
}

function mydata(data) {
  console.log(data);
  // console.log("got Data");
}

async function LoadTable() {
  GetData();
}

function GetData() {
  fetch("data.json")
    .then((res) => res.json())
    .then((data) => {
      UpdateTable(data);
      // console.log(data);
    });
}

function UpdateTable(data) {
  for (var i = 0; i < data.length; i++) {
    for (var key in data[i]) {
      if (cols.indexOf(key) === -1) {
        // console.log(key);
        cols.push(key);
      }
    }
  }

  var table = document.createElement("table");
  var tr = table.insertRow(-1);

  for (var j = 0; j < cols.length; j++) {
    var th = document.createElement("th");
    th.innerHTML = cols[j];
    tr.appendChild(th);
  }

  for (var t = 0; t < data.length; t++) {
    tr = table.insertRow(-1);

    for (var a = 0; a < cols.length; a++) {
      var tabCell = tr.insertCell(-1);
      tabCell.innerHTML = data[t][cols[a]];
    }
  }

  var divContainer = document.getElementById("showData");
  divContainer.innerHTML = "";
  divContainer.appendChild(table);
}
