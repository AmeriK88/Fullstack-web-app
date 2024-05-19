const loggedOutLinks = document.querySelectorAll('.logged-out')
const loggedInLinks = document.querySelectorAll('.logged-in')

export const loginCheck = user => {
    if (user) {
        loggedInLinks.forEach(link => link.style.display = 'block')
        loggedOutLinks.forEach(link => link.style.display = 'none')
        loggedInLinks.forEach(link => {
            if (link.classList.contains('logged-out')) {
                link.style.display = 'block';
            }
        });
    } else {
        loggedInLinks.forEach(link => link.style.display = 'none')
        loggedOutLinks.forEach(link => link.style.display = 'block')
        loggedOutLinks.forEach(link => {
            if (link.classList.contains('logged-in')) {
                link.style.display = 'block';
            }
        });
    }
}