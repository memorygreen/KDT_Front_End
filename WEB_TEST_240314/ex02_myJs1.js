
document.getElementById("move_Margin").addEventListener('click',()=>{
    document.getElementById("div2").style.marginLeft = "100px"
    document.getElementById("div3").style.marginLeft = "200px"
    document.getElementById("div4").style.marginLeft = "300px"
})

document.getElementById("ch_radius").addEventListener('click',()=>{
    document.getElementById("div1").style.borderTopRightRadius = "50%"
    document.getElementById("div1").style.borderBottomLeftRadius = "50%"
    
    //document.getElementById("div2").style.marginLeft = "100px"
    document.getElementById("div2").style.borderTopRightRadius = "50%"
    document.getElementById("div2").style.borderBottomLeftRadius = "50%"

    //document.getElementById("div3").style.marginLeft = "200px"
    document.getElementById("div3").style.borderTopRightRadius = "50%"
    document.getElementById("div3").style.borderBottomLeftRadius = "50%"

    //document.getElementById("div4").style.marginLeft = "300px"
    document.getElementById("div4").style.borderTopRightRadius = "50%"
    document.getElementById("div4").style.borderBottomLeftRadius = "50%"
})