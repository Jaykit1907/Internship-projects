let boxes = document.querySelectorAll('.box');
let win_container = document.getElementById("winning");
let winner = win_container.firstElementChild;
let resetbtn = document.getElementById("reset");
let newGame = document.querySelector(".btn");
let msg1=document.getElementById("msg");
let  msg2=msg1.firstElementChild;

let turn = true;
let p1, p2, p3;
let ps1,ps2,ps3;

let match = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],

]
function work() {
    for (let i=0;i<cn-1;i++) {
       ps1 = boxes[match[i][0]].innerText;
       ps2 = boxes[match[i][1]].innerText;
       ps3 = boxes[match[i][2]].innerText;
       p1 = boxes[match[i][0]];
       p2 = boxes[match[i][1]];
       p3 = boxes[match[i][2]];
       

        if (ps1 != "" && ps2 != "" && ps3 != "") {
        console.log(i);
            
            if (ps1 == ps2 && ps2 == ps3 && ps1 == ps3) {
                winner.innerHTML = `Congratulation the winner is '${ps1}'`;
                p1.setAttribute("style", "background-color:aquamarine; color:rgb(116, 6, 180);");
                p2.setAttribute("style", "background-color:aquamarine; color:rgb(116, 6, 180);");
                p3.setAttribute("style", "background-color:aquamarine; color:rgb(116, 6, 180);");

                win_container.setAttribute('style', 'display:flex');
                resetbtn.setAttribute("style", "display:none");
                disable_disabled();
            }
            // else if(i==(cn-1)){
            //     check();
            //     console.log("brother");
            // }
            // else{
            //     continue;
            // }

        }
       

    }
}

newGame.addEventListener("click", () => {
    for (let x of boxes) {
        x.innerHTML = "";
        win_container.setAttribute("style", "display:none");
        resetbtn.setAttribute("style", "display:block");
        x.setAttribute("style", "color:rgb(15, 5, 104);background-color: rgb(236, 191, 191);");
       
        enable_disable();

    }
})

resetbtn.addEventListener("click", () => {
    win_container.setAttribute("style", "display:none");
    for (let m of boxes) {
        m.innerHTML = "";

        enable_disable();

    }
})
function disable_disabled() {
    for (let x of boxes) {
        x.disabled = true;
    }
}
function enable_disable() {
    for (let p of boxes) {
        p.disabled = false;
    }
}


boxes.forEach(box);

function box(e) {

    e.addEventListener('click', write);
    function write() {
        if (turn === true) {

            e.innerHTML = 'x';
            turn = false;
            e.setAttribute("style","color:green;");
            e.disabled = true;

        }
        else {
            e.innerHTML = 'o';
            turn = true;
            e.setAttribute("style","color:blue;");
            e.disabled = true;
        }
        work();

    }
}
let cn=0;

function countvalue(){
    for(let cs of boxes){
        cn=cn+1;
    }

}
 countvalue();
// console.log(cn);

// function check(){

//     for( let c=0;c<cn;c++){
//             console.log("welcome");
//             if(ps1!=ps2 ||  ps2!=ps3   || ps3!=ps1){
//                 msg1.setAttribute("style","display:block;");
//                 msg2.innerHTML="sorry";
//             }
//         }

//     }

