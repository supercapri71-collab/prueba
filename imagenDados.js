let puntos = 0;
let intento = 5;

jugar = function () {
    let resultado;
    resultado = lanzarDado();
    mostrarCara(resultado);
    modificaPuntos(resultado);
    modificaIntento();
}

lanzarDado = function () {
    let aleatorio;
    let aleatorioMultiplicado;
    let aleatorioEntero;
    let valorDado;
    aleatorio = Math.random();
    aleatorioMultiplicado = aleatorio * 6;
    aleatorioEntero = parseInt(aleatorioMultiplicado);
    valorDado = aleatorioEntero + 1;
    return valorDado;
}
mostrarCara = function (numero) {
    if (numero == 1) { cambiarImagen("imgDado", "dados1.png"); }
    else if (numero == 2) { cambiarImagen("imgDado", "dados2.png"); }
    else if (numero == 3) { cambiarImagen("imgDado", "dados3.png"); }
    else if (numero == 4) { cambiarImagen("imgDado", "dados4.png"); }
    else if (numero == 5) { cambiarImagen("imgDado", "dados5.png"); }
    else if (numero == 6) { cambiarImagen("imgDado", "dados6.png"); }
}

modificaPuntos = function (numero) {
    puntos = puntos + numero;
    cambiarTexto("lblPuntos", puntos);
}
modificaIntento = function () {
    intento = intento - 1;
    cambiarTexto("lblIntento", intento);
    if (intento <= 0 || puntos > 20) {
        limpiar();
        estaResultado();
    }
}

estaResultado = function () {
    if (puntos > 20) {
        cambiarTexto("lblResu", "Ganador");
    }
    else {
        cambiarTexto("lblResu", "GAME OVER NO SUPERO LOS 20 PUNTOS");
    }

}
limpiar = function () {
    puntos = 0;
    intento = 5;
    cambiarTexto("lblPuntos",puntos);
    cambiarTexto("lblIntento",intento);
    cambiarTexto("lblResu"," ");
    cambiarImagen("imgDado","");
}
