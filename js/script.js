let navBarraSection =  document.querySelector('.nav__barra:first-child');
let navBarraSobreMi =  document.querySelector('.nav__barra:nth-child(2)');
let navBarraSkills =  document.querySelector('.nav__barra:nth-child(3)');
let navBarraCurriculum =  document.querySelector('.nav__barra:nth-child(4)');
let navBarraPortfolio =  document.querySelector('.nav__barra:nth-child(5)');
let navBarraContacto =  document.querySelector('.nav__barra:last-child');
let headerBoton = document.querySelector('.header__boton');
let headerBoton2 = document.querySelector('.header__boton2');

//FORMULARIOS
const contactoFlex =  document.querySelector('.contacto__flex');
const contactoName =  document.querySelector('.contacto__name');
const contactoPhone =  document.querySelector('.contacto__phone');
const contactoCorreo =  document.querySelector('.contacto__correo');
const contactoIssue =  document.querySelector('.contacto__issue');
const contactoDescription =  document.querySelector('.contacto__description');

const contactoBoton = document.querySelector('.contacto__boton ');
console.log(contactoBoton);


const enviarCorreo ={
    nombre: '',
    telefono: '',
    email: '',
    asunto: '',
}


contactoName.addEventListener('blur',validacionFormulario);
contactoPhone.addEventListener('blur',validacionFormulario);
contactoCorreo.addEventListener('blur',validacionFormulario);
contactoIssue.addEventListener('blur',validacionFormulario);
// contactoDescription.addEventListener('blur',validacionFormulario);

headerBoton.addEventListener('click',aparecer);
headerBoton2.addEventListener('click',desaparecer);


window.addEventListener('resize',tamanio);
window.addEventListener('DOMContentLoaded',tamanio);

contactoFlex.addEventListener('submit',enviarDatos);



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


function validacionFormulario(e){
    const name = e.target.name;
    if(e.target.value.trim().length < 1){
        mostrarAlerta(`${name} esta vacio`,e.target.parentElement);
        enviarCorreo[e.target.nombre] ='';
        comprobarEmail();
        return;
    }

    if(e.target.name === 'email' && !validarEmail(e.target.value)){
        mostrarAlerta('el correo no es valido',e.target.parentElement);
        enviarCorreo[e.target.name] ='';
        comprobarEmail();
        return;
    }

    limpiarAlerta(e.target.parentElement);

    enviarCorreo[e.target.name] = e.target.value.trim().toLowerCase();

    comprobarEmail();

}

function mostrarAlerta(mensaje,referencia){
    // console.log(mensaje);

    limpiarAlerta(referencia);

    const alerta = document.createElement('p');
    alerta.textContent = mensaje;
    alerta.classList.add('alerta');
    contactoFlex.appendChild(alerta);

    referencia.appendChild(alerta);

    setInterval(()=>{
        alerta.remove();
    },3000)
}

function enviarDatos(e){
    e.preventDefault();

    const exito = document.createElement('p');
    exito.textContent = 'informacion enviada';
    exito.classList.add('exito');
    contactoFlex.appendChild(exito);
    contactoBoton.style.display ="block";

    setInterval(()=>{
        contactoBoton.style.display ="none";
        },0);

    setInterval(()=>{
    exito.remove();
    },3000);

    contactoFlex.reset();
    
    // console.log('informacion enviada');
}

function limpiarAlerta(ref){
    const alerta = ref.querySelector('.alerta');


    if(alerta){
        alerta.remove();
    }

}

function validarEmail(email){
    const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ ;
    const resultado = regex.test(email);
    return resultado;
}

function comprobarEmail(){
    if(Object.values(enviarCorreo).includes('')){
        contactoBoton.classList.remove('opacity');
        contactoBoton.disabled = true;
        return;
    }

    contactoBoton.classList.add('opacity');
    contactoBoton.disabled = false;
}