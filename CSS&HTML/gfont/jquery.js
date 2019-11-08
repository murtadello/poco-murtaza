$(document).ready(function(){
    $("button").click(function(){
        $("div").remove(".div1");
    });
    $("button").click(function(){
        $("p").removeClass("removebutton");
    });
    $("button").click(function(){
        $("h1").addClass("important blue");
    });
    
});