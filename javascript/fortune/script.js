function tellFortune(noofchild, partname, glocation, jobtitle){
    document.write("you will be a " + jobtitle + "in  ," + glocation + "and married to ," + partname+ "with ," + noofchild + "kids <br>");
   // document.write(`You will be a ${jobtitle} in ${glocation} and married to ${partname} with ${noofchild} kids <br>`);
}
let result=tellFortune(3,"Sara","Zürich","Web Developer");
let result1=tellFortune(4,"Fatima", "Luzern","Software Developer");
let result2=tellFortune(5,"Zahra", "Bern","Putzfrau");

