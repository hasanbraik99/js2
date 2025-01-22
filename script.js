async function getPost() {

    const info = await fetch (`https://jsonplaceholder.typicode.com/users`);
    const data = await info.json();

    const result = data.map (function (post){

        return `
            <div class="user">            
            <div class="container">
            <div class="row">
                <h2>${post.id}</h2>
                <p>${post.name} </p>
                <p>${post.username} </p>
                <p>${post.email} </p>
                <p>${post.address} </p>
                <p>${post.geo} </p>
                <p>${post.phone} </p>
                <p>${post.website} </p>
                <p>${post.company} </p>
                    </div>
                </div>
            </div>        
        `


    }).join('');

    document.querySelector(".posts").innerHTML = result;

}

getPost();