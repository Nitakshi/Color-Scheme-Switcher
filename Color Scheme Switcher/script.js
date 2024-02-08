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