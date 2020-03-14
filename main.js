// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const heart = {
    [EMPTY_HEART]: [FULL_HEART, "activated-heart"],
    [FULL_HEART]: [EMPTY_HEART, ""]
}

// Your JavaScript code goes here!
document.addEventListener('DOMContentLoaded', function() {
    let errorModel = document.getElementById('modal')
        // errorModel.className = "hidden"
    let spans = Array.from(document.getElementsByClassName('like-glyph'))
    spans.forEach(function(span) {
        span.addEventListener('click', function(event) {
            mimicServerCall().then(function() {
                let currentlike = event.target
                let object = heart[currentlike.innerText]

                currentlike.innerText = object[0]
                currentlike.className = object[1]
                    // currentlike.className = heart[currentlike.innerText][1]
                    // currentlike.innerText = heart[currentlike.innerText][0]
            }).catch(function(erros) {

                let p = document.getElementById("modal-message")
                p.innerText = erros
                errorModel.className = ""
                setTimeout(function() { errorModel.className = "hidden" }, 3000)
            })

        })
    })



})




//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
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