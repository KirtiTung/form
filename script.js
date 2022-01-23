const labels=document.querySelectorAll('.form-control label')
const inpForm=document.getElementById("authForm")
const submitBtn=document.getElementById("submitBtn")

labels.forEach(label=>{
    label.innerHTML=label.innerText
    .split('')
    .map((letter,idx)=>`<span style="transition-delay:${idx*50}ms">${letter}</span>`)
    .join('')
})
//function to get auth details
const getAuthDetails=()=>{
    console.log(document.getElementById("userName").value)
    console.log(document.getElementById("userPassword").value)
    return [document.getElementById("userName").value,document.getElementById("userPassword").value]
}

submitBtn.addEventListener("click",()=>{
    let authDetails=getAuthDetails();
    
})
