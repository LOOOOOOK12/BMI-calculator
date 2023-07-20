
//DEMO

// let weight = document.getElementById('input-Weight').value;
// // weight = Number(weight);
// let height = document.getElementById('input-Height').value;
// // height = Number(height);

// let BMI = (weight,height) => weight/(Math.pow(height,2));

// document.getElementById('submit').onclick = console.log(BMI(weight,height));

const clear = document.getElementById('clear');

document.getElementById('submit').onclick = function(){

    let weight = document.getElementById('input-Weight').value;
    weight = Number(weight);
    let height = document.getElementById('input-Height').value;
    height = Number(height);

    let BMI = weight/(Math.pow(height,2));
    BMI = BMI.toFixed(1);
    
    document.getElementById('result-Label').innerHTML=`Your BMI is ${BMI}Kg/m²`;
}

clear.addEventListener("click", x =>{
    weight = document.getElementById('input-Weight').value = "";
    height = document.getElementById('input-Height').value = "";
    document.getElementById('result-Label').innerHTML=`Result`;
})


//USING ARROW FUNCTION TRY LANGS

let weight = window.prompt("Enter your weight:");
let height = window.prompt("Enter your height:");

const BMI = (weight,height) => weight/(Math.pow(height,2));

console.log (`Your BMI is: ${BMI(weight,height)}`);

