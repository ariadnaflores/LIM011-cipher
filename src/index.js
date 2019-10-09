const btnProof = document.getElementById('btnProof');
btnProof.addEventListener('click', () => {
onewindow.classList.add('hide');
secondwindow.classList.remove('hide');
});
const btnCifrar = document.getElementById('btnCifrar');
const boxMessage= document.getElementById('boxMessage');
const boxMessageTwo= document.getElementById('boxMessageTwo');
const offset= document.getElementById('offset');
btnCifrar.addEventListener('click', () => {
    console.log(boxMessage.value);
    console.log(offset.value);
    boxMessageTwo.innerHTML= cipher.cipher(boxMessage.value,offset.value);
});
const btnDescifrar = document.getElementById('btnDescifrar');;
btnDescifrar.addEventListener('click', () => {
    console.log(boxMessage.value);
    console.log(offset.value);
    boxMessageTwo.innerHTML= cipher.decipher(boxMessage.value,offset.value);
});
const btnLimpiar = document.getElementById('btnLimpiar');
btnLimpiar.addEventListener('click', () => {
    boxMessage.value="";
    boxMessageTwo.innerHTML="";
});
