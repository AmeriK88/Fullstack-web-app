export function showInfoCourses() {
    // Captura el parámetro "curso" de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const courseId = urlParams.get('course');

    // Define un objeto que mapea cursoId a la información del curso
    const courses = {
        '1': {
            nombre: 'Curso 1',
            descripcion: 'Hola, esta es la descripción del Curso 1. Conócete antes de que sea tarde. Aquí veremos una sección de mi',
            imagenURL: 'images/curso1.jpg'
        },
        '2': {
            nombre: 'Curso 2',
            descripcion: 'Esta es la descripción del Curso 2.',
            imagenURL: 'images/curso2.png'
        },
        '3': {
            nombre: 'Curso 3',
            descripcion: 'Esta es la descripción del Curso 3.',
            imagenURL: 'images/curso3.png'
        },
        '4': {
            nombre: 'Curso 4',
            descripcion: 'Esta es la descripción del Curso 4.',
            imagenURL: 'images/curso4.png'
        },
        '5': {
            nombre: 'Curso 5',
            descripcion: 'Esta es la descripción del Curso 5.',
            imagenURL: 'images/curso5.jpg'
        },
        '6': {
            nombre: 'Curso 6',
            descripcion: 'Esta es la descripción del Curso 6.',
            imagenURL: 'images/curso6.png'
        },                                                  
        // Agrega más cursos según sea necesario
    };

    // Obtén la información del curso correspondiente
    const courseInfoId = courses[courseId];

    // Verifica si el curso existe y si la página actual es courses.html
    if (courseInfoId && window.location.pathname.includes('courses.html')) {
        // Muestra la información del curso en el contenedor correspondiente
        const courseInfoContainer = document.getElementById('course-info');
        if (courseInfoContainer) {
            courseInfoContainer.innerHTML = ` 
                <div class="container pt-5">
                    <div class="row justify-content-center">
                        <div class="col-md-6 col-sm-12 text-center">
                            <img src="${courseInfoId.imagenURL}" alt="Imagen curso">
                            <h3>${courseInfoId.nombre}</h3>
                            <p>${courseInfoId.descripcion}</p>
                        </div>
                    </div>
                </div>
            `;
        }
    } else if (!courseInfoId && window.location.pathname.includes('courses.html')) {
        // Si el curso no existe y la página actual es courses.html, muestra un mensaje de error
        const courseInfoContainer = document.getElementById('course-info');
        if (courseInfoContainer) {
            courseInfoContainer.innerHTML = `<p>No se encontró información para el curso ${courseId}</p>`;
        }
    }
}
