$(document).ready(function() {
//     // all jQuery code goes here
//     //Exercise1
//     var thirditem=($("nav ul li").find("a").eq(2));
//     console.log(thirditem.html());

//     console.log($("nav ul li").find("a").eq(3).css("background-color","red").css("font-size",23));

//     //Exercise2
//     console.log($("label[for=email]").text());
//   //Exercise3
//     console.log($("img[alt]").length);
//    //Exercise4
//    console.log($("tbody tr:odd").length);
//    $("tbody tr:odd").addClass("odd special");
//    $("tbody tr:odd").removeClass("special");

//    if($("tbody tr:odd").hasClass("odd")){
//      console.log("yes");
//      $("tbody tr:odd").css("background-color","orange");
//      $("tbody tr:odd").height(78);
//    }


//    $("section ul").before("<p>This is the new text befor my list</p>");
//    $("section ul").after("<p><strong>This is the new text befor my list</strong></p>");
//    $("section ul").prepend("<li>This is the new first item befor my list</p>");
//    $("section ul").append("<li><strong>This is the new last list itme befor my list</strong></p>");


//    $("input[type=radio]").eq(0).parent().addClass("calss");

//    $("nav ul li").eq(0).next().addClass("newclass");
//    var fourthlistitem=$("nav ul li").eq(3);
//    fourthlistitem.addClass("current");
   
//    $("section#location h2").html("changae the content to new title");

//    $("img[alt]").each(function(){
//      $("this").attr("alt","hello");
//      console.log("imge alt attribute:"+$(this).attr("alt"));
//    });

//    $("input").each(function(){
//     console.log("form field name attribute:" +$(this).attr("name"));
// //
//     $("a").click(function(){
//       $(address).animate(
//         {
//           opactiy: .3,
//           width: "500px",
//           height:"700px"
//         },2000, function(){
//           alert("animated");
//         }
//       );
      
//         });
//     });

    

//     $("a").hover(
//       function(){
//       $(this).css("color","red");
//       $("figcaption").hide();
//     },
//     function () {
//       $(this).css("color","blue");
//       }
//     );

// //Jquery for addeventlistener with event bubling (3rd parameter is always false)
//     $("a").on("click",function () {
//       console.log("this is another way to use event jquery")
      
//     });
  
// animation

$("nav").animate(
  {
    opacity: .2,
    width: "500px",
    height: "700px"
  }, 2000, function() {
    alert("animated");
  }
);















 
  });