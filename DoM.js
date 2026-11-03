const newlist=document.createElement("li")
newlist.id="coconut";
newlist.style.fontWeight="bold"
newlist.style.backgroundColor="lightgreen"
newlist.textContent="Coconut";
//const orange=document.getElementById("oranges");
//document.getElementById("fruits").insertBefore(newlist, orange)
const boxes=document.querySelectorAll("#fruits li");
document.getElementById("fruits").insertBefore(newlist,boxes[2])
document.getElementById("fruits").removeChild(newlist)








/*const newh=document.createElement("h1");
newh.textContent="AM SAMUEL";
newh.id="myh1"
newh.style.color="red";
newh.style.textAlign="Center"
document.getElementById("box1").prepend(newh)
//const box2=document.getElementById("box2");
//document.body.insertBefore(newh, box2);  or
//document.getElementById("box1").removeChild(newh)
*/