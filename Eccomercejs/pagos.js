const emailInput = document.querySelector('.input_cliente');
const nombreInput = document.querySelector('.nombre');
const apellidoInput = document.querySelector('.apellido');
const direccionInput = document.querySelector('.direccion');
const departamentoInput = document.querySelector('.departamento');
const ciudadInput = document.querySelector('.ciudad');
const guardarCheckbox = document.querySelector('#guardar');
const regionSelect = document.querySelector('#region');
const estadoSelect = document.querySelector('#estado');
const error = document.querySelector('.error');
const pagarButton = document.querySelector('.pagar');

function completar() {
    if (
        emailInput.value === '' ||
        nombreInput.value === '' ||
        apellidoInput.value === '' ||
        direccionInput.value === '' ||
        departamentoInput.value === '' ||
        ciudadInput.value === '' ||
        regionSelect.value === '' ||
        estadoSelect.value === ''
    ) {
        error.textContent = 'Completa todos los campos obligatorios';
    }


} 

pagarButton.addEventListener('click', completar);