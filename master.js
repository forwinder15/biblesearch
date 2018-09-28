const bible = "me Epaphras who is one of you a servant of Christ Jesus greets you always struggling on your behalf in his prayers that you may stand mature and fully assured in all the will of God For I bear him witness that he has worked hard for you and for those in Laodicea and in Hierapolis Luke the beloved physician greets you as does Demas Give my greetings to the brothers at Laodicea and to Nympha and the church in her house And when this letter has been read among you have it also read in the church of the Laodiceans and see that you also read the letter from Laodicea And say to Archippus See that you fulfill the ministry that you have received in the Lord I Paul write this greeting with my own hand Remember my chains Grace be with you";
const sub = document.querySelector('.sub');

fetch('https://api.esv.org/v3/passage/search/?q=rabble', {
mode: 'no-cors',
withCredentials: true,
credentials: 'same-origin',
header:{
  'Authorization': 'Token e9db23a61803d3ffcdb9c2caa5a8f3f2b98ca101'
}
})
  .then(function(response) {
    return console.log(response);
  })
.catch(function(error) {
  console.log('There has been a problem with your fetch operation: ', error.message);
});

function search(e) {
  const word = document.querySelector('.word').value;
  const count = bible.split(`${word} `).length-1;
  const tag = document.querySelector(".tagg").innerHTML = `The word ${word} was used ${count} times!`;
  return tag
}



sub.addEventListener('click', search);

// enter key to submit
document.querySelector(".word").addEventListener("keyup", event => {
    if(event.key !== "Enter") return; // Use `.key` instead.
    document.querySelector(".sub").click(); // Things you want to do.
    event.preventDefault(); // No need to `return false;`.
});
