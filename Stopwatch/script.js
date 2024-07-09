let start1 = document.getElementById("start");
let reset1 = document.getElementById("reset");
let hr = document.getElementById("hour");
let min = document.getElementById("minute");
let sec = document.getElementById("second");
let ms = document.getElementById("milisecond");
let laps=document.getElementById('lap');
let container=document.getElementById("container4");

start1.addEventListener('click', start);
//stop1.addEventListener("click", stop);
reset1.addEventListener("click", reset);
laps.addEventListener("click",()=>lap(1));

let lapcount=0;

let count = 0;
let sec1 = 0;
let hr1 = 0;
let min1 = 0;
let flag = false;
let start_stop=true;
let parent_ul;
let parent_ul_condition=true;
let laptime;


function start() {
    
    flag = true;
    if(start_stop===true){          //start button click
    start1.innerHTML="pause";
    start1.setAttribute("style","background-color:red;");
    start_stop=false;

    }
    else{                   ///pause button click
        start1.innerHTML="start";
        start1.setAttribute("style","background-color:green;");
        stop();
        lap(2);
        start_stop=true;
    }
   
    
    work_milisecond();

    work();
    

}
function stop() {
    flag = false;
    
    work();
}
function reset() {
    flag = false;
    alert("all laps deleted and timer is reset");
    
    parent_ul_condition=true;
    let rem=container.firstElementChild;
    container.removeChild(rem);
    lapcount=0;
    
    
    
    work();
    hr.innerHTML="00";
    min.innerHTML="00";
    sec.innerHTML="00";
    ms.innerHTML="00";

    hr1=0;
    min1=0;
    count=0;
    sec1=0;
    
}
function work() {
    
    
    if (flag == true) {
        function work_milisecond(){
        count = count + 1;
        if(count<100){
        ms.innerHTML = count;
         }
         else{
            ms.innerHTML="99";
         }
    }

        

    //     if (count == 100) {
            sec1 = sec1 + 1;
            if (sec1 < 10) {
                sec.innerHTML = "0" + sec1;
            }
            else {
                sec.innerHTML = sec1;
            }

            
    //}
        if (sec1==60) {
            min1=min1+1;
            console.log("sec==60");
            if (min1 < 10) {
                min.innerHTML="0"+min1;
                console.log("hr <10");
            }
            else {
                min.innerHTML=min1;

            }
            sec1 = 0;
            sec.innerHTML="00";

        }
        if(min1==60){
            hr1=hr1+1;
            if(hr1<10){
                hr.innerHTML="0"+hr1;
            }
            else{
                hr.innerHTML=hr1;
            }
            min1=0;
            min.innerHTML="00";

        }
        setTimeout("work()", 1000);
        
       
    
    }
}


    function work_milisecond(){
        if (flag == true) {
    count = count + 1;
    if(count<100){
    ms.innerHTML = count;
     }
     else{
        ms.innerHTML="00";
        count=0;
     }
     setTimeout('work_milisecond()',2);
}
}
    



        //}


function lap(con){

    if(parent_ul_condition===true){
    let u=document.createElement('ul');
     parent_ul=container.appendChild(u);
     parent_ul_condition=false;

    }


    
    lapcount=lapcount+1;
    let hour1=hr1<10 ? "0"+hr1 : hr1;
    let minute1= min1<10 ? "0"+min1 :min1;
    let second1= sec1<10 ? "0"+sec1 :sec1;
    let milisecond1= count<10 ?"0"+count :count;
   if(con===1){
        laptime=`Lap${lapcount}: ${hour1}:${minute1}:${second1}:${milisecond1}`;
   }
   else{
     laptime=`Lap${lapcount}: ${hour1}:${minute1}:${second1}:${milisecond1}   pause`;
   }
    let x=document.createElement('li');

    x.textContent=laptime;
    parent_ul.appendChild(x);
    

}
 