const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 320;
canvas.height = 480;

let birdImage = new Image();
let pipeImage = new Image();
birdImage.src = 'data:image/jpeg;base64,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'; // Cambia esto por la ruta de tu imagen de pájaro
pipeImage.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALcAAAETCAMAAABDSmfhAAAAIVBMVEX/1wAAV7f/2wAAULugnnMmZLP/2iYAT7wRXrelpHf/3hzvtCZHAAAA6UlEQVR4nO3ONwEAMAADoO7lX3BV5AMFlBrTRys53t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t4ZO/qeMee+FfMBEK1t9CNR05YAAAAASUVORK5CYII='; // Cambia esto por la ruta de tu imagen de columnas

let bird = {
    x: 50,
    y: 150,
    width: 40, // Ajusta el tamaño a la imagen del pájaro
    height: 40, // Ajusta el tamaño a la imagen del pájaro
    velocity: 0,
    gravity: 0.5,
    jumpPower: -8.5,
};

let pipes = [];
let pipeWidth = 50;
let pipeGap = 150;
let pipeFrequency = 90;
let frame = 0;

let isGameOver = false;
let score = 0; // Variable para almacenar los puntos

function drawBird() {
    ctx.drawImage(birdImage, bird.x, bird.y, bird.width, bird.height);
}

function drawPipes() {
    pipes.forEach((pipe, index) => {
        ctx.drawImage(pipeImage, pipe.x, 0, pipeWidth, pipe.topHeight);
        ctx.drawImage(pipeImage, pipe.x, pipe.bottomY, pipeWidth, canvas.height - pipe.bottomY);
        pipe.x -= 2; // Velocidad de los tubos

        // Eliminar tubos que ya han salido de la pantalla
        if (pipe.x + pipeWidth < 0) {
            pipes.splice(index, 1);
        }
    });
}

function generatePipe() {
    if (frame % pipeFrequency === 0 && !isGameOver) {
        let pipeTopHeight = Math.floor(Math.random() * (canvas.height - pipeGap));
        let pipeBottomY = pipeTopHeight + pipeGap;

        pipes.push({
            x: canvas.width,
            topHeight: pipeTopHeight,
            bottomY: pipeBottomY,
            passed: false, // Añadido para saber si el pájaro ha pasado el tubo
        });
    }
}

function moveBird() {
    bird.velocity += bird.gravity;
    bird.y += bird.velocity;

    // Si el pájaro toca el suelo
    if (bird.y + bird.height > canvas.height) {
        bird.y = canvas.height - bird.height; // Evitar que se pase por debajo
        bird.velocity = 100;
        isGameOver = true;
    }
}

function detectCollisions() {
    pipes.forEach(pipe => {
        if (bird.x + bird.width > pipe.x && bird.x < pipe.x + pipeWidth) {
            if (bird.y < pipe.topHeight || bird.y + bird.height > pipe.bottomY) {
                isGameOver = true; // El pájaro ha chocado con un tubo
            }
        }
    });
}

function updateScore() {
    // Comprobar si el pájaro ha pasado un tubo
    pipes.forEach(pipe => {
        if (!pipe.passed && bird.x + bird.width > pipe.x + pipeWidth) {
            score++; // Incrementar los puntos
            pipe.passed = true; // Marcar como pasado
        }
    });
}

function drawScore() {
    ctx.font = "20px Arial";
    ctx.fillStyle = "#000";
    ctx.fillText("Puntos: " + score, 10, 30); // Mostrar el marcador
}

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawBird();
    drawPipes();
    drawScore(); // Dibujar los puntos

    moveBird();
    generatePipe();
    detectCollisions();
    updateScore(); // Actualizar los puntos si el pájaro pasa un tubo

    if (isGameOver) {
        gameOver();
    } else {
        frame++;
        requestAnimationFrame(update);
    }
}

function gameOver() {
    ctx.font = "30px Arial";
    ctx.fillStyle = "#FF0000";
    ctx.fillText("GAME OVER", 80, canvas.height / 2);
    ctx.fillText("Press R to Restart", 60, canvas.height / 2 + 40);
}

document.addEventListener("keydown", (e) => {
    if (e.code === "Space" && !isGameOver) {
        bird.velocity = bird.jumpPower;
    } else if (e.code === "KeyR" && isGameOver) {
        // Reiniciar el juego
        isGameOver = false;
        bird.y = 150;
        bird.velocity = 0;
        pipes = [];
        score = 0; // Reiniciar los puntos
        frame = 0;
        update();
    }
});

update();
