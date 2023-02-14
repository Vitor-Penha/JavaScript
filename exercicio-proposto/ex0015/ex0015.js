function contar(){
    var ini=document.getElementById('ini')
    var fim=document.getElementById('fim')
    var passo=document.getElementById('passo')
    var res=document.getElementById('res')


if(ini.value.length==0 || fim.value.length==0 || passo.value.length==0){
window.alert('[ERRO] Preencha os campos corretamente')
}else{
    res.innerHTML='Contando: '
    var i= Number(ini.value)
    var f= Number(fim.value)
    var p= Number(passo.value)
    if(i<f){
    for(var c=i; c<= f; c+=p){
    res.innerHTML+= ` \u{1F449}${c}`
    }
    }else{
        for(var c=i; c>=f; c-=p){
            res.innerHTML += ` \u{1F449}${c}`
        }

    }
res.innerHTML+= ` \u{1F3F4}`
}

}
