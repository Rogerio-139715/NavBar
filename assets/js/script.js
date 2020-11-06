
window.addEventListener("scroll", function(){

    var header = document.querySelector("header");
    
    header.classList.toggle("sticky", window.scrollY > 0);
});

// EVENTO DE CLICK PARA MENU EM DISPOSITIVOS MENORES

function  menuToggle () {
    let menuArea = document.getElementById('menu-area');

    if(menuArea.style.width == '230px'){
        menuArea.style.width = '0px';
    }else {
        menuArea.style.width = '230px';
    }

}