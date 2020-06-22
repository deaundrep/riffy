let input = getInput(0)
let input2 = getInput(1)
let result = bmi(input, input2)

function bmi(weight, height){

    let bmi = weight / (height**2);
    
    if (bmi < 18.5) {
        return "Under Weight";
    } else if (bmi < 25) {
        return "Average Weight";
    } else if (bmi < 30) {
        return "Over Weight";
    } else {
        return "Time For A Change!!!"
        }
    }

    if(input === undefined){
        console.log( 'Please input a BMI.')
    }else{
    console.log(result)
    
    }

function getInput(n) {
        return process.argv[n + 2];
    }


module.exports = bmi;    


    