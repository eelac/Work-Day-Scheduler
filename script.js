var d = new Date();
document.getElementById("currentDay").innerHTML = d;

$(".saveBtn").click(function () {
  console.log("Test");
  console.log(window);
  console.log(localStorage);
});

$(".checkBtn").click(function () {
  $(".description").each(function () {
    if ($(".textarea").hasClass("completed")) {
      $(".textarea").removeClass("completed");
    } else {
      $("textarea").addClass("completed");
    }
  });
});