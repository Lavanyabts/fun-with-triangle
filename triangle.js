const input = document.querySelectorAll('.angle-input');
const formTrainglebtn = document.querySelector('#form-traingle-btn');
const outputEI = document.querySelector('#output');

function calculateSumOfAngles (angle1,angle2,angle3) {
    const sumofAngles = angle1 + angle2 + angle3; 
    return sumofAngles;
}

function formTriangle() {
    const sumOfAngles = calculateSumOfAngles(Number(input[0].value),Number
    (input[1].value),Number(input[2].value));
    if(sumOfAngles === 180) {
        outputEI.innerText = "angle forms the triangle dude";
    }
    else {
        outputEI.innerText = "it dosen't form a Triangle dude";
    }
}

