let images=[
    "https://images.unsplash.com/photo-1569243953918-4347e3038d14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=60",
    "https://images.unsplash.com/photo-1568860484667-b78d64242041?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=60",
    "https://images.unsplash.com/photo-1568021735466-efd8a4c435af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=60",
    "https://images.unsplash.com/photo-1568128979147-e03add161edb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=60"

];
let counter=0;

let buttons=document.getElementsByTagName("button");
let prevButton=buttons[0];
let nextButton=buttons[1];
let image=document.getElementById("slider");
/*alternative varilable assignemnt
let prevButton=document.querySelector("button");
let nextButton=document.querySelector("img + button");

*/

prevButton.addEventListener("click", showPrev,true);
nextButton.addEventListener("click", showNext,true);



function showPrev(){
    counter--;
    if(counter<0){
        counter=images.length-1;
    }
    image.src =images[counter];

}
function showNext(){
    counter++;
    if(counter>images.length-1){
        counter=0;
    }
    image.src =images[counter];
}