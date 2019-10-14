const botonPrueba = document.getElementById('btnPrueba');
const seccionUno = document.getElementById('primera-ventana');
const seccionDos = document.getElementById('segunda-ventana');
botonPrueba.addEventListener('click', () => {
  seccionUno.classList.add('hide');
  seccionDos.classList.remove('hide');
});
const btnCifrar = document.getElementById('btnCifrar');
const cajaMensaje = document.getElementById('caja-mensaje');
const cajaResultado = document.getElementById('caja-resultado');
const offset = document.getElementById('offset');
btnCifrar.addEventListener('click', () => {
  // console.log(cajaMensaje.value);
  // console.log(offset.value);
  cajaResultado.innerHTML = window.cipher.cipher(cajaMensaje.value, offset.value);
});
const btnDescifrar = document.getElementById('btnDescifrar');
btnDescifrar.addEventListener('click', () => {
  // console.log(cajaMensaje.value);
  // console.log(offset.value);
  cajaResultado.innerHTML = window.cipher.decipher(cajaMensaje.value, offset.value);
});
const btnLimpiar = document.getElementById('btnLimpiar');
btnLimpiar.addEventListener('click', () => {
  cajaMensaje.value = '';
  cajaResultado.innerHTML = '';
});
