const getPosts = () => {
    fetch('/api/posts')
        .then(response => response.json())
        .then(displayPosts);
};
const toHTMLElement = (post) => {
    // formatting the date:
    const options = { 
        weekday: 'long', year: 'numeric', 
        month: 'long', day: 'numeric' 
    };
    const dateFormatted = new Date(post.published).toLocaleDateString('en-US', options);
    
    return `
        <section class="post">
            <h2>${post.title}</h2>
            <div class="date">${dateFormatted}</div>
            <p>
                <strong>Author: </strong>${post.author}
            </p>
            <a class="detail-link" href="/post/#${post.id}">more...</a>
        </section>
    `;
}
const displayPosts = (data) => {
    const entries = [];
    for (const post of data) {
        entries.push(toHTMLElement(post));
    }
    document.querySelector('#posts').innerHTML = entries.join('\n');
}

getPosts();