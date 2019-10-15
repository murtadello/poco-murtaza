var x=document.getElementById("result");
var request=new XMLHttpRequest();
request.open('get','https://ghibliapi.herokuapp.com/people', true);
request.onreadystatechange=function(){
    if(request.readyState===4 && request.status===200){
        let result=JSON.parse(request.responseText);
        let temp =" ";
    
        result.forEach(function(object) {
            temp+= "<li>";
            for(let prob in object){
                temp+="<p>" +prob + ": "+object[prob] +"</p>";
            }
            temp+= "</li>";
        });
        x.innerHTML=temp;
        x.className='micro-ani';
       
    }
}

var btn=document.querySelector("button");
btn.addEventListener("click",sendAJAXCall,true);


function sendAJAXCall(){
    
    request.send();
}









