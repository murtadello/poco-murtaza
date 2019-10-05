var topchoice=["Blue","Donald Trump","America"];

document.write("My 1st choice " + topchoice[0] +"<br>" );
document.write("My 2nd choice " + topchoice[1] +"<br>");
document.write("My 3rd choice " + topchoice[2] +"<br>");

for(let i=0; i<3; i++){
    document.writeln(`My ${i+1}. choice ${topchoice[i]} <br>`);
}