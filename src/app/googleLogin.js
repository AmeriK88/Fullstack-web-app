import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
import { auth } from './firebase.js'
import { showMessage } from './showMessage.js'

// Event listener para el botón de acceso con Google en el formulario de inicio de sesión
const googleButtonLogin = document.querySelector('#googleLogin');
googleButtonLogin.addEventListener('click', async () => {
    const provider = new GoogleAuthProvider();

    try {
        const credentials = await signInWithPopup(auth, provider);

        const modal = bootstrap.Modal.getInstance(document.querySelector('#signinModal'));
        if (modal) {
            modal.hide();
        }

        if (credentials && credentials.user && credentials.user.displayName) {
            showMessage('¡Bienvenido ' + credentials.user.displayName + '!');
        } else {
            showMessage('Inicio de sesión exitoso.');
        }
    } catch (error) {
        console.error('Error al iniciar sesión con Google:', error.message);
        showMessage('Error al iniciar sesión con Google. Por favor, inténtalo de nuevo más tarde.', 'error');
    }
});

// Event listener para el botón de acceso con Google en el formulario de registro
const googleButtonSignup = document.querySelector('#googleSignup');
googleButtonSignup.addEventListener('click', async () => {
    const provider = new GoogleAuthProvider();

    try {
        const credentials = await signInWithPopup(auth, provider);

        const modal = bootstrap.Modal.getInstance(document.querySelector('#signupModal'));
        if (modal) {
            modal.hide();
        }

        if (credentials && credentials.user && credentials.user.displayName) {
            showMessage('¡Bienvenido ' + credentials.user.displayName + '!');
        } else {
            showMessage('Inicio de sesión exitoso.');
        }
    } catch (error) {
        console.error('Error al iniciar sesión con Google:', error.message);
        showMessage('Error al iniciar sesión con Google. Por favor, inténtalo de nuevo más tarde.', 'error');
    }
});





