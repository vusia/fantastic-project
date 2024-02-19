var a = parseInt(window.prompt("La nuit - temperature : "))
var b = parseInt(window.prompt("le jour - temperature :"))
var result = (a + b)/2

if (result < 0) {
    alert("Il fait extrêmement froid !")
} else if (result > 0 && result <= 10) {
    alert("Il fait froid.")
} else if (result > 10 && result <= 19) {
    alert("Il fait bon.")
} else if (result > 19 && result <= 29) {
    alert("Il fait chaud.")
} else if (result > 29 && result <= 39) {
    alert("Il fait trop chaud.")
} else if (result > 39) {
    alert("la temperature est insuportable !")
} 