
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const hearts = document.querySelectorAll(".like-glyph");
const error_message = document.querySelector("#modal");

for (const heart of hearts) {
  heart.addEventListener("click", () => {
    mimicServerCall()
      .then( response => {
        if (heart.className == ".activated-heart") {
          heart.innerHTML = EMPTY_HEART
          heart.className = ".deactivated-heart"
        } else {
          heart.innerHTML = FULL_HEART
          heart.className = ".activated-heart"
        }
      })
      .catch( error => {
        error_message.className = ".visible"
        error_message.style.display = "block"
        setTimeout( () => {
          error_message.className = ".hidden"
          error_message.style.display = "none"
        }, 5000)
      })
  });
}

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
