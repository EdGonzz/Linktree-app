console.log('Hello World from Webpack!');

// You can add your JavaScript code here
document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');
    if (app) {
        app.innerHTML = '<h1>Webpack App</h1><p>Your webpack configuration is working!</p>';
    }
});
