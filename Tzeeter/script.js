const friendSearch = document.getElementById("friendSearch")
friendSearch.addEventListener("submit", function (event) {
  event.preventDefault()
})

postText = document.getElementById('postText');
postText.addEventListener("keyup", treatInput)

function autoResize() {
  while (postText.scrollHeight > postText.offsetHeight) {
    postText.rows += 1;
  }
  let textIsempty = parseInt(postText.value.length) / postText.rows < postText.cols * 0.9
  while (postText.rows > 3 && textIsempty) {
    postText.rows -= 1;
  }
}

const textCounter = document.getElementById("textCounter")
const sendTzeet = document.getElementById("sendTzeet")



function updateConuter() {
  let counterValue = parseInt(textCounter.innerHTML)
  textCounter.innerHTML = `${140 - postText.value.length}`

  sendTzeet.removeAttribute("disabled")
  if (counterValue > 40) {
    textCounter.style = "color : rgb(0, 0, 0)"
  } else if (counterValue < 41 && counterValue > -1) {
    textCounter.style = "color : rgb(255, 200, 0)"
  } else if (counterValue < 0) {
    textCounter.style = "color: rgb(255, 0, 0)"
    sendTzeet.setAttribute("disabled", "disabled")
  }
  cleanCounter()
}

function cleanCounter() {
  let counterValue = parseInt(textCounter.innerHTML)
  if (counterValue > 139) {
    textCounter.innerHTML = ""
    sendTzeet.setAttribute("disabled", "disabled")
  }
}

function treatInput() {
  updateConuter()
  autoResize()
}

