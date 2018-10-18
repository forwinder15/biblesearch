const sub = document.querySelector('.sub');

//What happens when the enter key is pressed or the search button is clicked
function search(e) {
  const word = document.querySelector('.word').value;
//fetch the list of verses containing the word the user inputs
  fetch(`/?s=${word}`)

};


//Click Search button
sub.addEventListener('click', search);

// enter key to submit
document.querySelector(".word").addEventListener("keyup", event => {
  if (event.key !== "Enter") return; // Use `.key` instead.
  document.querySelector(".sub").click(); // Things you want to do.
  event.preventDefault(); // No need to `return false;`.
});
