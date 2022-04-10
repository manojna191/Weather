
document.querySelector(".submit").addEventListener("click" , function(){
    var value1 = document.querySelector(".input").value;
    var farenheit  = (value1*1.8)+32;
    var kelvin = value1+273.15;
    displayfarenheit(farenheit);
    displaykelvin(kelvin);
});

function displayfarenheit(farenheit){
    document.querySelector("#F").classList.remove("faren");
    document.querySelector(".Fanswer").innerText = farenheit.toString();
}
function displaykelvin(kelvin){
    document.querySelector("#K").classList.remove("kel");
    document.querySelector(".Panswer").innerText = kelvin.toString();
}
