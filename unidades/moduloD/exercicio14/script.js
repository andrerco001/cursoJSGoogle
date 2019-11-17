function carregar(){
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('img');
    var data = new Date();
    var hora = data.getHours();
    var minutos = data.getMinutes();
    msg.innerHTML = `Agora são ${hora}:${minutos} horas`;
    if(hora >= 0 && hora < 12){
        img.src = 'manha.jpg';
        document.body.style.background = '#ffd342';
    } else if (hora >= 12 && hora < 18){
        img.src = 'tarde.jpg';
        document.body.style.background = '#5f852e';
    } else{
        img.src = 'noite.jpg';
        document.body.style.background = '#39445f';
    }

}