# Snake Game in Markdown

This example demonstrates how to embed an interactive Snake game directly in your Sphinx documentation using Markdown.

<div class="game-container">
    <canvas id="snakeCanvas" width="400" height="400"></canvas>
    <div class="game-controls">
        <div class="score">Score: <span id="score">0</span></div>
        <button id="startButton">Start Game</button>
        <div class="instructions">
            <p>Use arrow keys to move the snake.</p>
            <p>Eat the red food to grow and earn points.</p>
            <p>Don't hit the walls or yourself!</p>
        </div>
    </div>
</div>

<style>
.game-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 0;
}

#snakeCanvas {
    border: 2px solid #333;
    background-color: #f8f8f8;
}

.game-controls {
    margin-top: 15px;
    text-align: center;
    width: 400px;
}

.score {
    font-size: 20px;
    margin-bottom: 10px;
    font-weight: bold;
}

#startButton {
    padding: 8px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 16px;
    border-radius: 4px;
    margin-bottom: 15px;
}

#startButton:hover {
    background-color: #45a049;
}

.instructions {
    margin-top: 15px;
    padding: 10px;
    background-color: #f1f1f1;
    border-radius: 4px;
}

.instructions p {
    margin: 5px 0;
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
    // Get the canvas and context
    const canvas = document.getElementById('snakeCanvas');
    const ctx = canvas.getContext('2d');
    
    // Game variables
    const gridSize = 20;
    const gridWidth = canvas.width / gridSize;
    const gridHeight = canvas.height / gridSize;
    
    let snake = [];
    let food = {};
    let direction = 'right';
    let nextDirection = direction;
    let score = 0;
    let gameSpeed = 150;
    let gameRunning = false;
    let gameLoop;
    
    const startButton = document.getElementById('startButton');
    const scoreDisplay = document.getElementById('score');
    
    // Initialize game
    function initGame() {
        // Reset game state
        snake = [
            {x: 7, y: 10},
            {x: 6, y: 10},
            {x: 5, y: 10}
        ];
        direction = 'right';
        nextDirection = direction;
        score = 0;
        scoreDisplay.textContent = score;
        
        // Generate initial food
        generateFood();
        
        // Start game loop
        if (gameLoop) clearInterval(gameLoop);
        gameRunning = true;
        gameLoop = setInterval(update, gameSpeed);
        
        // Update button text
        startButton.textContent = 'Restart Game';
    }
    
    // Generate food at random position
    function generateFood() {
        // Find a position not occupied by the snake
        let foodPosition;
        do {
            foodPosition = {
                x: Math.floor(Math.random() * gridWidth),
                y: Math.floor(Math.random() * gridHeight)
            };
        } while (snake.some(segment => segment.x === foodPosition.x && segment.y === foodPosition.y));
        
        food = foodPosition;
    }
    
    // Update game state
    function update() {
        // Move snake
        const head = {x: snake[0].x, y: snake[0].y};
        
        // Update direction
        direction = nextDirection;
        
        // Update head position based on direction
        switch(direction) {
            case 'up':
                head.y--;
                break;
            case 'down':
                head.y++;
                break;
            case 'left':
                head.x--;
                break;
            case 'right':
                head.x++;
                break;
        }
        
        // Check for collisions with walls
        if (head.x < 0 || head.y < 0 || head.x >= gridWidth || head.y >= gridHeight) {
            gameOver();
            return;
        }
        
        // Check for collisions with self
        if (snake.some(segment => segment.x === head.x && segment.y === head.y)) {
            gameOver();
            return;
        }
        
        // Move snake forward
        snake.unshift(head);
        
        // Check for food collision
        if (head.x === food.x && head.y === food.y) {
            // Increase score
            score++;
            scoreDisplay.textContent = score;
            
            // Generate new food
            generateFood();
            
            // Increase speed slightly
            if (gameSpeed > 50 && score % 5 === 0) {
                clearInterval(gameLoop);
                gameSpeed -= 10;
                gameLoop = setInterval(update, gameSpeed);
            }
        } else {
            // Remove tail segment
            snake.pop();
        }
        
        // Render the updated state
        render();
    }
    
    // Render the game
    function render() {
        // Clear canvas
        ctx.fillStyle = '#f8f8f8';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Draw snake
        snake.forEach((segment, index) => {
            // Head is darker green, body is lighter green
            ctx.fillStyle = index === 0 ? '#2e8b57' : '#3cb371';
            ctx.fillRect(segment.x * gridSize, segment.y * gridSize, gridSize - 1, gridSize - 1);
        });
        
        // Draw food
        ctx.fillStyle = '#ff4500';
        ctx.fillRect(food.x * gridSize, food.y * gridSize, gridSize - 1, gridSize - 1);
    }
    
    // Game over
    function gameOver() {
        gameRunning = false;
        clearInterval(gameLoop);
        
        // Display game over message
        ctx.fillStyle = 'rgba(0, 0, 0, 0.75)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#fff';
        ctx.font = '30px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Game Over', canvas.width / 2, canvas.height / 2 - 15);
        ctx.font = '20px Arial';
        ctx.fillText(`Score: ${score}`, canvas.width / 2, canvas.height / 2 + 20);
    }
    
    // Handle keyboard input
    document.addEventListener('keydown', function(e) {
        if (!gameRunning) return;
        
        switch(e.key) {
            case 'ArrowUp':
                if (direction !== 'down') nextDirection = 'up';
                e.preventDefault();
                break;
            case 'ArrowDown':
                if (direction !== 'up') nextDirection = 'down';
                e.preventDefault();
                break;
            case 'ArrowLeft':
                if (direction !== 'right') nextDirection = 'left';
                e.preventDefault();
                break;
            case 'ArrowRight':
                if (direction !== 'left') nextDirection = 'right';
                e.preventDefault();
                break;
        }
    });
    
    // Start button click handler
    startButton.addEventListener('click', initGame);
    
    // Initial render
    render();
});
</script>

## How It Works

This Snake game demonstrates how advanced interactive content can be embedded directly in your Sphinx documentation:

1. **HTML Structure**: A canvas element for the game board and controls.
2. **CSS Styling**: Makes the game visually appealing and responsive.
3. **JavaScript Logic**: Implements the game mechanics:
   - Snake movement and direction control
   - Food generation and collision detection
   - Score tracking and game over conditions
   - Keyboard event handling

## Integration in Documentation

This example shows how interactive elements can enhance documentation:

- **Demos**: Show interactive examples of your code or concepts
- **Tutorials**: Create interactive step-by-step guides
- **Simulations**: Help users understand complex processes visually
- **Games**: Keep readers engaged with entertaining content

## Technical Implementation

The game uses pure JavaScript with no external dependencies, making it fully compatible with Sphinx documentation:

- Canvas API for rendering the game
- Event listeners for keyboard input
- SetInterval for the game loop
- DOM manipulation for updating the score
