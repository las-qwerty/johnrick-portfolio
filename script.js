// Get the modal
var modal = document.getElementById("myModal");

// Get all images within the gallery and bind click event function
var imgs = document.querySelectorAll(".gallery figure img");
for (let img of imgs) {
    img.onclick = function (evt) {
        modal.style.display = "block";
        document.getElementById("img01").src = this.src;
        document.getElementById("caption").innerHTML = this.alt;
    };
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
