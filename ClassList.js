let mybut = document.querySelectorAll(".mybut")

mybut.forEach(button=>{
    button.classList.toggle("enabled")
})
mybut.forEach(button=>{
    button.addEventListener("mouseover",event=>{
        event.target.classList.toggle("hover")
    })
})
mybut.forEach(button=>{
    button.addEventListener("mouseout",event=>{
        event.target.classList.toggle("hover")
    })
})
mybut.forEach(button=>{
    button.addEventListener("click",event=>{
        if(event.target.classList.contains("disabled")){
            event.target.textContent+="🤞🤞"
        }
        else{
        event.target.classList.replace("enabled","disabled")
        }

    })
})