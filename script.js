function compute() {
   //values and calculation
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    //Create the Interest text
   document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>"at an interest rate of "+rate+"%\<br\>You will receive an amount of "+amount+",\<br\>in the year "+year+"\<br\>"
}
//update
function getSliderValue() {
    document.getElementById("rateSpan").innerHTML = document.getElementById("rate").value;
}
//positive values
function validateAmount() {
    var principal = document.getElementById("principal").value;
    var biggerThanZero = parseInt(principal) > 0;
    if (!biggerThanZero) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }

}
