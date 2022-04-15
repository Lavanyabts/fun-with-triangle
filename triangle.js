const input = document.querySelectorAll('.angle-input');
const triangleBtn = document.querySelector('#triangle-btn');
const output = document.querySelector('#output');

function sumOfAngles (angle1,angle2,angle3) {
    const sum = angle1 + angle2 + angle3; 
    return sum;
}

function triangle() {
    const sum = sumOfAngles (Number(input[0].value),
     Number(input[1].value), 
     Number(input[2].value)
     );
    if (sum === 180) {
        output.innerText = "angle forms the triangle dude";
    }
    else {
        output.innerText = "it dosen't form a Triangle dude";
    }
}

triangleBtn.addEventListener("click",triangle);

