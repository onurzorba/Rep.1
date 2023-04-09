let canvas, ctx;
let raindrops = [];
let lightningTimer = 0;
let lightningActive = false;
let lightningOpacity = 0;

function createRaindrops() {
  for (let i = 0; i < 100; i++) {
    let raindrop = {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      length: Math.random() * 50 + 10,
      speed: Math.random() * 10 + 10
    };
    raindrops.push(raindrop);
  }
}

function animateRaindrops() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < raindrops.length; i++) {
    let raindrop = raindrops[i];
    ctx.beginPath();
    ctx.moveTo(raindrop.x, raindrop.y);
    ctx.lineTo(raindrop.x + raindrop.length * Math.sin(Math.PI/3), raindrop.y + raindrop.length * Math.cos(Math.PI/3));
    ctx.strokeStyle = 'rgba(174, 194, 224, 0.5)';
    ctx.lineWidth = 2;
    ctx.stroke();
    raindrop.y += raindrop.speed;
    if (raindrop.y > canvas.height) {
      raindrop.y = -50;
    }
  }
}

function animateLightning() {
  ctx.fillStyle = `rgba(128, 0, 128, ${lightningOpacity})`;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  lightningTimer--;
  if (lightningTimer <= 0 && !lightningActive) {
    lightningActive = true;
    lightningOpacity = 1;
    lightningTimer = Math.floor(Math.random() * 200) + 100;
  }
  else if (lightningTimer <= 0 && lightningActive) {
    lightningActive = false;
    lightningOpacity = 0;
    lightningTimer = Math.floor(Math.random() * 2000) + 1000;
  }
}

function animate() {
  animateRaindrops();
  animateLightning();
  requestAnimationFrame(animate);
}

function init() {
  canvas = document.getElementById('canvas');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx = canvas.getContext('2d');
  createRaindrops();
  animate();
}

window.onload = init;
