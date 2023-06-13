function calculateBmi() {
    let weight = Number(document.getElementById("id-weight").value);
    let heightFeet = Number(document.getElementById("id-height-feet").value);
    let heightInch = Number(document.getElementById("id-height-inches").value);
    heightInch = (heightFeet*12) + heightInch;
 // without Number(), the inputs were taken as strings
    let weightKilo = weight / 2.20462262;
    let heightMetre = heightInch * 0.0254;

    const bmi = weightKilo/ heightMetre**2;
    document.getElementById('bmiIndicator').innerHTML= bmi.toFixed(2);
    //.toFixed() rounds off the value to 2 decimal places
    //alert(bmi); both alert and writing into innerHTML don't work at the same time.
}





