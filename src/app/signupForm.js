import { createUserWithEmailAndPassword, updateProfile } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
import { auth } from './firebase.js'
import { showMessage } from "./showMessage.js";
// https://firebase.google.com/docs/web/setup#available-libraries

const signupForm = document.querySelector('#signup-form');

signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;
    const displayName = signupForm['signup-name'].value;

    try {
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password);

        // Actualizar el perfil del usuario con el nombre de usuario
        await updateProfile(userCredentials.user, {
            displayName: displayName
        });

        // Cerrar ventana modal registro
        const signupModal = document.querySelector('#signupModal');
        const modal = bootstrap.Modal.getInstance(signupModal);
        modal.hide();

        // Mostrar mensaje de bienvenida con el nombre de usuario
        showMessage("¡Bienvenido " + userCredentials.user.displayName + "!");
      
    } catch (error) {
        
        if (error.code === 'auth/email-already-in-use') {
            showMessage('¡Ups! Este email ya tiene una cuenta asociada', 'error');
        } else if (error.code === 'auth/invalid-email') {
            showMessage('¡Ups! Email inválido', 'error');
        } else if (error.code === 'auth/weak-password') {
            showMessage('¡Ups! Contraseña demasiado débil', 'error');
        } else if (error.code) {
            showMessage('Error al generar cuenta. Intente nuevamente', 'error');
        }
    }
});


