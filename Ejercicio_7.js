var anioBisiesto = (annio) => {
    if ((annio % 4 == 0) && (!(annio % 100 == 0) || (annio % 400))) {
        return "Es bisiesto";
    } else {
        return "No es bisiesto";
    }
}