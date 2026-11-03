const mydiv=document.getElementById("mydiv");
const moveA=10;
let x=0;
let y=0;
document.addEventListener("keydown",event=>{
    mydiv.textContent="🤣"
    mydiv.style.backgroundColor="lightgreen"
})
document.addEventListener("keyup",event=>{
    mydiv.textContent="😊"
    mydiv.style.backgroundColor="lightblue"
})
document.addEventListener("keydown",event=>{
    if(event.key.startsWith("Arrow")){
        event.preventDefault();
     switch(event.key){
        case "ArrowUp":
            y-=moveA;
            break;
        case "ArrowDown":
            y+=moveA;
            break;
        case "ArrowLeft":
            x-=moveA;
            break;
        case "ArrowRight":
            x+=moveA;
            break;        
     }
     mydiv.style.top=`${y}px`;
       mydiv.style.left=`${x}px`;
    }
})