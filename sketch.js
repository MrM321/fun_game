let emoji = "😂";
let x, y, speedX, speedY;

function setup() {
    createCanvas(800, 600);
    x = width / 2;
    y = height / 2;
    speedX = random(-5, 5);
    speedY = random(-5, 5);
    textSize(50);
}

function draw() {
    background("#87CEEB");  // Light blue background
    fill(255);
    text(emoji, x, y);

    // Make the emoji move around
    x += speedX;
    y += speedY;

    // Bounce when hitting screen edges
    if (x < 0 || x > width) speedX *= -1;
    if (y < 0 || y > height) speedY *= -1;
}

function mousePressed() {
    emoji = random(["😂", "🤖", "🐸", "🍕", "🚀"]);
}
