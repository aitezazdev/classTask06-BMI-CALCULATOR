var height = document.getElementById('height');
var weight = document.getElementById('weight');
var btn = document.getElementById('btn');
var result = document.getElementById('result');
var reset = document.getElementById('reset');
var container = document.querySelector('.container');
var resultCard = document.getElementById('result-card');
var comment = document.getElementById('comment');

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
    result.textContent = `Your BMI is ${bmi}`;

    if(bmi < 18.5){
        comment.style.color = 'blue';
        comment.textContent = "Underweight";
    }else if(bmi >= 18.5 && bmi <= 24.9){
        comment.style.color = 'green';
        comment.textContent = "Normal weight";
    }else if(bmi >= 25 && bmi <= 29.9){
        comment.style.color = 'yellow';
        comment.textContent = "Overweight";
    }else if(bmi >= 30){
        comment.style.color = 'red';
        comment.textContent = "Obese";
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

