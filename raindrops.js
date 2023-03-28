// Get the canvas element
var canvas = document.getElementById("canvas");

// Set the canvas width and height to the window width and height
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Get the canvas context
var ctx = canvas.getContext("2d");

// Create an array of raindrops
var drops = [];
for (var i = 0; i < 100; i++) {
  drops.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    speed: 2 + Math.random() * 2,
    length: 5 + Math.random() * 10
  });
}

// Draw the raindrops on the canvas
function drawRaindrops() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Loop through the raindrops array
  for (var i = 0; i < drops.length; i++) {
    // Draw the raindrop
    ctx.beginPath();
    ctx.moveTo(drops[i].x, drops[i].y);
    ctx.lineTo(drops[i].x, drops[i].y + drops[i].length);
    ctx.strokeStyle = "#fff";
    ctx.stroke();

    // Move the raindrop down the screen
    drops[i].y += drops[i].speed;

    // If the raindrop reaches the bottom of the screen, reset its position
    if (drops[i].y > canvas.height) {
      drops[i].x = Math.random() * canvas.width;
      drops[i].y = 0;
    }
  }

  // Call this function again to animate the raindrops
  requestAnimationFrame(drawRaindrops);
}

// Call the drawRaindrops function to start the animation
drawRaindrops();
