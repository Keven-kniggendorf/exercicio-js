function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number (fano.value) > ano){
        window.alert('[ERRO] verifique suas informações apresentadas e atualize a página!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number (fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
     if (fsex[0].checked){
         var gênero = 'Homem'
         if (idade >=0 && idade < 10){
            //criança
            img.setAttribute('src', 'criança.jpg')
         }else if(idade < 21){
            //jovem
            img.setAttribute('src', 'homem.jpg')
         }else if(idade < 50){
            //adulto
            img.setAttribute('src', 'homem.jpg')
         } else {
            //idoso
            img.setAttribute('src', 'idoso.jpg')
         }
    }else if(fsex[1].checked) {
         gênero = 'Mulher'
         if (idade >=0 && idade < 10){
            //criança
            img.setAttribute('src', 'menina.jpg')
         }else if(idade < 21){
            //jovem
            img.setAttribute('src', 'mulher.jpg')
         }else if(idade < 50){
            //adulto
            img.setAttribute('src', 'mulher.jpg')
         } else {
            //idoso
            img.setAttribute('src', 'idosa.jpg')
         }
        }
        res.getElementsByClassName.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
    
} 