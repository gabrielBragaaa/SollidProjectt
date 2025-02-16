document.getElementById("send-btn").addEventListener("click", function () {
    const userInput = document.getElementById("user-input");
    const message = userInput.value.trim();

    if (message !== "") {
      const chatBox = document.getElementById("chat-box");
      const newMessage = document.createElement("p");
      newMessage.textContent = message;
      newMessage.classList.add("text-end", "mb-1", "fw-bold");

      chatBox.appendChild(newMessage);
      chatBox.scrollTop = chatBox.scrollHeight; // Auto scroll
      userInput.value = ""; // Limpar campo
    }
  });