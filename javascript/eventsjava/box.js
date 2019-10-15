var myP=document.getElementById('myP');
var myDiv=document.getElementById('myDiv');
var myP2=document.getElementById('myP2');
var myDiv2=document.getElementById('myDiv2');


//myP.addEventListener("click", changText,true);



// myDiv.addEventListener("click", changText2,true);

// myDiv.addEventListener("click", function(){myDiv.style.backgroundColor='blue'});


// myDiv.addEventListener("click", function(){myDiv2.style.backgroundColor='yellow'});

myDiv.addEventListener("click", changText);

function changText(){
    myP2.textContent=myP2.textContent+='This is new text';
}
function changText2(){
    myP2.textContent=myP2.textContent+='The Real Answer';

}

function myFunction(){
    var y=event.deltaY;
    document.getElementById('myDiv').innerHTML=y;
}
