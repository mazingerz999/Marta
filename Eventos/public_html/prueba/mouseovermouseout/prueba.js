/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



addEventListener('load', inicio, false);

function inicio() {
    var cajas = document.querySelectorAll("input");
   
    for (var i = 0; i < cajas.length; i++) {
        
        cajas[i].addEventListener('mouseover', function () {
     
        this.style.fontSize = "20px";

    }, false);
    
        cajas[i].addEventListener('mouseout', function () {

        
        this.style.fontSize = "14px";

    }, false);

    }

}