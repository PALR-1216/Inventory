const express = require("express");
const app = express();
const fs = require("fs");
const data = require("./public/data.json");

app.use(express.static("public"));

app.get("/api", (req, res) => {
  res.send(data);
});

app.get("/add/:size/:colors/:cantidad", AddData);

function AddData(req, res) {
  var myData = req.params;
  var size = myData.size;
  var colors = myData.colors;
  var cantidad = Number(myData.cantidad);

  var objecto = {
    size: size,
    colors: colors,
    cantidad: cantidad
  };
  res.send(data);
  data.push(objecto);
  fs.writeFile("./public/data.json", JSON.stringify(data, null, 2), (err) => {
    if (err) throw err;
    console.log("data added");
  });
}



app.listen(3000, () => {
  console.log("running");
});

// node index.js
