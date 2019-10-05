function helloWorld(language){
    switch(language){
        case "en":
            console.log("Hello World");
            break;
        case "de":
            console.log("Hallo Welt");
            break;
        case "es":
            console.log("سلام دنیا");
            break;
        default:
            console.log("Hello World");
            break;

    }
}
helloWorld("de");
