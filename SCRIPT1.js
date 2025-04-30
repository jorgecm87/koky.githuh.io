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
    vtexto3[20].innerHTML="elemento ultimo h2 cambiado por TagDOM1";
    vtexto3[20].style.color="magenta";
    // se coloca el indice 20 por ser el 21 elemento h2 de la pag web index.html

} 




