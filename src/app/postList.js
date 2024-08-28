const postList = document.querySelector('.posts')


export const setupPosts = (data) => {
    if (data.length && window.location.pathname.includes('index.html')) {
        let html = ''

        data.forEach(doc => {
            console.log(doc)
            const post = doc.data()
            const li =
            `
            <li class="list-group-item list-group-item-action  ">
                <h4>${post.title}</h4>
                <p>${post.content}</p>
            </li>
            `

            html += li
        })
        postList.innerHTML = html
    } else if (!data.length && window.location.pathname.includes('index.html')) {
        postList.innerHTML = '<h3> Inicie sesión para ver las publicaciones </h3>'
    }
}