
function creditCardValidation(cn){
    let resultConditional1=false;
    let resultConditional2false;
    let resultConditional3=false;
    let resultConditional4=false;
    if(cn.length==16){
        let counter=0;
        for(let i=0; i<16; i++){
            
            let number=Number.parseInt(cn[i]);
            if(Number.isInteger(temp)){
                counter++;
            }
        }
        if(counter==16){
            resultConditional1=true;
        }

        //at least 2 different integer
        let firstDigit=cn[0];
        for(let i=1; i<16; i++){
            if(firstDigit != Number.parseInt(cn[i])){
                resultConditional2=true;
                break;
            }
            
        }
        //final digit has to be even

        let finalDigit=cn[cn.length-1];
        if(finalDigit % 2==0){
            resultConditional3=true;
        }
        //sum of digital 

        let counter=0;
        for(let i=0; i<16; i++){
            
            let number=Number.parseInt(cn[i]);
            if(Number.isInteger(i)){
                sum+=temp;
            }
            if(sum>16){
                resultConditional4=true;
            }
        }



        //check all condition
        if(resultConditional1&& resultConditional2&& resultConditional3&&resultConditional4){
            return true;
        }
        else{
            return false;
        }
    }
}
let result=creditCardValidation(23);
document.write(result);
