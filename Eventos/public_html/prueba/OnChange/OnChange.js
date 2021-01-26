addEventListener('load',inicio,false);

var ciudades=new Array();
ciudades[0]=new Array('Barcelona','Madrid','Sevilla');
ciudades[1]=new Array('Paris','Toulouse','Marsella','Lyon');
ciudades[2]=new Array('Londres','Manchester','Liverpool','Oxford','Cambridge');
ciudades[3]=new Array('Roma','Venecia');

function inicio(){
    
    var selec1=document.getElementById("pais");
    selec1.addEventListener("change",function(){
           
        var selec2=document.getElementById("sel");
            //Eliminamos todos los valores del segundo select primero
            var aux=selec2.children.length;
            for(var j=0;j<aux;j++){
                selec2.removeChild(selec2.lastChild);
            }
            //Añadimos todos sus valores
            for(var i=0;i<ciudades[this.value].length;i++){
                var op=document.createElement('option');
                var te=document.createTextNode(ciudades[this.value][i]);
                op.appendChild(te);
                selec2.appendChild(op);
            }
        }
    ,false);
}