// display.js
const weeksSelect = document.getElementById("weeks");
const messageInput = document.getElementById("message");

function saveMessage() {
  const selectedWeeks = weeksSelect.value;
  const userMessage = messageInput.value;

  alert("Message saved successfully!");
}

function displayMessage() {
  if ((messageInput.value = " ")) {
    alert("Input some message !!");
  } 
  else {
    const retrievedMessage = messageInput.value; 
    alert(retrievedMessage);
  }
}
    