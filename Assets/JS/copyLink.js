const emailSpan = document.getElementById("email");

emailSpan.addEventListener("click", () => {
  const emailText = emailSpan.getAttribute("data-clipboard-text");
  const tempInput = document.createElement("input");
  tempInput.value = emailText;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
  emailSpan.setAttribute("data-tooltip", "Copied!");
});