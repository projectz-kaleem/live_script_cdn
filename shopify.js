        
function appendMessage() {
  alert("Kaleem Please enter a message.");
  const userInput = document.getElementById("userInput").value;
  const messageContainer = document.getElementById("messageContainer");

  if (userInput.trim() === "") {
    alert("Please enter a message.");
    return;
  }

  // Display the user's message on the right side
  messageContainer.innerHTML += `
    <div class="message">
      <div class="user"><strong></strong> ${userInput}</div>
    </div>
  `;

  // Clear the input field after sending
  document.getElementById("userInput").value = "";

  // Send the user input to the server (replace with your API URL)
  fetch("https://jsonplaceholder.typicode.com/todos/3") // Replace with your API URL
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      // Display server response on the left side
      messageContainer.innerHTML += `
        <div class="message">
          <div class="server"><strong></strong> ${data.title}</div>
        </div>
      `;
    })
    .catch((error) => {
      console.error("There has been a problem with your fetch operation:", error);
      messageContainer.innerHTML += `
        <div class="message">
          <div class="server"><strong>Server:</strong> Error fetching data</div>
        </div>
      `;
    });
}

