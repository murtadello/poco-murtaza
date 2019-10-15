document.getElementById("myDiv").addEventListener("mousemove", myFunction);


function myFunction(){
    document.getElementById('demo').innerHTML=Math.random();
}
function removeHandler(){
    document.getElementById("myDiv").removeEventListener("mousemove", myFunction);
}