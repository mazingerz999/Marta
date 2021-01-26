/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


  addEventListener('load', inicio, false);

function inicio() {

crearTabla();   
    
   
   var cajas = document.querySelectorAll("input");
   
    for (var i = 0; i < cajas.length; i++) {
        
        cajas[i].addEventListener('click', function () {
           

    }, false);

}
}

 function crearTabla() {
  var myTableDiv = document.getElementById("zonadibujo");
   let filas = parseInt(prompt("Cuantas filas"));
   let columnas = parseInt(prompt("Cuantas columnas"));
   let borde = prompt("Que borde tendra");
   
    
  var table = document.createElement('TABLE');
  table.border = borde;

  var tableBody = document.createElement('TBODY');
  table.appendChild(tableBody);

  for (var i = 0; i < filas; i++) {
    var tr = document.createElement('TR');
    tableBody.appendChild(tr);

    for (var j = 0; j < columnas; j++) {
      var td = document.createElement('TD');

      tr.appendChild(td);
      
      var color=document.createElement("input");
      color.type="color";
      color.style="5px";
      color.height="5px";
      td.appendChild(color);
    }
  }
  myTableDiv.appendChild(table);
}
    