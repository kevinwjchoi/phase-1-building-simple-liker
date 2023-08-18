// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const errorModal = document.getElementById('modal');
errorModal.classList.add('hidden');

document.addEventListener('click', function(event) {
  event.preventDefault();
  mimicServerCall()
    .then(function(response) {
      const heartIcon = document.querySelector('.like-glyph');
      if (heartIcon.innerText === EMPTY_HEART){


      heartIcon.classList.add('activated-heart');
      heartIcon.innerText = '❤️'; 
      console.log(response);
    }
    else {
      heartIcon.innerText = EMPTY_HEART;
      heartIcon.classList.remove('activated-heart');
      console.log(response);
    }
    })
    .catch(function(error) {
      console.log(error);
      const errorModal = document.getElementById('modal');
      errorModal.classList.remove('hidden');

      setTimeout(function() {
        errorModal.classList.add('hidden');
      }, 3000);
    });
});






//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
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


