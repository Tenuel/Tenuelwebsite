const passwordl=10;
const ilower=true;
const upper=true;
const num=true;
const symbols=true;
function generate(passwordl,ilower,upper,num,symbols){
   const lowercase="abcdefghijklmnopqrstuvwxyz";
   const uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   const numm="0123456789";
   const symbol="!@#$%^&*(){:<>.,?/+=-_";
   let achar="";
   let password="";
   achar +=ilower?lowercase:"";
 achar +=upper?uppercase:"";
  achar +=num?numm:"";
   achar +=symbols? symbol:"";
   console.log(achar)
 if(passwordl<10){
    return`Password must be atleast 1`
 }
 if(achar.length===0){
    return `At least 1 set of character need to be selected`
 }
 for(let i=0;i<passwordl;i++){
    const randomq=Math.floor(Math.random()*achar.length)
    password+=achar[randomq];
 }
    return password;
}
const password=generate(passwordl,ilower,upper,num,symbols)
console.log(`Generated Password:${password}`)