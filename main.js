alert("Bienvenido")
for(let i = 0; i < 5; i+=1) {
    let primerParcial = Number(prompt("Ingresar la nota del primer parcial"))
    let segundoParcial = Number(prompt("Ingrese la nota del segundo parcial"))
    let tercerParcial = Number(prompt("Ingrese la nota del tercer parcial"))
    let nombre = prompt("Ingrese nombre del alumno")

    function calcular() {
        let final = (primerParcial + segundoParcial + tercerParcial) /3
        return final
    }
    let final = calcular(primerParcial, segundoParcial, tercerParcial)
    console.log(nombre + " tiene una nota final de " + final)
    alert(nombre + " tiene una nota final de " + final)


    if (final >=6){
        console.log(nombre + " aprobó el curso")
    } else {
        console.log(nombre + " no aprobó el curso y debe recursarlo")
    }
}

