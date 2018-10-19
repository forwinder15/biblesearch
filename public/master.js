//What happens when the enter key is pressed or the search button is clicked
//fetch the list of verses containing the word the user inputs
document.querySelector('.sub').addEventListener('click', function (e) {
  e.preventDefault()
  const wordSearched = document.querySelector('.word').value;
  fetch(`/?s=${wordSearched}`)
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      const number = myJson.total_results;
      const tag = document.querySelector(".tagg").innerHTML = `The word ${wordSearched} was used ${number} times!`;
      return tag
    })
    .catch(function(error) {
      console.log('😮 There has been a problem with the fetch operation: ', error.message);
    })
  });

// enter key to submit
//document.querySelector(".word").addEventListener("keyup", event => {
  //if (event.key !== "Enter") return; // Use `.key` instead.
  //document.querySelector(".sub").click(); // Things you want to do.
  //event.preventDefault(); // No need to `return false;`.
//});
