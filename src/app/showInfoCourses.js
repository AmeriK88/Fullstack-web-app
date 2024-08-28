export function showInfoCourses(needLogin = false) {
    const urlParams = new URLSearchParams(window.location.search);
    const courseId = urlParams.get('course');

    const courses = {
        '1': {
            nombre: 'Curso 1',
            descripcion: 'Hola, esta es la descripción del Curso 1.',
            imagenURL: 'images/curso1.jpg'
        },
        '2': {
            nombre: 'Curso 2',
            descripcion: 'Esta es la descripción del Curso 2.',
            imagenURL: 'images/curso2.png'
        },
        // Agrega más cursos según sea necesario
    };

    const courseInfoId = courses[courseId];

    if (needLogin) {
        // Mostrar el modal de inicio de sesión si es necesario
        const modal = new bootstrap.Modal(document.querySelector('#signinModal'));
        modal.show();
        return;
    }

    if (courseInfoId && window.location.pathname.includes('courses.html')) {
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
        const courseInfoContainer = document.getElementById('course-info');
        if (courseInfoContainer) {
            courseInfoContainer.innerHTML = `<p>No se encontró información para el curso ${courseId}</p>`;
        }
    }
}
