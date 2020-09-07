// forms.js
//

let assetForm = document.getElementById("assetForm");

assetForm.addEventListener("submit", (e) => {
    e.preventDefault();
    //console.log("Something");

    const request = new XMLHttpRequest();

    request.open("post", "http://localhost:3000/asset.php", true);
    request.onload = function () {
        console.log(request.responseText);
    }
    
    request.send(new FormData(assetForm));
    
});

