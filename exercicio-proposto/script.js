function carregar(){
var msg=window.document.getElementById('msg')
var img=window.document.getElementById('imagem')
var data=new Date()
//var hora=data.getHours()
var hora=20
msg.innerHTML=`Agora são ${hora} horas`
if(hora>= 0 && hora<12){
    //Bom dia
    document.body.style.background='#fce78d'
    img.src='imagens/manha.png'
}else if(hora >= 12 && hora<18){
    //Boa tarde
    img.src='imagens/tarde.png'
    document.body.style.background='#c9cc7d'
}else{
    //Boa noite
    img.src='imagens/noite.png'
    document.body.style.background='#2a8ca0'
}
}