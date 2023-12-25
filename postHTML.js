import { fetchPosts } from './index.js'

const result = fetchPosts();

console.log(result)


const largeHTMLContent = `
    <div class="post">
        <h1>Welcome to my website</h1>
        <p>This is a large block of HTML content.</p>
        <!-- More HTML content here -->
    </div>
`;

const divContainer = document.getElementsByClassName("post-wrapper")[0];

divContainer.innerHTML += largeHTMLContent;

console.log(divContainer)


