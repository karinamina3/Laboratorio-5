var palindromo = (cadena) => {
    let cadenaAux = cadena.split("");
    cadena = cadena.split("");
    cadena.reverse();
    if (cadena.join("") == cadenaAux.join("")) {
        console.log('La palabra es palíndromo');
    }
    else {
        console.log('La palabra no es palíndromo');
    }
};