
//Funcion para el boton del menu
function myMenu() {
    document.getElementById("menu_desp").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.botonMenu')) {

    var menus = document.getElementsByClassName("menu-content");
    var i;
    for (i = 0; i < menus.length; i++) {
      var openMenu = menus[i];
      if (openMenu.classList.contains('show')) {
        openMenu.classList.remove('show');
      }
    }
  }
}

//Funcion para el footer (Secciones aparecen y desaparencen ssegun se pinchen)



//Ocultar la seccion del footer una vez abierta
