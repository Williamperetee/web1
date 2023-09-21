const p=["oi",6,7,8,10, false]
let q=p.some(function(f){
    return typeof f ==="number" /*Retorna numero true*/&& f>=11 //Retorna false
})
console.log(q)