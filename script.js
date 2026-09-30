function scrollToMessage() {
  const message = document.getElementById("message");

  message.scrollIntoView({
    behavior: "smooth"
  });
}

function showResponse() {
  const response = document.getElementById("response");

  if (response.style.display === "block") {
    response.style.display = "none";
  } else {
    response.style.display = "block";
  }
}
