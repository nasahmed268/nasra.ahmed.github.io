function myFunction() {
    var userName = prompt("Please enter your name:");
    if (userName) {
        document.getElementById("nameDisplay").innerHTML = "Hello, " + userName;
    } else {
        document.getElementById("nameDisplay").innerHTML = "No name entered.";
    }
}

function enlargeImage() {
    var img = document.getElementById("myImage");
    if (img.style.width === "200px") {
        img.style.width = "400px";
    } else {
        img.style.width = "200px";
    }
}

function mOver(some_tag) {
    some_tag.innerHTML = "Thank You!";
    some_tag.style.color = "blue";
}

function mOut(some_tag) {
    some_tag.innerHTML = "Mouse Over Me";
    some_tag.style.color = "orange";
}

function toggleDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

