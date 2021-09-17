function calcula() {
    let carta1 = Number(document.getElementById("carta1").value)
    let carta2 = Number(document.getElementById("carta2").value)
    let carta3 = Number(document.getElementById("carta3").value)
    let carta4 = Number(document.getElementById("carta4").value)
    let carta5 = Number(document.getElementById("carta5").value)

    let resultado = (carta1*3000) + (carta2*100) + (carta3*100) + (carta4*300) + (carta5*1200)
    document.getElementById("resultado").innerHTML = "$" + resultado 
}   