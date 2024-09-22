

      let menu2=document.querySelector("#menuop");
      let nav3=document.querySelector(".ulelement");
      let cross1=document.querySelector("#cross");
     // let liele1=document.querySelectorAll(".liele");
      let resume=document.querySelector("#resumesection");
    

      
      menu2.addEventListener("click",menuwork);
      function menuwork(){
        
           
   
        resume.setAttribute("style","display:block;");
        console.log("working");
        menu2.setAttribute("style","display:none;");
        cross1.setAttribute("style","display:block");
         nav3.setAttribute("style","display:flex; flex-direction:column;position:fixed;top:112px;");
     
      
        
      }

      cross1.addEventListener("click",()=>{
        resume.setAttribute("style","display:none;");
        menu2.setAttribute("style","display:block");
        cross1.setAttribute("style","display:none");
       nav3.setAttribute("style","display:none;");
        
      

      
      }
      );
        


document.addEventListener("scroll", function () {
  const elements = document.querySelectorAll(".hidden");

  
  const windowHeight = window.innerHeight;
  
  elements.forEach(element => {
      const position = element.getBoundingClientRect().top;
      
      if (position < windowHeight - 100) {
          element.classList.add("show");
      }
      else{
        element.classList.remove("show");
      }
  }
  

);
});


document.addEventListener("scroll", function () {
  const elements2 = document.querySelectorAll(".hidden1");

  
  const windowHeight = window.innerHeight;
  
  elements2.forEach(element => {
      const position = element.getBoundingClientRect().top;
      
      if (position < windowHeight - 100) {
          element.classList.add("show1");
      }
      else{
        element.classList.remove("show1");
      }
  }
  

);
});

window.addEventListener("load", function () {
  const elements = document.querySelectorAll(".content2");
  
  elements.forEach(element => {
      element.classList.add("loaded");
  });
});

window.addEventListener("load", function () {
  const elements = document.querySelectorAll(".content3");
  
  elements.forEach(element => {
      element.classList.add("loaded");
  });
});




