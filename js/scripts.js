$(document).ready(function () {
  $("#first-form").submit(function (event) {
    $("#output").empty();
    const nameInput = $("input#first-input").val();
    $("#first-question").hide();
    $("#second-question").fadeIn(2000);
    $("#third-question").fadeIn(2000);
    $("#fourth-question").fadeIn(2000);
    $("#fifth-question").fadeIn(2500);
    $("#sixth-question").fadeIn(2500);
    $(".submit-col").fadeIn(5000);
    $("#output").text("Suggest-o-Matic % Hello there " + nameInput + ". Please direct your eyeballs to more relevant questions below.").fadeIn(2000);
    event.preventDefault();
  });
  $("#submit-form").submit(function (event) {
    const nameInput = $("input#first-input").val();
    $("#output").empty();
    $("#output").text("Suggest-o-Matic % " + nameInput + ", ok let me check this out. Remember: no refunds for happy users!");
    event.preventDefault();
    setTimeout(function () {
      $("#output").text(" Processing...");
    }, 2000);
    setTimeout(function () {
      const secondAnswer = parseInt($("#second-selection").val());
      const thirdAnswer = parseInt($("#third-selection").val());
      const fourthAnswer = parseInt($("#fourth-selection").val());
      const fifthAnswer = parseInt($("#fifth-selection").val());
      const sixthAnswer = parseInt($("#sixth-selection").val());
      console.log(secondAnswer, thirdAnswer, fourthAnswer, fifthAnswer, sixthAnswer);
      $("#dog-picture").toggle();
      if (secondAnswer === 1 && fourthAnswer === 2) {
        $("#output").text("Suggest-o-Matic % Well, " + nameInput + ", I'd probably learn C# in your case. You just seem like that kind of person.");
      }
      else if (secondAnswer === 1 && thirdAnswer === 1 && fourthAnswer === 1 && fifthAnswer === 1 && sixthAnswer === 1) {
        $("#output").text("Suggest-o-Matic % So hey, " + nameInput + ", you chose pretty default answers there. I'm going to recommend learning: pseudocode!");
      }
      else if (secondAnswer === 2 && thirdAnswer === 2) {
        $("#output").text("Suggest-o-Matic % So hey, " + nameInput + ", you should probably learn Java. // Why do Java programmers have to wear glasses? Because they don’t C!#");
      }
      else if (fourthAnswer === 3 && secondAnswer === 2) {
        $("#output").text("Suggest-o-Matic % So hey, " + nameInput + ", GitHub was started by prominent members of the Ruby community. Maybe check out Ruby?");
      }
      else if (fourthAnswer === 2) {
        $("#output").text("Suggest-o-Matic % So hey, " + nameInput + ", did you know that Microsoft is responsible for C#? I'd probably just learn C# if they are your favorite.");
      }
      else if (fourthAnswer === 1 && thirdAnswer === 2) {
        $("#output").text("Suggest-o-Matic % So hey, " + nameInput + ", Google loves a Python developer. Why not check that out?");
      }
      else {
        $("#output").text("Suggest-o-Matic % So hey, " + nameInput + ", I would probably just learn C+. It is hard to understand. Just like you.");
      }
   
        if (sixthAnswer === 1) {
          $("#dog-picture").show();
          console.log("hellos");
        }
    }, 5500);

  });

});