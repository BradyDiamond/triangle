$(document).ready(function() {
    $("form#triangle").submit(function(event) {
       event.preventDefault();
    const firstVal = parseInt($("#val1").val());
    const secondVal = parseInt($("#val2").val());
    const thirdVal = parseInt($("#val3").val());

    if (firstVal + secondVal <= thirdVal)  {
      return alert("NOT a triangle");
    } else if (secondVal + thirdVal <= firstVal) {
      return alert("NOT a triangle");
    } else if (firstVal + thirdVal <= secondVal) {
      return alert("NOT a triangle");
    } 
      if (firstVal === secondVal && firstVal === thirdVal) {
      $('#Equilateral').show();
      } else if (firstVal === secondVal || firstVal === thirdVal) {
      $('#Isosceles').show();
      } else if (secondVal === thirdVal) {
      $('#Isosceles').show();
      } else if (firstVal !== secondVal && firstVal !== thirdVal && secondVal !== thirdVal) {
      $('#Scalene').show();
    
      }
  });
});




