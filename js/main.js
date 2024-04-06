/*CARRUSEL DE IMÁGENES*/

function asignarAnimacion(tarjeta, actual, siguiente){
    tarjeta.style.animation = actual.toUpperCase() + 'to' + siguiente.toUpperCase() + ' 1s linear forwards';
    tarjeta.className = 'tarjeta ' + siguiente.toLowerCase();
}

    var anterior = document.getElementById('anterior');
    var despues = document.getElementById('despues');

    anterior.addEventListener('click', function(){
            const tarjetas = Array.from( document.getElementsByClassName('tarjeta') )
            tarjetas.forEach(function(tarjeta){
                switch (tarjeta.className.toString().substr(8, 1)){
                    case 'a':
                        asignarAnimacion(tarjeta, 'a', 'j');
                        break;
                    case 'b':
                        asignarAnimacion(tarjeta, 'b', 'a');
                        break;
                    case 'c':
                        asignarAnimacion(tarjeta, 'c', 'b');
                        break;
                    case 'd':
                        asignarAnimacion(tarjeta, 'd', 'c');
                        break;
                    case 'e':
                        asignarAnimacion(tarjeta, 'e', 'd');
                        break;
                    case 'f':
                        asignarAnimacion(tarjeta, 'f', 'e');
                        break;
                    case 'g':
                        asignarAnimacion(tarjeta, 'g', 'f');
                        break;
                    case 'h':
                        asignarAnimacion(tarjeta, 'h', 'g');
                        break;
                    case 'i':
                        asignarAnimacion(tarjeta, 'i', 'h');
                        break;
                    case 'j':
                        asignarAnimacion(tarjeta, 'j', 'i');
                        break;

                }
            })
        })

        despues.addEventListener('click', function(){
            const tarjetas = Array.from( document.getElementsByClassName('tarjeta') )
            tarjetas.forEach(function(tarjeta){
                switch (tarjeta.className.toString().substr(8, 1)){
                    case 'a':
                        asignarAnimacion(tarjeta, 'a', 'b');
                        break;
                    case 'b':
                        asignarAnimacion(tarjeta, 'b', 'c');
                        break;
                    case 'c':
                        asignarAnimacion(tarjeta, 'c', 'd');
                        break;
                    case 'd':
                        asignarAnimacion(tarjeta, 'd', 'e');
                        break;
                    case 'e':
                        asignarAnimacion(tarjeta, 'e', 'f');
                        break;
                    case 'f':
                        asignarAnimacion(tarjeta, 'f', 'g');
                        break;
                    case 'g':
                        asignarAnimacion(tarjeta, 'g', 'h');
                        break;
                    case 'h':
                        asignarAnimacion(tarjeta, 'h', 'i');
                        break;
                    case 'i':
                        asignarAnimacion(tarjeta, 'i', 'j');
                        break;
                    case 'j':
                        asignarAnimacion(tarjeta, 'j', 'a');
                        break;
                }
            })
        })

/*GOOGLE MAPS INFORMACION DE CONTACTO*/
function iniciarMap(){
    var coord= {lat:9.8983, lng:-83.6716};

    var map= new google.maps.Map(document.getElementById('map'),{
        zoom:10,
        center:coord
    });
    var marker = new google.maps.Marker({
        position:coord,
        map:map
    });
}





/**************************************************************/
document.addEventListener("DOMContentLoaded", ()=>{

    const formulario = document.getElementById("formulario");

    formulario.addEventListener("submit", (event) =>{

        event.preventDefault()

        const {correo, contrasenna} = obtenerDatosFormulario()
        const esValido= validarContrasenna(contrasenna) && validarCorreo(correo)

        esValido ? manejarExito(): manejarError();


    });

});

const obtenerDatosFormulario=()=>{

    const correo= document.getElementById("correo").value.trim();
    const contrasenna= document.getElementById("contrasenna").value.trim();

    return {correo, contrasenna}

};

const manejarExito=()=>{
    alert("Inicio de sesión exitoso");
    limpiarCamposTexto();
};

const limpiarCamposTexto=()=>{
    const campos = document.querySelectorAll("#formulario input[type='email'], #formulario input[type='password']")

    campos.forEach((campo) => campo.value="");
};

const validarContrasenna= (contrasenna)=>
/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/.test(contrasenna);

const validarCorreo=(correo)=>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);

const manejarError=()=>{
        alert("Inicio de sesión fallido, datos inválidos");
};



document.addEventListener("DOMContentLoaded", ()=>{

    const formulario2 = document.getElementById("formulario2");

    formulario2.addEventListener("submit", (event) =>{

        event.preventDefault()

        const {cedula, nombreCompleto,telefono,correo, contrasenna, } = obtenerDatosFormulario2()
        const esValido= validarContrasenna(contrasenna) && validarCorreo(correo) && validarCedula(cedula) && validarNombreCompleto(nombreCompleto) && validarTelefono(telefono)

        esValido ? manejarExito(): manejarError();
    });
});

const obtenerDatosFormulario2=()=>{

    const correo= document.getElementById("correo").value.trim();
    const contrasenna= document.getElementById("contrasenna").value.trim();
    const cedula= document.getElementById("cedula").value.trim();
    const nombreCompleto= document.getElementById("nombreCompleto").value.trim();
    const fechaNacimiento= document.getElementById("fechaNacimiento").value.trim();
    const telefono= document.getElementById("telefono").value.trim();

    return {correo, contrasenna, cedula, nombreCompleto, fechaNacimiento, telefono}
};

const validarCedula= (cedula)=>
    /^([0-9]{1})-([0-9]{4})-([0-9]{4})$/.test(cedula);

const validarNombreCompleto= (nombreCompleto)=>
    /^[a-zA-Z]+$/.test(nombreCompleto);


const validarTelefono= (telefono)=>
    /^([0-9]{4})-([0-9]{4})$/.test(telefono);

const manejarExito2=()=>{
    alert("Inicio de sesión exitoso");
    limpiarCamposTexto2();
};



const limpiarCamposTexto2=()=>{
    const campos = document.querySelectorAll("#formulario input[type='text'], #formulario input[type='date'],  #formulario input[type='tel'],  #formulario input[type='email'] , #formulario input[type='password']")

    campos.forEach((campo) => campo.value="");
};




