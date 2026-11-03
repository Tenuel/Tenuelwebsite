const display=document.getElementById("display");
function clickme(input){
  display.value+=input;
}
 function clearedbtn(){
     display.value="";
 }
 function calculate(){
 try{ 
    
    display.value=eval(display.value).toFixed(2);

 }

 catch  (error){
 display.value="ERROR!!"
 }}