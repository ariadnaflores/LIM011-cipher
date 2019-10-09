window.cipher = {
  // Acá escribe tu código.
cipher :(string,offset) =>{
   var string= string.toUpperCase()   
   var newPosition = []; 
for (var i = 0; i < string.length; i++) {
   newPosition.push((string.charCodeAt(i) - 65 + parseInt(offset)) % 26 + 65);
  }
  console.log(newPosition)
  // newString:almacenará el nuevo string encriptado
  var newString = '';
  // iterando en las posiciones de newLetters: --newPosition
for (var j = 0; j < newPosition.length; j++) {
    // concatenando a newString las letras encriptadas
  newString += String.fromCharCode(newPosition[j]);
  }
   // retornando cadena de texto cifrada
  return newString;
  },

  decipher :(string,offset) =>{
    var string= string.toUpperCase()   
    var newPosition = []; 
  for (var i = 0; i < string.length; i++) {
    newPosition.push((string.charCodeAt(i) + 65 - parseInt(offset)) % 26 + 65);
   }
   console.log(newPosition)
   // newString:almacenará el nuevo string encriptado
   var newString = '';
   // iterando en las posiciones de newLetters: --newPosition
  for (var j = 0; j < newPosition.length; j++) {
     // concatenando a newString las letras encriptadas
   newString += String.fromCharCode(newPosition[j]);
   }
    // retornando cadena de texto descifrada
   return newString
   }
};



