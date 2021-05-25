
const cn = document.getElementById("canvas");
const cntxt = cn.getContext("2d");
const rect = cn.getBoundingClientRect();
cn.height =rect.bottom-rect.top;
cn.width = rect.right-rect.left;
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
    cntxt.lineTo(e.clientX - rect.left, e.clientY - rect.top);
    console.log(e.clientX - rect.left , e.clientY - rect.top);
    cntxt.stroke();
    cntxt.beginPath();
    cntxt.moveTo(e.clientX - rect.left , e.clientY - rect.top);
    
}

cn.addEventListener("mousedown", drawstart);
cn.addEventListener("mousemove", draw);
window.addEventListener("mouseup", drawend);