
var estadolicuadora= "apagada";
var sonidolicuadora =document.getElementById("blender-sonido");
var botonlicuadora =document.getElementById("blender-button/sonido");
var licuadora = document.getElementById("blender");

function controlarlicuadora(){
    if ( estadolicuadora == "apagada"){
        estadolicuadora ="encerdido";
        hacerBrrBrr();
        licuadora.classList.add("active");
        console.log("me prendiste");

    } else {
        estadolicuadora = "apagada"
        hacerBrrBrr();
        licuadora.classList.remove("active")
        console.log("me apagaste");

    }
}
function hacerBrrBrr(){
    if (sonidolicuadora.pause ){
      botonlicuadora.play();
      sonidolicuadora.play();

    } else {
        botonlicuadora.play();
        sonidolicuadora.pause();
        sonidolicuadora.currentime =1;
        



    }
}


