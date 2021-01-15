$(document).ready(function() {
  $("#firstForm").submit(function(event) {
    console.log("hello");
    $("#output").empty();
    const nameInput = $("input#firstInput").val();
    $("#firstQuestion").hide();
    $("#secondQuestion").fadeIn(4000);
    $("#thirdQuestion").fadeIn(6000);
    $("#fourthQuestion").fadeIn(8000);
    $("#fifthQuestion").fadeIn(12000);
    $("#sixthQuestion").fadeIn(12000);
    $("#output").text("Hello there " + nameInput + ", your name isn't important at all in determining a programming language. Please direct your eyeballs to more relevant questions below.").fadeIn(2000);

    event.preventDefault();
  });
});