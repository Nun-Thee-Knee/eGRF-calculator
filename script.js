const eGFRCalculate = (g,S,age) => {
    K = (g=="male"?0.9:0.7)
    alpha = (g=="male"?-0.302:-0.241)
    if((S/K)>1){
        min = 1
        max = S/K
    }else{
        min = S/K
        max = 1
    }
    constant = (g=="male"?1:1.012)
    eGFR = 142 * Math.pow(min, alpha) * Math.pow(max, -1.200) * Math.pow(0.9938,age) * constant
    return Math.round(eGFR)
}


const UserForm = document.getElementById("mainForm")
UserForm.addEventListener("submit", (event)=>{
    event.preventDefault()
    const scr = document.getElementById("scr").value
    const age = document.getElementById("age").value
    const gender = document.getElementById("gender").value
    const egfrvalue = document.getElementById("egfrvalue")
    const result = document.getElementById("result")
    egfr = eGFRCalculate(gender,scr,age)
    result.classList.remove("hidden")
    egfrvalue.innerText = egfr + " ml/min/1.73m^2"
})