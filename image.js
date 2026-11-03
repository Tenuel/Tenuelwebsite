const slides=document.querySelectorAll(".slider img")
let slideI=0;
let intervalid=null;
//intialize()
document.addEventListener("DOMContentLoaded",intialize())
function intialize(){ if(slides.length>0){
        slides[slideI].classList.add("displayslide")
   intervalid= setInterval(nextslide,5000);
}

}
function showslide(index){
    if(index>=slides.length){
     slideI=0;
    }
    else if(index<0){
        slideI=slides.length-1;
    }
    slides.forEach(slide=>{
        slide.classList.remove("displayslide")
    });
    slides[slideI].classList.add("displayslide")
}
function prevslide(){
    clearInterval(intervalid)
     slideI--;
    showslide(slideI)
}
function nextslide(){
    slideI++;
    showslide(slideI)
    
}