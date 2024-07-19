window.addEventListener("beforeunload", function (e) {
  var message = "are sure you want to leave";
  e.returnValue = message;
  return message;
});
