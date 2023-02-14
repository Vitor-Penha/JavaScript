function tabuada(){
    let num=document.getElementById('num')
    let res=document.getElementById('seletab')
    if(num.value.length==0){
        window.alert('Você precisa inserir um número')
    }else{
        res.innerHTML=`Vamos fazer a tabuada`
        let n= Number(num.value)
        let tab= 1

        for(tab=1; tab<=10; tab++){
            let item=document.createElement('option')
            item.text=`${n} x ${tab} = ${n*tab}`
            res.appendChild(item)
            
        }
    }
}