import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
import { auth } from './firebase.js'
import { showMessage } from './showMessage.js'


const signInForm = document.querySelector('#login-form');

signInForm.addEventListener('submit', async e => {
    e.preventDefault()

    const email = signInForm['login-email'].value;
    const password = signInForm['login-password'].value;
   

    try {
        const credentials = await signInWithEmailAndPassword(auth, email, password);
        const modal = bootstrap.Modal.getInstance(document.querySelector('#signinModal'));
        modal.hide();
            
        // Mostrar mensaje de bienvenida con el nombre de usuario
        showMessage("¡Bienvenido " + credentials.user.displayName + "!");
    } catch (error) {

        if (error.code === 'auth/invalid-email') {
            showMessage('¡Ups! Email inválido', 'error');
        } else if (error.code === 'auth/user-disabled') {
            showMessage('¡Ups! Usuario deshabilitado', 'error');
        } else if (error.code === 'auth/user-not-found') {
            showMessage('¡Ups! Usuario no encontrado', 'error');
        } else if (error.code === 'auth/wrong-password') {
            showMessage('¡Ups! Contraseña incorrecta', 'error');
        } else if (error.code){
            showMessage('Error al iniciar sesión', 'error');
        }
    }
});