const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let drops = [];

class Drop {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.len = Math.random() * 80 + 80;
    this.speed = Math.random() * 2 + 3;
    this.size = Math.random() * 3 + 1;
  }

  update() {
    this.y += this.speed;

    if (this.y > canvas.height) {
      this.y = Math.random() * -canvas.height;
      this.x = Math.random() * canvas.width;
    }
  }

  draw() {
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x, this.y + this.len);
    ctx.strokeStyle = "#03a9f4";
    ctx.lineWidth = this.size;
    ctx.stroke();
  }
}

function createDrops(num) {
  for (let i = 0; i < num; i++) {
    drops.push(new Drop());
  }
}

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < drops.length; i++) {
    drops[i].update();
    drops[i].draw();
  }
}

createDrops(50);
animate();

function createLightning() {
  const flash = document.createElement("div");
  flash.classList.add("flash");
  document.body.appendChild(flash);
  setTimeout(() => {
    flash.remove();
  }, 500);
}

setInterval(() => {
  const chance = Math.random();
  if (chance < 0.05) {
    createLightning();
  }
}, 5000);
