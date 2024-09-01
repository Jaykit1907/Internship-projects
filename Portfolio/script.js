

    // let anim=document.getElementById("animation1");
    // let elm=document.getElementById("element");
    // setInterval(work,5000);
    // function work(){
    //     work2();
    // var typed = new Typed('#element', {
    //   strings: ['<i>And I\'m Fontend Developer</i>'],
    //   typeSpeed: 50,
    // });
    // }
    // function work2(){
    //     elm.innerHTML="";
    // }


    let netflix1=document.getElementById("netflix");

    netflix1.addEventListener("click",netflixwork);

    function netflixwork(){
        console.log("clicked");
        window.open("Netflix.html","video1","width=800 height=700 left=300 top=20 right=30");
    }

    let amazon1=document.getElementById("amazon");

    amazon1.addEventListener("click",amazonwork);
    function amazonwork(){
        console.log("clicked");
        window.open("Amazon.html","video1","width=800 height=700 left=300 top=20 right=30");

    }

    let pdfconverter1=document.getElementById("pdfconverter");

    pdfconverter1.addEventListener("click",pdfconverterwork);
    function pdfconverterwork(){
        console.log("clicked");
        window.open("Pdfconverter.html","video1","width=800 height=700 left=300 top=20 right=30");

    }

    
    let translator1=document.getElementById("translator");

    translator1.addEventListener("click",translatorwork);
    function translatorwork(){
        console.log("clicked");
        window.open("Translator.html","video1","width=800 height=700 left=300 top=20 right=30");

    }

    

  