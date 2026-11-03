const display=document.getElementById("display");
let timer=null;
let starttime=0;
let elapsed=0;
let isRunning=false;
function start(){
    if(!isRunning){
        starttime=Date.now()-elapsed;
        timer=setInterval(update,10);
        isRunning=true;
    }

}
function stop(){
    if(isRunning){
        clearInterval(timer);
        elapsed=Date.now()-starttime;
        isRunning=false;
    }
    
}
function reset(){
clearInterval(timer)
starttime=0;
elapsed=0;
isRunning=false;
display.textContent="00:00:00:00"
    
}
function update(){
    const current=Date.now();
    elapsed=current-starttime;
    let hours=Math.floor(elapsed / (1000 * 60 * 60));
    let minutes=Math.floor(elapsed /( 1000 * 60)%60);
    let seconds=Math.floor(elapsed/1000%60);
    let millisecond=Math.floor(elapsed % 1000/10);
    hours=String(hours).padStart(2,"0");//very essential for adding zero and to make it stable
    minutes=String(minutes).padStart(2,"0");
    seconds=String(seconds).padStart(2,"0");
    millisecond=String(millisecond).padStart(2,"0");
    display.textContent=`${hours}:${minutes}:${seconds}:${millisecond}`
    
}