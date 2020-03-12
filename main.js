// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let error = document.querySelector("#modal")

error.className = "hidden"

const hearts = document.querySelectorAll(".like-glyph")
hearts.forEach((heart) => 
{heart.addEventListener("click",()=> {
  mimicServerCall()
  .then (()=>{
    // heart.innerText = FULL_HEART
    // heart.className = "activated-heart"
    if (heart.innerText == FULL_HEART) {
      heart.innerText = EMPTY_HEART
      heart.classList.remove("activated-heart")
    } else if (heart.innerText == EMPTY_HEART){
      heart.innerText = FULL_HEART
      heart.className = "activated-heart"
    }  
  })
  .catch( message => {
    error.classList.remove("hidden")
    error.innerText = message
    setTimeout(function(){
      error.className = "hidden"
    },5000)
  })
})}
)


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
