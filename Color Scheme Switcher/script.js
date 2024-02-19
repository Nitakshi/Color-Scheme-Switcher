let buttons=document.querySelectorAll('.button');
let body=document.querySelector('body');


buttons.forEach(function (button){
      button.addEventListener('click',function(event){
         if(event.target.id === "grey"){
            body.style.backgroundColor=event.target.id;
            body.style.color="#E0CCBE";
         }
         else if(event.target.id === "white"){
            body.style.backgroundColor=event.target.id;
            body.style.color="#643843";
         }
         else if(event.target.id === "red"){
            body.style.backgroundColor= event.target.id;
            body.style.color="#F3B95F";
         }
         else if(event.target.id === "yellow"){
            body.style.backgroundColor = event.target.id;
            body.style.color= 'black';
         }
         else if(event.target.id === "blue"){
            body.style.backgroundColor= event.target.id;
            body.style.color="white";
         }
         else{
            body.style.backgroundColor="blanchedalmond";
            body.style.color="black";
            
         }
      })
      
})
 
//random Color generate
const randomcolor=function(){
   const hex='0123456789ABCDEF';
   let  color='#';
   for(let i=0;i<6;i++){
      color+= hex[Math.floor(Math.random()*16)]; //get values till 16
   }
   return color; //mnn e mnn m generate krke kya fayda :) return krdo
}
let intervalid;

let startchangingcolor= function(){
   if(!intervalid){
      document.body.style.backgroundColor=randomcolor();
   }
   intervalid=setInterval(()=>{
      document.body.style.backgroundColor=randomcolor();
   },1000);
   
}

let start=document.querySelector("#start").addEventListener("click",startchangingcolor)
document.querySelector('#stop').addEventListener("click",()=>{
        clearInterval(intervalid);
        intervalid=null; //dereference
})
