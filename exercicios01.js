function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('img1')
var data = new Date()
//var hora = data.getHours()
var hora = 22
msg.innerHTML = `Agora são ${hora} horas.`
if(hora >= 0 && hora < 12){
    //Bom Dia!
    img.src = 'foto manha.jpg'
    document.body.style.background = 'linear-gradient(0deg,#fff389 0%, #ffeb3b 100%)'
    
}else if (hora >= 12 && hora < 18){
    //Boa Tarde!
    img.src = 'foto tarde.jpg'
    document.body.style.background = 'linear-gradient(0deg,#ffb64c 0%,#ff9800 100%)'
}else {
    //Boa noite!
    img.src = 'foto noite.jpg'
    document.body.style.background = ' linear-gradient(0deg,#8a4af3 0%, #452579 100%)'
}
}