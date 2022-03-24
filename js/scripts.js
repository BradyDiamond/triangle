// BUSINESS LOGIC

function fullName(firstName, lastName) {
  return firstName + lastName;
}

// UI LOGIC 

$(document).ready(function() {
  $("form#name").submit(function(event) {
    event.preventDefault();
    const firstVal = $("#val1").val();
    const secondVal = $("#val2").val();
    const thirdVal = $("#val3").val();

    const result = (firstVal + secondVal + LastVal);
    const receiptText = " Thank you for your Purchase!"
    $("#output").text(result + " - " + flavor.toUpperCase() + " " + receiptText);
    $("#output").show();
  });
});