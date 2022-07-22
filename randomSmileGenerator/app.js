smileBtn = document.querySelector("#smile-btn");
imageDiv = document.querySelector('.image-div');

smileBtn.addEventListener("click", function(e) {
    e.preventDefault();
    if (imageDiv.firstChild) {
        imageDiv.removeChild(imageDiv.firstChild);
    }
    fetch(
        "https://api.unsplash.com/photos/random?client_id=n9Daz6fSXsgIR1htycGsNjB0kmUjSvErWlyYVn1_mhs&query=cute%20happy")
        .then(res => res.json())
        .then(data => {
            imageDiv.innerHTML = "<h2>Please wait...</h2>";
            console.log(data);
            const image = new Image();
            image.src = data.urls.full;
            imageDiv.appendChild(image);
            // imageDiv.innerHTML = `<img src="${data.urls.full}" alt="${data.description}>`;
        })
    });