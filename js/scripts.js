const inputField = document.getElementById('console-input');
const consoleBody = document.getElementById('console-body');

inputField.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        const userInput = inputField.value.trim();
        if (userInput) {
            displayUserCommand(userInput);
            processCommand(userInput);
            inputField.value = '';
        }
    }
});

function displayUserCommand(command) {
    const userLine = document.createElement('p');
    userLine.classList.add('console-line');
    userLine.textContent = `TitoCarlos@Portfolio:~$ ${command}`;
    consoleBody.appendChild(userLine);
    consoleBody.scrollTop = consoleBody.scrollHeight;  // Scroll to the bottom
}

function processCommand(command) {
    const responseLine = document.createElement('p');
    responseLine.classList.add('console-line');

    switch (command.toLowerCase()) {
        case 'help':
            responseLine.textContent = 'Available commands: help, projects, technologies, contact';
            break;
        case 'projects':
            responseLine.textContent = 'Listing all projects...';
            break;
        case 'technologies':
            responseLine.textContent = 'Here are the technologies I use...';
            break;
        case 'contact':
            responseLine.textContent = 'You can contact me at titocarlos080@gmail.com';
            break;
        default:
            responseLine.textContent = 'Command not recognized. Type "help" for a list of available commands.';
            break;
    }


    consoleBody.appendChild(responseLine);
    consoleBody.scrollTop = consoleBody.scrollHeight;  // Scroll to the bottom
}

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
                     <div class="project-links">
                ${project.git ? `<a href="${project.git}" target="_blank"><i class="fab fa-github"></i> GitHub</a>` : ''}
                ${project.web_site ? `<a href="${project.web_site}" target="_blank"><i class="fas fa-globe"></i> Sitio Web</a>` : ''}
            </div>
                `;
                projectsList.appendChild(projectItem);
            });
        })
        .catch(error => console.error('Error loading data:', error));
}










function lluvia_cod() {
    // Call the function to start capturing the pointer position
    const canvas = document.getElementById('code-rain');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789SDFG456ASABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789SDFG456AS';
    const fontSize = 13;
    let columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(0);

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'rgba(0, 255, 0, 0.8)'; // Color of the code rain
        ctx.font = `${fontSize}px monospace`;

        for (let i = 0; i < drops.length; i++) {
            const text = characters[Math.floor(Math.random() * characters.length)];
            const x = i * fontSize;
            const y = drops[i] * fontSize;

            ctx.fillText(text, x, y);

            if (y > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            } else {
                drops[i]++;
            }
        }
    }

    setInterval(draw, 33);

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}


document.addEventListener("DOMContentLoaded", () => {
    loadPortfolioData();
   // lluvia_cod();

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



