const sub = document.querySelector('.sub');



//Click Search button
sub.addEventListener('click', search);

// enter key to submit
document.querySelector(".word").addEventListener("keyup", event => {
  if (event.key !== "Enter") return; // Use `.key` instead.
  document.querySelector(".sub").click(); // Things you want to do.
  event.preventDefault(); // No need to `return false;`.
});
