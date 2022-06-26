//Write function bmi that calculates body mass index (bmi = weight / height2).

//if bmi <= 18.5 return "Underweight"

//if bmi <= 25.0 return "Normal"

//if bmi <= 30.0 return "Overweight"

//if bmi > 30 return "Obese"

function bmi(weight, height) {
    let bodyOdyOdyOdy = weight / Math.pow(height, 2)
    if(bodyOdyOdyOdy <= 18.5){
      return "Underweight"
    }else if(bodyOdyOdyOdy <= 25.0){
      return "Normal"
    }else if(bodyOdyOdyOdy <= 30.0){
      return "Overweight"
    }else{
      return "Obese"
    }
}

console.log(bmi(68, 1.7018))