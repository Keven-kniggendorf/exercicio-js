function avaliar() {
    var br = document.querySelector('input#nasc')
    var res = document.querySelector('div#res')
    var pais = (nasc.value)
    res.innerHTML = `<p>Você veio do pais:<strong> ${pais}</strong></p>`
    if(pais == 'Brasil'){
        res.innerHTML += '<p>Você possivelmente é brasileiro</p>'
    }else{
        res.innerHTML += '<p>Você possivelmente é estrangeiro.</p>'
    }
}