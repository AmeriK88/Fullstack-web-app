import { signOut } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js"
import { auth } from './firebase.js'
import { showMessage } from './showMessage.js'

const logout = document.querySelector('#logout');

logout.addEventListener('click', async () => {
    const user = auth.currentUser;
    if (user) {
        await signOut(auth);
        console.log('Sesión cerrada');
        if (user.displayName) {
            showMessage("Hasta luego " + user.displayName + "!");
        } else {
            showMessage("Sesión cerrada");
        }
    } else {
        console.log('No hay usuario autenticado');
    }
 });
 