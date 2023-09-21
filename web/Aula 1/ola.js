const il=document.getElementById("txtEmail")
const msg=document.getElementById("feeds")

function email(){
    let mail=il.value
    msg.innerHTML=`O e-mail ${mail} foi cadastrado com sucesso`
}