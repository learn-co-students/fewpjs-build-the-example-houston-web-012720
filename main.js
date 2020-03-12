// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener("DOMContentLoaded", () =>{
  likes = document.querySelectorAll('span.like-glyph')
  for (const like of likes){
    like.addEventListener("click", () => {
      if (like.className == 'like-glyph'){
        mimicServerCall().then(like.className = "like-glyph activated-heart").then(like.innerText='\u2665').catch(error => showError(error))
      }
      else {
        mimicServerCall().then(like.className = "like-glyph").then(like.innerText='\u2661').catch(error => showError(error))
      }
    })
  }
})

function showError(error){
  modal = document.querySelector("div#modal")
  modal.className = ""
  setTimeout(() => modal.className = "hidden", 5000)
}

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
