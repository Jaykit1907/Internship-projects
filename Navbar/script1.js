let container1 = document.querySelector(".container1");
let icon = document.getElementById("icons");
let nav = document.getElementById('navigation')
let cross = document.getElementById("cross-icon");
let response = document.getElementById('response');
let li = nav.children;
console.log(li);

let flag = false;

window.addEventListener('scroll', changging);

function changging() {
    if(window.scrollY>200 && window.scrollY<400){
        container1.style.cssText="background-image:linear-gradient(to right,purple,orange);"
    }
    else if(window.scrollY>400)
    {
        container1.style.cssText="background-image: linear-gradient(to right,rgb(187, 48, 48),rgb(46, 161, 46));"
    

    }
    else{
        container1.style.cssText="background-image:linear-gradient(to right,rgb(219, 75, 164),rgb(39, 39, 110)"
    }
}


icon.addEventListener('click', work);

function work() {
    nav.style.cssText += " display:flex; flex-direction:column; justify-content:flex-start position:absolute; width:50%; transition:all 4s linear; position:relative; height:100%; padding-top:5px;"
    icon.style.cssText += "display:none";
    cross.style.cssText = "display:block; position:absolute; right:5px;"
    li.style.cssText = "width:100%; background-color:green;"

    

}

cross.addEventListener('click', work2);
function work2() {
    nav.style.cssText = "display:none;";
    icon.style.cssText = "display:flex; align-items:center;";
    
    
}