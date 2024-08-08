document.addEventListener("DOMContentLoaded", () => {
    // Call the function to start capturing the pointer position


})

function estrellar() {
    // Add an event listener to capture mouse movement
    document.addEventListener('mousemove', function (event) {
        // Capture the pointer position
        var x = event.clientX;
        var y = event.clientY;
        dibujarEstrellas(x, y)
        // Do something with the coordinates
        console.log('Pointer position:', x, y);
    });
}

function dibujarEstrellas(x, y) {
    const canvas = document.getElementById('starCanvas');
    const ctx = canvas.getContext('2d');

    // Define the star shape
    const starPoints = 5;
    const outerRadius = 15;
    const innerRadius = 7.5;
    const rotation = Math.PI / 2 * 3;
    let step = Math.PI / starPoints;
    let rot = rotation;
    let cx = x;
    let cy = y;

    ctx.beginPath();
    ctx.moveTo(cx, cy - outerRadius);

    for (let i = 0; i < starPoints; i++) {
        cx = x + Math.cos(rot) * outerRadius;
        cy = y + Math.sin(rot) * outerRadius;
        ctx.lineTo(cx, cy);
        rot += step;

        cx = x + Math.cos(rot) * innerRadius;
        cy = y + Math.sin(rot) * innerRadius;
        ctx.lineTo(cx, cy);
        rot += step;
    }

    ctx.lineTo(x, y - outerRadius);
    ctx.closePath();
    ctx.fillStyle = 'gold';
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.stroke();
}



