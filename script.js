function feedbackBad() {
    document.getElementById("reply-bad").innerHTML = "Oh no, I'm sorry to hear that!";
}

function feedbackGood() {
    document.getElementById("reply-good").innerHTML = "Thank you very much, that makes me happy!";
}

const myImg = document.getElementById("smileNeutral");
const btnBad = document.getElementById("btnBad");
const btnGood = document.getElementById("btnGood");

btnBad.addEventListener("click", function() {
  myImg.src = "smiley-x-eyes.svg";
});

btnGood.addEventListener("click", function() {
  myImg.src = "emoji-heart-eyes.svg";
});