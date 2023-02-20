function Click(){
    var pais = window.document.getElementById('pais')
    var nação = (pais.value)
    var nacionalidade = window.document.getElementById('nacio')
    nacionalidade.innerText = `Você nasceu no ${nação}`
    if(nação != 'Brasil')
        var estrangeiro = window.document.getElementById('estra')
        estrangeiro.innerText = 'Você é estrangeiro'
        
        
}