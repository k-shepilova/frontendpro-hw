const url = 'https://jsonplaceholder.typicode.com';
const postsList = document.querySelector('#postsList');
const postId = document.querySelector('#postId');
const searchBtn = document.querySelector('#searchBtn');
const result = document.querySelector('#result');

function getAllPosts() {
    fetch(`${url}/posts`)
        .then(response => {
            if (!response.ok) {
                postsList.innerText = 'Invalid request or posts not found.';
                return;
            }
            return response.json();
        })
        .then(data => {
            if (data) {
                showAllPosts(data);
            }
        })
        .catch(error => postsList.innerText = 'Error posts loading.');
}

function showAllPosts(postsArr) {
    postsList.innerHTML = '';
    postsArr.forEach(post => {
        const tempPost = document.createElement('div');
        tempPost.innerText = post.title;
        tempPost.classList.add('post');
        postsList.appendChild(tempPost);
    })
}

function fetchPost(id) {
    result.innerHTML = '';

    if (id < 1 || id > 100) {
        result.innerText = 'Invalid post ID. ID must be between 1 and 100.';
        return;
    }
    fetch(`${url}/posts/${id}`)
        .then(response => {
            if (!response.ok) {
                result.innerText = 'Invalid request or post not found.';
                return;
            }
            return response.json();
        })
        .then(data => {
            if (data) {
                displayPost(data);
            }
        })
        .catch(error => result.innerText = 'Error posts loading.');
}

function displayPost(data) {
    const post = document.createElement('div');
    const postTitle = document.createElement('div');
    const postBody = document.createElement('div');
    const commentsBtn = document.createElement('button');

    post.classList.add('current-post');
    postTitle.classList.add('title');
    postTitle.innerText = data.title;
    postBody.innerText = data.body;
    commentsBtn.classList.add('commentsBtn');
    commentsBtn.innerText = 'Show Comments';
    commentsBtn.addEventListener('click', () => fetchPostComments(data.id));

    post.append(postTitle, postBody, commentsBtn);
    result.appendChild(post);
}

function fetchPostComments(id) {
    fetch(`${url}/posts/${id}/comments`)
        .then(response => {
            if (!response.ok) {
                result.innerText = 'Invalid request or comments not found.';
                return;
            }
            return response.json();
        })
        .then(data => {
            if (data) {
                displayComments(data);
            }
        })
        .catch(error => result.innerText = 'Error comments loading.');
}

function displayComments(comments) {
    const ul = document.createElement('ul');
    comments.forEach(comment => {
        const li = document.createElement('li');
        li.innerHTML = `
            <div class="email">${comment.email}</div>
            <div class="name">${comment.name}</div>
            <div>${comment.body}</div>`;
        ul.appendChild(li);
    });
    result.appendChild(ul);
}

getAllPosts();

searchBtn.addEventListener('click', () => {
    fetchPost(postId.value);
})

