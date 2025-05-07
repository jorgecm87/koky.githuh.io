let VarGlobal1="texto de variable global"



function FCambioColor(){
    // vtexto1 va  atener el control de la etiqueta cuyo ID=ejmDOM1 es decir del p
    
    let vtexto1 =document.getElementById("ejmDOM1");
     vtexto1.textContent= "texto cambiado por funcion FCambioColor"; // funcion para cambiar de color el texto
     vtexto1.style.color="red"; // color de la letra
     vtexto1.insertAdjacentHTML("beforeend",
                                  "<br>este texto es adicional <br>");
     vtexto1.style.backgroundColor="green"; // fondo de la letra

     vtexto1.insertAdjacentHTML("beforeend", VarGlobal1)
     // la variable global se puede utilizar dentro de cuaqluier funcion
       

}
vtexto1="texto fuera de funcion";//vtexto1 no es la misma variable que esta dentro de la funcion , una nueva variable aunque el nombre sea similar
console.log(vtexto1);
//console.log(vartemporal); // var temporal no esta definido afuera de la funcion

function FCambioClase() {
    let vtexto2 =document.getElementsByClassName("classDOM1");
    vtexto2[0] =innerHTML="Elemento [1] del arrreglo de clase classDMO1";
    console.log( "tamaño del array=", vtexto2.length);
    // se coloca el indice 0 por ser el primero elemento d ela clase classDOM1


}

function FCambioClase1(){
        let vtexto2 =document.getElementsByClassName("classDOM1");
        vtexto2[1] .innerText="Elemento [1] del arrreglo \n de clase classDMO1"; // el indice 1 es el 2do elemento
        vtexto2[1] .style.color="red";
        console.log( "tamaño del array=", vtexto2.length);


}
function FCambioTag1(){
    let vtexto3=document.getElementsByTagName("h2");
    vtexto3[0].innerHTML="elemento 1er h2 cambiado por TagDOM1";
    vtexto3[0].style.color="magenta";
    vtexto3[21].innerHTML="elemento ultimo h2 cambiado por TagDOM1";
    vtexto3[21].style.color="magenta";
    // se coloca el indice 21 por ser el 22 elemento h2 de la pag web index.html
    console.log("tamaño del array=",vtexto3.length);
    vtexto3[21].insertAdjacentHTML("beforeEnd", "<br>tamaño de h2 ="+ vtexto3.length);

let totalh2=vtexto3.length;
    console.log("Valor de totalh2=",totalh2);
    console.log("tipo de variable totalh2=", typeof totalh2);

} 

window.vTexto1="";

function FAgregarTextoPermanente()

{
    let textoadicional ="\ntexto adicional para concatenar";
    vTexto1.innerHTML=vTexto1.innerHTML + textoadicional;
    console.log("tipo de variable de vtxto1=",typeof vTexto1);
   console.log(vTexto1);
    



}
 function FcrearH1()
 {
    var elemento =document.getElementById("idCrearH1");
    var nuevoH1 =document.createElement("H1");
    var texto = document.createTextNode("texto colocado dinamicamente");
    nuevoH1.appendChild(texto);
    elemento.appendChild(nuevoH1);
 }

 function FCapturarNombre(){

    const vTexto1 = document.getElementById("humberto");
    const vTexto2 = document.querySelectorAll("input.datospersonales");
    const vTexto3 = document.getElementById("clave");

   // usar input para clases relacioandas a cajas de texto, etc
    vTexto1.style.color="blue";
    
    var valor1 =vTexto1.value; // value obtiene el contenido de la caja de texto nombre
    var valor2 =""; //tipo string 
    vTexto3.value=valor1; // copia el texto1 como clave
    
  
    //foreach recorre todo el contenido del array de la clase datosPersonales
    vTexto2.forEach(input => {
        valor2 =valor2 +  `${input.name}: ${input.value} ${input.id} \n`;  // alt+96 
        input.style.border="2px solid orange" // da color al borde 
      //para comillas tipotexto permiten colocar variables del form y convertirlas a texto mediante $
      });
      vTexto2[1].style.border="2px solid blue" // dar color al borde del texto nombrado en este caso 2

    document.getElementById("observacion").value = valor2;
    console.log('El valor del nombre es:', valor1);
}
function FUsoFor1()
{
  const vTextoClass = document.getElementsByClassName("classFOR1");
  var vTextoTotal="";
  // como length=4 --> ira desde 0 hasta 3
  for(let i=0 ; i< vTextoClass.length ; i++ )
  {
    vTextoClass[i].style.border ="2px solid red" ;
    vTextoTotal=vTextoTotal + vTextoClass[i].innerText+'-';

  } // fin de for
  var nuevoH1 =document.createElement("h1");
  var texto = document.createTextNode(vTextoTotal);
  nuevoH1.appendChild(texto);
  vTextoClass[3].appendChild(nuevoH1);
  
}  // fin de function

function FEliminarConcat()
{
  const vTextoClass = document.getElementsByClassName("classFOR1");
  let rpta =prompt("Estas seguro de eliminar el texto concatenado?(S/N)",'');
  if (rpta=="S" || rpta=="s")  //  doble || significa o
    { vTextoClass[3].remove();  // eliminar la class de posicion [3]
      alert("CONCATENCION ELMINADA");
    }  
  else
    { if(rpta=="N" || rpta=="n")
      { alert("NO SE elimnará");
      }
      else
      { alert("OPCION INCORRECTA-INgresa nuevamente");
      }
    }
  //removeChild funciona cuando un nodo(class, id, etx) esta dentro de otro
}
