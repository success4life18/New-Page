function myNumber(maxNumber = 100) {
    let minNumber = 0
    let numberRange = [...Array(maxNumber).keys()].map(n => n + 1)
    let output = [];
    numberRange.forEach((number) => {
        let input = ''
        if (number % 2 === 0) {
            input = 'yu'
        }
        if (number % 3 === 0) {
            input += input ? '-gi' : 'gi'
        }
        if (number % 5 === 0) {
            input += input ? '-oh' : 'oh'
        }
        if (!input) {
            input = number
        }
        output.push(input)
    });
    console.log(output);
    return output;

     
};
myNumber(100);
myNumber(80);
