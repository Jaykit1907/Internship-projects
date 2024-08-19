

let netflix1=document.getElementById("netflix");

netflix1.addEventListener("click",netflixwork);

function netflixwork(){
    console.log("clicked");
    window.open("Netflix.html","video1","width=700 height=400 left=300 top=20 right=30");
}

let amazon1=document.getElementById("amazon");

amazon1.addEventListener("click",amazonwork);
function amazonwork(){
    console.log("clicked");
    window.open("Amazon.html","video1","width=700 height=400 left=300 top=20 right=30");

}

let pdfconverter1=document.getElementById("pdfconverter");
let converterclose;
pdfconverter1.addEventListener("click",pdfconverterwork);
function pdfconverterwork(){
    console.log("clicked");
    converterclose=window.open("pdfconverter.html","video1","width=700 height=400 left=300 top=20 right=30");

}



let translator1=document.getElementById("translator");

translator1.addEventListener("click",translatorwork);
function translatorwork(){
    console.log("clicked");
    window.open("Translator.html","video1","width=700 height=400 left=300 top=20 right=30");

}


