
function update(){
    const now=new Date();
    let hours=now.getHours().toString().padStart(2,0);
    const minutes=now.getMinutes().toString().padStart(2,0);
    const seconds=now.getSeconds().toString().padStart(2,0);
    const times=`${hours}:${minutes}:${seconds}`;
    document.getElementById("clock").textContent=times;

}
update()
setInterval(update,1000)
