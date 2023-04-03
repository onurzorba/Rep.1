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

// Draw the lightning bolt on the canvas
function drawLightning(x, y) {
  // Create a gradient for the lightning bolt shine
  var gradient = ctx.createRadialGradient(x, y, 0, x, y, 20);
  gradient.addColorStop(0, "rgba(128, 0, 128, 0.5)");
  gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

  // Draw the lightning bolt
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + 20, y + 40);
  ctx.lineTo(x + 10, y + 40);
  ctx.lineTo(x + 30, y + 80);
  ctx.lineTo(x + 10
