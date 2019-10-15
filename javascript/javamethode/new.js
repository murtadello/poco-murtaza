//Examinate teh document objects//
//console.dir(document);

//console.log(document.domain);
//console.log(document.URL);
//console.log(document.title);
//document.title="This is the new title";

//console.log(document.doctype);
//console.log(document.head);
//console.log(document.body);
//console.log(document.all[10]);
//document.all[10].textContent='Hello World';

//var headerTitle=document.getElementById('header-title');
//var header=document.getElementById('main-header');
//console.log(headerTitle);
//headerTitle.textContent='Hello World';
//headerTitle.innerHTML='<h3>This is the new Heading</h3>';
//header.style.borderBottom='solid 2px red';
//headerTitle.style.fontSize='23px';


//var items=document.getElementsByClassName('list-group-item');
//console.log(items);
//console.log(items[1]);
//items[1].textContent='This is the second list';

//items[0].style.fontWeight='bold';
//items[0].style.backgroundColor='yellow';

//for(var i=0; i<items.length; i++){
 //   items[i].style.backgroundColor='#f4f4f4';
//}

////////////////GetelemenbyTagname//////////////////////
// var li=document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent='Hello Javascript';
// li[1].style.fontWeight='bold';
// li[1].style.backgroundColor='yellow';


// for(var i=0; i<li.length; i++){
//     li[i].style.backgroundColor='yellow';
// }


// var header=document.querySelector('#main-header');
// header.style.borderBottom='solid 4px red';

// var input=document.querySelector('input');
// input.value='Hello Murtaza';


// var submit=document.querySelector('input[type="submit"]')
// submit.value='SEND';


// var items=document.querySelector('.list-group-item');
//items.style.color='red';

//var lastItem=document.querySelector('.list-group-item:last-child');
//lastItem.style.color='blue';


//var odd=document.querySelectorAll('li:nth-child(odd)');         
//var even=document.querySelectorAll('li:nth-child(even)'); 


//for(var i=0; i<odd.length; i++){
  //  odd[i].style.backgroundColor='pink';
    //even[i].style.backgroundColor='red';
//}


///////////////Traversing the DOM////////////////////////////7


//var itemlist=document.querySelector('#items');
//ParentNode

//console.log(itemlist.parentNode);

//itemlist.parentNode.style.backgroundColor='yellow';

//console.log(itemlist.parentNode.parentNode);

//ParentElement

//console.log(itemlist.parentElement);

//itemlist.parentElement.style.backgroundColor='blue';
//console.log(itemlist.parentElement.parentElement.parentElement);


//console.log(itemlist.children);
//console.log(itemlist.children[1]);
//itemlist.children[1].style.backgroundColor='orange';


//first Childe////////////

//console.log(itemlist.firstElementChild);
//itemlist.firstElementChild.textContent='This is the first child list';
//itemlist.children[2].style.backgroundColor='red';

//itemlist.lastElementChild.textContent='Hello Mohammad';


// var container=document.querySelector('#items');
// console.log(container.previousSibling);

// // console.log(container.nextElementSibling);
// var button=document.getElementById('btn-block').addEventListener('click', buttonClick);

// function buttonClick(){
//   document.getElementById('header-title').textContent='changed';
//   document.querySelector('#main').style.backgroundColor='red';
// }


// var button=document.getElementById('btn-block');
// button.addEventListener('dblclick', runEvent);


// function runEvent(e){
//     console.log('Event Type: ' + e.type);
// }


function writeIntoConsole(){
 console.log(writeIntoConsole);
alert("Open console!");
}

//window.onload=document.getElementById('header-title').textContent='Computer Engineering';

document.querySelector('h2').addEventListener("click",writeIntoConsole);

document.querySelector('h2').removeEventListener('click', writeIntoConsole);