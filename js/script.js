let navBarraSection =  document.querySelector('.nav__barra:first-child');
let navBarraSobreMi =  document.querySelector('.nav__barra:nth-child(2)');
let navBarraSkills =  document.querySelector('.nav__barra:nth-child(3)');
let navBarraCurriculum =  document.querySelector('.nav__barra:nth-child(4)');
let navBarraPortfolio =  document.querySelector('.nav__barra:nth-child(5)');
let navBarraContacto =  document.querySelector('.nav__barra:last-child');
let headerBoton = document.querySelector('.header__boton');
let headerBoton2 = document.querySelector('.header__boton2');

headerBoton.addEventListener('click',aparecer);
headerBoton2.addEventListener('click',desaparecer);


window.addEventListener('resize',tamanio);
window.addEventListener('DOMContentLoaded',tamanio);

const screen ={
    small: 390,
    medium: 768,
    large: 990
}

function tamanio(){
    if(window.innerWidth >= screen.medium){
        navBarraSection.style.display="block";
        navBarraSobreMi.style.display="block";
        navBarraSkills.style.display="block";
        navBarraCurriculum.style.display="block";
        navBarraPortfolio.style.display="block";
        navBarraContacto.style.display="block";
        headerBoton.style.display="none";
        headerBoton2.style.display="block";
        return;
    }
}

function aparecer(){
    navBarraSection.style.display="block";
    navBarraSobreMi.style.display="block";
    navBarraSkills.style.display="block";
    navBarraCurriculum.style.display="block";
    navBarraPortfolio.style.display="block";
    navBarraContacto.style.display="block";
    headerBoton.style.display="none";
    headerBoton2.style.display="block";
}

function desaparecer(){
    navBarraSection.style.display="none";
    navBarraSobreMi.style.display="none";
    navBarraSkills.style.display="none";
    navBarraCurriculum.style.display="none";
    navBarraPortfolio.style.display="none";
    navBarraContacto.style.display="none";
    headerBoton.style.display="block";
    headerBoton2.style.display="none";
    tamanio();
}