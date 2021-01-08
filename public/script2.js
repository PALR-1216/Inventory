var size;
var colors;
var cantidad;
var button = document.getElementById("submit");

function setup() {
  LoadData();
}

function SubmitData() {
  size = document.getElementById("sizes").value;
  colors = document.getElementById("colors").value;
  cantidad = document.getElementById("cantidad").value;

  if (!cantidad) {
    return false;
  } else if (cantidad > 50) {
    alert("please enter a value from 0 - 50");
    return false;
  } else {
    loadJSON("add/" + size + "/" + colors + "/" + cantidad, AddData);
  }

  return true;
}

function AddData(data) {
  console.log(data);
  alert('data added');
}

function LoadData() {
  loadJSON("api", GotData);
}

function GotData(data) {
  // console.log(data);
  // console.log("Data loaded");
}

//   function SubmitData() {
//     if (!cantidad) {
//       return false;
//     } else if (cantidad > 50) {
//       alert("please enter values from 0-50");
//       return false;
//     } else {
//       alert("Data added");
//       // console.log(size);
//       // console.log(colors);
//       // console.log(cantidad);
//       loadJSON("add/" + size + "/" + colors + "/" + cantidad, AddedData);
//       function AddedData(data) {
//         console.log(data);
//       }
//       return true;
//     }
//   }
// }
