function greaterNum(num1, num2){
    /*if(num1>num2){
       // console.log("The greater number of " + num1 + "and" + num2 + "is " +num1);
       return num1;
    }
    else{
        //console.log("The greater number of " + num1 + "and" + num2 + "is " +num2);
        return num2;
    }*/
    return (num1 > num2) ? num1 : num2;
}

compareNumbers(2,4);
compareNumbers(6,7);

function compareNumbers(num1, num2) {
    console.log("The greater number of " + num1 + " and " + num2 + " is " + greaterNum(num1, num2));
}
