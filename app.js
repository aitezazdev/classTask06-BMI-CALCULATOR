var height = document.getElementById('height');
var weight = document.getElementById('weight');
var btn = document.getElementById('btn');
var result = document.getElementById('result');
var reset = document.getElementById('reset');
var container = document.querySelector('.container');
var resultCard = document.getElementById('result-card');

btn.addEventListener('click', function(e){
    e.preventDefault();
    var h = height.value;
    var w = weight.value;
    if (h === '' || w === '') {    
        alert('Please enter height and weight');
        return;
    } else if (h < 0 || w < 0) {
        alert('Please enter valid values');
        return;
    }


    var bmi = (w / ((h * h))).toFixed(2);
    result.textContent = bmi;

    if(bmi < 18.5){
        result.style.color = 'blue';
        result.textContent = "Underweight";
    }else if(bmi >= 18.5 && bmi <= 24.9){
        result.style.color = 'green';
        result.textContent = "Normal weight";
    }else if(bmi >= 25 && bmi <= 29.9){
        result.style.color = 'yellow';
        result.textContent = "Overweight";
    }else if(bmi >= 30){
        result.style.color = 'red';
        result.textContent = "Obese";
    }

    container.style.display = 'none';
    resultCard.style.display = 'block';
});

reset.addEventListener('click', function(){
    height.value = '';
    weight.value = '';
    result.textContent = '';
    
    container.style.display = 'block';
    resultCard.style.display = 'none';
})

