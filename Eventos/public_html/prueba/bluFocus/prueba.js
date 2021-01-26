/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


addEventListener('load', inicio, false);

function inicio() {
    var cajas = document.querySelectorAll("input");
   
    for (var i = 0; i < cajas.length; i++) {
        
        cajas[i].addEventListener('blur', function () {

        this.style.backgroundColor = 'white';
        

    }, false);
    
    cajas[i].addEventListener('focus', function () {

       
        this.style.backgroundColor = 'yellow';

    }, false);
    }

}
