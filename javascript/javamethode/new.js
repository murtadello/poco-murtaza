$(document).ready(function(){
    $("#start").click(function(){
      var div = $("div");
      div.animate({left: '500px', width:'400px',height:'500px'}, "slow");
      div.animate({fontSize:'3em'}, "slow");
    });
    $("#stop").click(function(){
      $("div").stop();
    });
  });