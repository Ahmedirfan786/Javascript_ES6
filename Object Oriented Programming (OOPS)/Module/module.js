let oprnd1 = document.getElementById("oprnd1");
let oprnd2 = document.getElementById("oprnd2");
let opr = document.getElementById("operator");
let btn=document.getElementById("calculate");
let resulttxt = document.querySelector("#resulttxt");


function result(oprnd1,oprnd2,opr,resulttxt){

if (opr.value == "+") {
    return resulttxt.innerHTML = parseInt(oprnd1.value) + parseInt(oprnd2.value)
}
if (opr.value == "-") {
    return resulttxt.innerHTML = parseInt(oprnd1.value) - parseInt(oprnd2.value)
}
if (opr.value == "*") {
    return resulttxt.innerHTML = parseInt(oprnd1.value) * parseInt(oprnd2.value)
}
if (opr.value == "/") {
    return resulttxt.innerHTML = parseInt(oprnd1.value) / parseInt(oprnd2.value)
}

}

export{oprnd1,oprnd2,opr,btn,resulttxt,result}
