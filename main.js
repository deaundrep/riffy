let input = getInput(0)
let input2 = getInput(1)
let result = bmi(input, input2)




function getInput(i) {
    return process.argv[i + 2];
}


const bmi=require('./back-end.js')