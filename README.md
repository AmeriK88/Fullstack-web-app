# Proyecto de Landing Page y Sistema de Autenticación
  Este proyecto consiste en una Landing Page con animaciones, así como un sistema de autenticación para manejar el acceso de usuarios al contenido y a las funcionalidades de la página.

## Contenido del Proyecto

  El proyecto está estructurado en los siguientes archivos y carpetas:
  
  landing.html: Accesio al contenido mediante un botón con efecto glow y animaciones.

  index.html: Este archivo contiene la estructura principal de la Landing Page, incluyendo la información sobre el autor, una galería de cursos premium disponibles, y un formulario de contacto.
  
  courses.html: Aquí se muestra la información detallada de los cursos premium disponibles, incluyendo imágenes y descripciones.
  
  main.css: Archivo CSS que contiene los estilos principales para la apariencia de la página.
  
  main.js: Archivo JavaScript que contiene la lógica principal para la autenticación de usuarios, manejo de formularios y mensajes de bienvenida.
  
  firebase.js: Contiene la configuración y la inicialización de Firebase, así como las referencias a los servicios de autenticación y base de datos Firestore. (He actualizado el nombre a firebaseNot ya que tendrán que añadir los vuestros de firebase)
  
  showMessage.js: Archivo JavaScript que define una función para mostrar mensajes en forma de notificaciones en la página.
  
  showInfoCourses.js: Archivo Javascript donde se definen los cursos (nombre, descriptción, img) y se muestran según la selección del usuario.

  postList.js: Archivo Javascript que muestra las publicaciones generadas en el index.html si el usuario está registrado y autenticado.

  logout.js: Archivo Javascript que contiene la lógica para el cierre de sesión.

  loginCheck.js: Archivo Javascript que contiene la lógica para mostrar los links de la navegación según el usuario esté autenticado.

  googleLogin.js: Archivo Javascript que contiene la lógica para iniciar sesión mediante Google.
  

## Funcionalidades Destacadas

  Autenticación de Usuarios: Se permite a los usuarios registrarse e iniciar sesión utilizando su correo electrónico y contraseña, así como también mediante su cuenta de Google.
  
  Seguridad de la Información: La información de los usuarios se almacena de manera segura en Firebase, utilizando sus servicios de autenticación y Firestore para manejar los datos.
  
  Personalización de la Experiencia: Se muestra un mensaje de bienvenida personalizado después de iniciar y cerrar sesión, con el nombre del usuario.
  
  Promoción de Cursos Premium: Se ofrece una galería de cursos premium con imágenes y descripciones al acceder.

## Configuración y Uso
  Para utilizar este proyecto, se debe seguir los siguientes pasos:
    Configurar un proyecto en Firebase y obtener las credenciales correspondientes (API Key, Auth Domain, etc.).
    Reemplazar las credenciales en el archivo firebase.js.
