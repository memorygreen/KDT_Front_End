
const plus = ()=>{
    //console.log("1증가")
    let num = document.getElementById("number")
    num.innerText = Number(num.innerText)+1;
}

const minus = ()=>{
    //console.log("1감소")
    let num = document.getElementById("number")
    if(Number(num.innerText)>0){
        num.innerText = Number(num.innerText)-1;
    }
}

const reset = ()=>{
    //console.log("초기화")
    let num = document.getElementById("number")
    num.innerText = 0;
    
}

document.getElementById("plus").addEventListener('click', plus)
document.getElementById("minus").addEventListener('click', minus)
document.getElementById("reset").addEventListener('click', reset)
