function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.getElementById('res');
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERROR] Verifique os dados e tente novamente!');
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
        img.style.borderRadius = '50%';
        img.style.width = '250px';
        img.style.height = '250px';
        img.style.marginTop = '5px';
        if(fsex[0].checked){
            genero = 'Homem';
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'menino.jpg');
            } else if(idade < 21){
                img.setAttribute('src', 'jovemh.jpg');
            } else if (idade < 50){
                img.setAttribute('src', 'homemadt.jpg');
            } else{
                img.setAttribute('src', 'idoso.jpg');
            }
        } else if(fsex[1].checked){
            genero = 'Mulher';
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'menina.jpg');
            } else if(idade < 21){
                img.setAttribute('src', 'jovemm.jpg');
            } else if (idade < 50){
                img.setAttribute('src', 'mulheradt.jpg');
            } else{
                img.setAttribute('src', 'idosa.jpg');
            }
        }
        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        res.appendChild(img);
    }
}