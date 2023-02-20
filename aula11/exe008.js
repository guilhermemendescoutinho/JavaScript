
function Calcular(){
    var velocidade = window.document.getElementById('vel')
    var resultado = window.document.getElementById('res')
    var vel = Number(velocidade.value)
    resultado.innerText = `Sua velocidade é ${vel}`

    if(vel > 80){
        resultado.innerText = `Você ultrapassou a velocidade máxima permitida de 80 Km/h. Você será multado`
    }

}
