

    let anim=document.getElementById("animation1");
    let elm=document.getElementById("element");
    setInterval(work,5000);
    function work(){
        work2();
    var typed = new Typed('#element', {
      strings: ['<i>And I\'m Fontend Developer</i>'],
      typeSpeed: 50,
    });
    }
    function work2(){
        elm.innerHTML="";
    }

  