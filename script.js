window.addEventListener("beforeunload", function (e) {
  var message = "are sure you want to leave";
  e.returnValue = message;
  return message;
});

// loader js
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  const content = document.getElementById("content");

  setTimeout(() => {
    preloader.style.display = "none";
    content.classList.remove("hidden");
  }, 2000);
});
