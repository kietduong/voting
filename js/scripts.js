$(document).ready(function() {
  var age = parseInt(prompt("How old are you?"));

  if (age >= 18) {
    $('form').show();
  } else { $("#under-18").show();
  }

  $("form").submit(function() {
    event.preventDefault();
    var animals = $("#candidates").val();

    if (animals === "democrat") {
      $("#democrat").show();
      $("#republican").hide();
      $("#libertarian").hide();
    } else if (animals === "republican") {
      $("#republican").show();
      $("#democrat").hide();
      $("#libertarian").hide();
    } else if (animals === "libertarian") {
      $("#libertarian").show();
      $("#democrat").hide();
      $("#republican").hide();
    } else { $("#nothing").show();
    }

  $("#reset").click(function() {
    $("#republican").hide();
    $("#democrat").hide();
    $("#libertarian").hide();
  });

  });





});
