function verificar(){
var data=new Date()
var ano=data.getFullYear()
var fano= document.getElementById('txtano')
var res= document.querySelector('div#res')
if (fano.value.length==0 || fano.value>ano){
    window.alert('[ERRO!!] Verificar as datas e tentar novamente')
}else {
    var fsex = document.getElementsByName('radsex')
    var idade= ano-Number(fano.value)
    res.innerHTML=`Idade Calculada: ${idade} anos`
    var genero = ''
    var img=document.createElement('img')
    img.setAttribute('id','foto')
    if (fsex[0].checked){
        genero='Homem'
        if (idade>= 0 && idade<18){
        //criança
        img.setAttribute('src','imagens/menino.png')
        }else if(idade<21){
            //jovem
            img.setAttribute('src','imagens/homem.png')
        }else if(idade<50){
            //adulto
            img.setAttribute('src','imagens/manha.png')
        }else {
            //adulto
            img.setAttribute('src','imagens/idoso.png')
        } 
    }else if (fsex[1].checked){
        genero='Mulher'
        if (idade>= 0 && idade<18){
            //criança
            img.setAttribute('src','imagens/menina.png')
            }else if(idade<21){
                //jovem
                img.setAttribute('src','imagens/mulher.png')
            }else if(idade<50){
                //adulto
                img.setAttribute('src','imagens/noite.png')
            }else {
                //adulto
                img.setAttribute('src','imagens/idosa.png')
            } 
    }
    res.style.texAlign='center'
    res.innerHTML=`Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
}

}