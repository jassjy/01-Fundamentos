function convertir(valor, origen, destino) {

    // Validar valor
    if (typeof valor !== "number" || isNaN(valor)) {
        return "Error: el valor debe ser un número válido.";
    }

    // Normalizar unidades
    origen = origen.toLowerCase();
    destino = destino.toLowerCase();

    const temperatura = ["c", "f", "k"];
    const longitud = ["m", "cm", "km"];
    const peso = ["kg", "g", "lb"];

    const unidadesValidas = [...temperatura, ...longitud, ...peso];

    // Validar unidades
    if (!unidadesValidas.includes(origen) || !unidadesValidas.includes(destino)) {
        return "Error: unidad no válida.";
    }

    // Validar que sean del mismo tipo
    const mismoTipo =
        (temperatura.includes(origen) && temperatura.includes(destino)) ||
        (longitud.includes(origen) && longitud.includes(destino)) ||
        (peso.includes(origen) && peso.includes(destino));

    if (!mismoTipo) {
        return "Error: no se pueden convertir unidades de diferentes categorías.";
    }

    let resultado;

    // Temperatura
    if (origen === "c" && destino === "f") resultado = (valor * 9 / 5) + 32;
    else if (origen === "c" && destino === "k") resultado = valor + 273.15;
    else if (origen === "f" && destino === "c") resultado = (valor - 32) * 5 / 9;
    else if (origen === "f" && destino === "k") resultado = (valor - 32) * 5 / 9 + 273.15;
    else if (origen === "k" && destino === "c") resultado = valor - 273.15;
    else if (origen === "k" && destino === "f") resultado = (valor - 273.15) * 9 / 5 + 32;

    // Longitud
    else if (origen === "m" && destino === "cm") resultado = valor * 100;
    else if (origen === "m" && destino === "km") resultado = valor / 1000;
    else if (origen === "cm" && destino === "m") resultado = valor / 100;
    else if (origen === "cm" && destino === "km") resultado = valor / 100000;
    else if (origen === "km" && destino === "m") resultado = valor * 1000;
    else if (origen === "km" && destino === "cm") resultado = valor * 100000;

    // Peso
    else if (origen === "kg" && destino === "g") resultado = valor * 1000;
    else if (origen === "kg" && destino === "lb") resultado = valor * 2.20462;
    else if (origen === "g" && destino === "kg") resultado = valor / 1000;
    else if (origen === "g" && destino === "lb") resultado = valor / 453.592;
    else if (origen === "lb" && destino === "kg") resultado = valor / 2.20462;
    else if (origen === "lb" && destino === "g") resultado = valor * 453.592;

    // Si las unidades son iguales
    if (resultado === undefined && origen === destino) {
        resultado = valor;
    }

    // Validar resultado
    if (resultado === undefined) {
        return "Error: conversión no soportada.";
    }

    return `${valor} ${origen} = ${resultado.toFixed(2)} ${destino}`;
}


// Ejemplos de uso
console.log(convertir(25, "C", "F"));
console.log(convertir(1000, "g", "kg"));
console.log(convertir(5, "km", "m"));
console.log(convertir("abc", "kg", "g"));
console.log(convertir(10, "kg", "m"));