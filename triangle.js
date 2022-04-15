const inputs = document.querySelectorAll('.angle-input');
const formTrainglebtn = document.querySelector('#form-traingle-btn');
const outputE1 = document.querySelector('#output');

function sumOfAngles (angle1,angle2,angle3) {
    const sum = angle1 + angle2 + angle3; 
    return sum;
}

function formTriangle() {
    const sum = sumOfAngles (Number(inputs[0].value),
     Number(inputs[1].value), 
     Number(inputs[2].value)
     );
    if (sum === 180) {
        outputE1.innerText = "angle forms the triangle dude"
    }
    else {
        outputE1.innerText = "it dosen't form a Triangle dude"
    }
}

formTrainglebtn.addEventListener("click",formTriangle);

