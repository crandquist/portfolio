document.addEventListener('DOMContentLoaded', () => {
    const greetingElement = document.createElement('h2');
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
        greetingElement.textContent = 'Good morning! Welcome to my portfolio!';
    } else if (currentHour < 18) {
        greetingElement.textContent = 'Good afternoon! Welcome to my portfolio!';
    } else {
        greetingElement.textContent = 'Good evening! Welcome to my portfolio!';
    }

    document.body.appendChild(greetingElement);
});