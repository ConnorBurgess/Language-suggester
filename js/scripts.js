$(document).ready(function() {
  $("#first-form").submit(function(event) {
    console.log("hello");
    $("#output").empty();
    const nameInput = $("input#first-input").val();
    $("#first-question").hide();
    $("#second-question").fadeIn(2000);
    $("#third-question").fadeIn(2000);
    $("#fourth-question").fadeIn(2000);
    $("#fifth-question").fadeIn(2500);
    $("#sixth-question").fadeIn(2500);
    $(".submit-col").fadeIn(5000);
    $("#output").text("Hello there " + nameInput + ". Please direct your eyeballs to more relevant questions below.").fadeIn(2000);
    event.preventDefault();
  });
    $("#submit-form").submit(function(event) {
    const nameInput = $("input#first-input").val();
    $("#output").empty();
    $("#output").text(nameInput + ", ok let me check this out. Remember: no refunds for happy users!");
    event.preventDefault();
    setTimeout(function(){
      $("#output").text(" Processing...");
    }, 2000); 
    setTimeout(function(){
      const secondAnswer = parseInt($("#second-selection").val());
      const thirdAnswer = parseInt($("#third-selection").val());
      const fourthAnswer = parseInt($("#fourth-selection").val());
      const fifthAnswer = parseInt($("#fifth-selection").val());
      const sixthAnswer = parseInt($("#sixth-selection").val());
      if (secondAnswer === 1 && fourthAnswer === 2) {
        $("#output").text("Well, " + nameInput + " I'd probably learn C# in your case.");;
      }
      else if (secondAnswer === 2 && thirdAnswer === 2) {
        $("#output").text("So hey, " + nameInput + " you should probably learn Java. // Why do Java programmers have to wear glasses? Because they don’t C!#");
      }
      else if (fourthAnswer === 3 && secondAnswer === 2) {
        $("#output").text("So hey, " + nameInput + " GitHub was started by prominent members of the Ruby community. Maybe check out Ruby?");
      }
      else if (fourthAnswer === 2) {
        $("#output").text("So hey, " + nameInput + " did you know that Microsoft is responsible for C#? I'd probably just learn C# if they are your favorite.");
      }
      else if (fourthAnswer === 1) {
        $("#output").text("So hey, " + nameInput + " Google loves a Python developer. Why not check that out?");
      }
      else {
        $("#output").text("So hey, " + nameInput + " I'm giving you my most default recommendation: learn Pseudocode! Woohoo!");
      }

    }, 5500); 
  });

});