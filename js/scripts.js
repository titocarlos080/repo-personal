
// scripts.js

// Función para cargar y renderizar datos desde un archivo JSON
function loadPortfolioData() {
    
    fetch('/js/data.json')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            
            const technologiesList = document.querySelector('.technologies-list');
            const projectsList = document.querySelector('.projects-list');

            // Renderizar tecnologías
            data.technologies.forEach(tech => {
                const techItem = document.createElement('li');
                techItem.innerHTML = `
                    <h3>${tech.name}</h3>
                    <p>${tech.description}</p>
                `;
                technologiesList.appendChild(techItem);
            });

            // Renderizar proyectos
            data.projects.forEach(project => {
                const projectItem = document.createElement('li');
                projectItem.innerHTML = `
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                `;
                projectsList.appendChild(projectItem);
            });
        })
        .catch(error => console.error('Error loading data:', error));
}

 


document.addEventListener("DOMContentLoaded", () => {
    // Call the function to start capturing the pointer position

    loadPortfolioData();

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



