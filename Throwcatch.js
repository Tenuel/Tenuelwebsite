try{
       const divided=Number(window.prompt("Enter the dividend:"));
       const divisor=Number(window.prompt("Enter the divisor: "))
     if(divisor==0){
       throw new Error("You cant divide by zero")
     }
     const results=divided/divisor;
     console.log(results)
     if(isNaN(divided)|| isNaN(divisor)){
       throw new Error("The input is not a numberpizza")
     }
}
catch(error){
  console.error(error)
}
finally{
       console.log("Program exited")
}