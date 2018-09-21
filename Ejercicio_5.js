let radio = prompt("Ingrese el radio de la circunferencia:");

var areaCirculo = (radio) => {
    if (radio <= 0) {
        return -1;
    }
    else {
        let area =   Math.PI * Math.pow(radio, 2);
        return area;
    }
};
