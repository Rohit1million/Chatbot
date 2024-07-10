// Function to send user message and get bot response
function sendMessage() {
    const userInput = document.getElementById('user-input').value.trim();
    if (!userInput) return;

    addMessage(`You: ${userInput}`, 'user-message');
    document.getElementById('user-input').value = '';

    const botResponse = getBotResponse(userInput);
    addMessage(`Dumb: ${botResponse}`, 'bot-message');
}

// Function to add a message to the chat box
function addMessage(message, className) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div'); 
    messageElement.className = `message ${className}`;
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    messageElement.scrollIntoView({ behavior: 'smooth' }); // Smooth scrolling effect
}


function getBotResponse(userInput) {

    const responses = {
        'hello': "Hi there! How can I assist you?",
        'how are you': "I'm just a chatbot, but thank you for asking!",
        'bye': "Goodbye! Have a great day!",
        'thank you': "You're welcome! If you have any more questions, feel free to ask.",
        'thanks': "You're welcome! If you have any more questions, feel free to ask.",
        'help': "Sure, I'm here to help. What do you need assistance with?",
        'weather': "I'm sorry, I don't have access to real-time weather data.",
        'recommend': "I can provide recommendations based on your preferences. What are you looking for?",
        'time': `The current time is ${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}.`,
        'date': `Today's date is ${new Date().toLocaleDateString()}.`,
        'joke': "Why don't scientists trust atoms? Because they make up everything!",
        'fact': "Did you know? The Earth's atmosphere is composed of approximately 78% nitrogen, 21% oxygen, and 1% other gases.",
        'music': "Music is a great way to relax! What genre do you enjoy?",
        'movie': "There are so many great movies out there! What kind of movies do you like?",
        'book': "Reading is a wonderful hobby! Do you have any favorite books or genres?",
        'game': "Video games can be a lot of fun! What type of games do you enjoy playing?",
        'sport': "Sports are a great way to stay active and healthy! Do you have a favorite sport?",
        'recipe': "Cooking can be a rewarding experience! What type of recipe are you interested in?",
        'meaning of life': "That's a big question! Philosophers have been debating that for centuries. Perhaps the meaning of life is to find your own meaning and purpose.",
        'what is your name': "I don't have a name in the traditional sense, but you can call me Bard!",
        'can you code': "I can't write code myself, but I can access and process information about code. How can I help you with coding?",
        'favorite color': "As a large language model, I don't have preferences like favorite colors. However, blue is a popular color that is often associated with feelings of calmness and peace.",
        'weekend plans': "I don't have personal plans, but I hope you have a great weekend!",
        'favorite food': "Similar to favorite color, I don't have taste buds! But I can access information about popular cuisines and recipes. What kind of food do you like?",
        'pets': "Pets can be wonderful companions! Do you have any pets?",
        'hobbies': "As a language model, I don't have hobbies in the traditional sense. However, I enjoy processing information and learning new things.",
        'learning': "Learning is a great way to expand your knowledge and grow! What are you interested in learning about?",
        'history': "History is full of fascinating stories and events. What historical period interests you the most?",
        'science': "Science is all about exploring the world around us. Are you interested in a specific field of science?",
        'future': "The future is uncertain, but it's full of possibilities. What are you excited about for the future?",
        'philosophy': "Philosophy is the study of fundamental questions about existence, knowledge, morality, and reason. What philosophical questions are you pondering?",
        'art': "Art is a beautiful way to express ideas and emotions. What kind of art do you enjoy?",
        'travel': "Traveling can be a great way to experience new cultures and places. Where would you like to travel to?",
        'animals': "Animals are amazing creatures! Do you have a favorite animal?",
        'who are you':"I am created by my creator Rohit",
        'can you help me in calculation':"Yes, sure I can help you",
        'name a footballer':'There are a lot of good footballers like Cristiano Ronaldo, Lionel Andreas Messi etc '
    };

    // Check for predefined responses first
    const response = responses[userInput.toLowerCase()];
    if (response) {
        return response;
    }

    // Check for math operations
    const match = userInput.match(/(\d+)([\+\-\*\/])(\d+)/);
    if (match) {
        const num1 = parseInt(match[1]);
        const operator = match[2];
        const num2 = parseInt(match[3]);
        let result;
        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num1 / num2;
                break;
            default:
                return "Invalid operator";
        }
        return `Sure, I can help with calculations! The result of ${num1} ${operator} ${num2} is ${result}`;
    }

    // If no predefined response found, return a default response
    return "I'm sorry, I didn't understand that.";
}
