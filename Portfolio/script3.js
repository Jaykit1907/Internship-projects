
let menu2=document.querySelector("#menuop");
let nav3=document.querySelector(".ulelement");
let cross1=document.querySelector("#cross");
let liele1=document.querySelectorAll(".liele");

menu2.addEventListener("click",menuwork);
function menuwork(){
  console.log("working");
  menu2.setAttribute("style","display:none;");
  cross1.setAttribute("style","display:block");
  nav3.setAttribute("style","display:flex; flex-direction:column;position:fixed;top:100px;");

  
}
cross1.addEventListener("click",()=>{
  menu2.setAttribute("style","display:block");
  cross1.setAttribute("style","display:none");
  nav3.setAttribute("style","display:none;");
  liele1.setAttribute("style","height:30px;background-color:white;");
}
);
  
