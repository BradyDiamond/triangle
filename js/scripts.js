$(document).ready(function() {
  console.log("script executing!");
  $("form#triangle").submit(function(event) {
    console.log("agin,executing");
    event.preventDefault();
    const firstVal = parseInt($("#val1").val());
    const secondVal = parseInt($("#val2").val());
    //const thirdVal = parseInt($("#val3").val());
    if (firstVal === secondVal) {
      $('#Equilateral').show();
    }  
   // if (firstVal === secondVal && firstVal === thirdVal && secondVal === thirdVal) {
    //         $('#Equilateral').show();
    //         }
    //         else if (firstVal === secondVal || firstVal === thirdVal || secondVal === thirdVal) {
    //         $('#Isoscele').show();
    //         }
    //         else if (firstVal !== secondVal && firstVal !== thirdVal && secondVal !== thirdVal) {
    //           $('#Scalene').show();
    //         }  
    //         else {
    //           alert("NOT a triangle");
    //         }
  });
});





 