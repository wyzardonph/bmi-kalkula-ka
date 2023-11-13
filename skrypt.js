function bmiFunction() {
 
    let vaha = parseFloat(document.getElementById("vaha").value)
    let vyska = parseFloat(document.getElementById("vyska").value)
 
    let vyskaM = vyska / 100
    let BMI = vaha / (vyskaM * vyskaM)
    let hlaska = " "
 
    if (vaha < 0) {
        BMI = 0
        hlaska = "idk"
    } else if (vyska < 0) {
        BMI = 0
        hlaska = "idk"
    } else {
 
        if (BMI < 18.5) {
            hlaska = "Podváhu"
        } else if (BMI >= 18.5 && BMI < 25) {
            hlaska = "Normální váhu"
        } else if (BMI >= 25 && BMI < 30) {
            hlaska = "Nadváhu"
        } else {
            hlaska = "Obezitu"
        }
 
    }
 
    let roundBMI = BMI.toFixed(2);
 
    document.getElementById("bmiOutput").value = roundBMI
    document.getElementById("hlaskaOutput").value = hlaska
}