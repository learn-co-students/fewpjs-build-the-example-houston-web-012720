// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let hearts = document.querySelectorAll("span.like-glyph")
hearts.forEach(heart => {heart.addEventListener("click",   () => {
    if(heart.innerText === EMPTY_HEART){
      heart.textContent = FULL_HEART
      heart.style.color = "red"
      console.log(mimicServerCall().value)
    }else{
      heart.textContent = EMPTY_HEART
      heart.style.color = "rgb(170,184,194)"
    }
  })
})

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
