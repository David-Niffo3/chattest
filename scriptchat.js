document.getElementById('send-button').addEventListener('click', sendMessage);

function sendMessage() {
    let input = document.getElementById('message-input');
    let message = input.value.trim();
    
    if (message !== "") {
        let chatBox = document.getElementById('chat-box');
        let newMessage = document.createElement('div');
        newMessage.textContent = message;
        chatBox.appendChild(newMessage);
        
        input.value = "";
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}
