// API interaction functions
async function fetchAPI(endpoint) {
    const responseBox = document.getElementById('api-response');
    
    // Show loading state
    responseBox.innerHTML = '<div class="loading"></div>';
    
    try {
        const response = await fetch(endpoint);
        const data = await response.json();
        
        // Display formatted response
        responseBox.innerHTML = `
            <strong>Response from ${endpoint}:</strong><br><br>
            ${JSON.stringify(data, null, 2)}
        `;
        responseBox.style.color = '#28a745';
        responseBox.style.borderColor = '#28a745';
    } catch (error) {
        responseBox.innerHTML = `
            <strong>Error:</strong><br><br>
            ${error.message}
        `;
        responseBox.style.color = '#dc3545';
        responseBox.style.borderColor = '#dc3545';
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    const helloBtn = document.getElementById('hello-btn');
    const statusBtn = document.getElementById('status-btn');
    
    helloBtn.addEventListener('click', () => {
        fetchAPI('/api/hello');
    });
    
    statusBtn.addEventListener('click', () => {
        fetchAPI('/api/status');
    });
    
    // Add some interactive animations
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.background = 'linear-gradient(135deg, #667eea, #764ba2)';
            this.style.color = 'white';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.background = 'linear-gradient(135deg, #f8f9fa, #e9ecef)';
            this.style.color = '';
        });
    });
    
    // Add welcome message
    console.log('🚀 TypeScript Server is running!');
    console.log('Try clicking the API buttons to test the endpoints.');
});