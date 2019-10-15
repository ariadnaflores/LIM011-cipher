window.cipher = {
  cipher: (fraseParaCifrar, offset) => {
    const fraseEnMayuscula = fraseParaCifrar.toUpperCase();
    const newPosition = [];
    for (let i = 0; i < fraseEnMayuscula.length; i += 1) {
      /* eslint radix:["error","as-needed"] */
      newPosition.push(((fraseEnMayuscula.charCodeAt(i) - 65 + parseInt(offset)) % 26) + 65);
    }
    /* eslint no-console: "error" */
    // console.log(newPosition);
    // newString:almacenará el nuevo string encriptado
    let newString = '';
    // iterando en las posiciones de newLetters: --newPosition
    for (let j = 0; j < newPosition.length; j += 1) {
    // concatenando a newString las letras encriptadas
      newString += String.fromCharCode(newPosition[j]);
    }
    // retornando cadena de texto cifrada
    return newString;
  },

  decipher: (string, offset) => {
    const palabraEnMayuscula = string.toUpperCase();
    const newPosition = [];
    // console.log("rfrfrrfrfrf");
    for (let i = 0; i < palabraEnMayuscula.length; i += 1) {
      newPosition.push(((palabraEnMayuscula.charCodeAt(i) + 65 - parseInt(offset)) % 26) + 65);
    }
    // console.log(newPosition);
    // newString:almacenará el nuevo string encriptado
    let newString = '';
    // iterando en las posiciones de newLetters: --newPosition
    for (let j = 0; j < newPosition.length; j += 1) {
      // concatenando a newString las letras encriptadas
      newString += String.fromCharCode(newPosition[j]);
    }
    // retornando cadena de texto descifrada
    return newString;
  },
};
