import { auth, db } from './app/firebase.js';
import { loginCheck } from './app/loginCheck.js';
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
import { getDocs, collection } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js"
import './app/signupForm.js';
import './app/signinForm.js';
import './app/logout.js';
import './app/googleLogin.js'
import { setupPosts } from './app/postList.js'
import { showInfoCourses } from './app/showInfoCourses.js';



onAuthStateChanged(auth, async (user) => {
    if (user) {
        try {
            const querySnapshot = await getDocs(collection(db, 'posts'));
            setupPosts(querySnapshot.docs);
            showInfoCourses();
        } catch (error) {
            console.error("Error fetching posts:", error);
        }
    } else {
        setupPosts([]);
        showInfoCourses(true);
    }
    loginCheck(user);
});