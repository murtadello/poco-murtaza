(function() {
   
    /*-----------------------------Welcome Animation message-------------------------------------*/
    let messages=[
        "Willkommen", 
        "خوش آمدید",
        "أهلاً بكم",
        "HOŞGELDİNİZ",
        "እንቋዕ ብድሓን መጻእኩም",
        "Добро пожаловать",
        "Ashamaa",
        "བཀྲ་ཤིས་བདེ་ལེགས།",
        "Welcome",
        "እንቋዕ ብደሓን መጻእኩም",
        
    ];
    
    let msgContainer=document.querySelector("main h3");
    var counter=0;
    setInterval(animateMsg,1500);
    
    function animateMsg(){
        msgContainer.innerHTML=messages[counter];
        counter++;
        if(counter>=messages.length){
            counter=0;
        }
    }
    
    
    
    
    /*----check if section is in viewport and then change the url in the address bar*/
    let section=document.querySelectorAll("section");
    section.forEach(function(el){
        if(elementInViewport(el,0)) {
        let url="#"+el.id;
        history.pushState('','',url);
        }
        
    });

    
    })();

