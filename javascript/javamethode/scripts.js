let date=new Date();
let hours=date.getHours();
var leftpos=0;
var myAnim=setInterval(moveBox,100);
// calls the function each second
function moveBox(){
    if(leftpos==600){
        clearInterval(myAnim);
    }
    else{
        leftpos+=50;
        let box=document.getElementById("box");
        box.style.left=leftpos+"px";
 }
    
}
