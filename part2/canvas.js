

const cn = document.getElementById("canvas");
const cntxt = cn.getContext("2d");

cn.height =window.innerHeight-100;
cn.width = window.innerWidth-300;
var pos = 0;

function drawstart(e) {
    pos = 1;
    draw(e);
}
function drawend(){
    pos = 0;
    cntxt.beginPath();
}
function draw(e){
    if(pos===0) return;
    cntxt.lineWidth = 5;
    cntxt.lineCap = 'round';
    cntxt.strokeStyle= 'red';
    cntxt.lineTo(e.clientX, e.clientY);
    console.log(e.clientX , e.clentY);
    cntxt.stroke();
    cntxt.beginPath();
    cntxt.moveTo(e.clientX, e.clientY);
    
}

cn.addEventListener("mousedown", drawstart);
cn.addEventListener("mousemove", draw);
window.addEventListener("mouseup", drawend);