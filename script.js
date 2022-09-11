
function converter(){

let valorDecimal = Number(inpDecimal.value);

let bin = valorDecimal.toString(2);
let octal = valorDecimal.toString(8);
let hexadecimal = valorDecimal.toString(16);
document.getElementById("octalOutput").value = octal;
document.getElementById("hexaOutput").value = hexadecimal;
document.getElementById("binOutput").value = bin;

}
function aparecerHexa(){
    inpCheck.style = "flex";
}