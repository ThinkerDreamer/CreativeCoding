smileBtn = document.querySelector("#smile-btn");
imageDiv = document.querySelector('.image-div');
waitDiv = document.querySelector("#wait-div");

smileBtn.addEventListener("click", function(e) {
    e.preventDefault();
    waitDiv.style.display = "block";
    if (imageDiv.firstChild) {
        imageDiv.removeChild(imageDiv.firstChild);
    }
    fetch(
      "https://api.unsplash.com/photos/random?client_id=n9Daz6fSXsgIR1htycGsNjB0kmUjSvErWlyYVn1_mhs&query=cute%20happy"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const image = new Image();
        image.src = data.urls.full;
        imageDiv.appendChild(image);
      })
      .then(() =>
        setTimeout(() => {
          waitDiv.style.display = "none";
        }, 500)
      )
});