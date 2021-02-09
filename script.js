//FORM SUBMISSION
window.addEventListener("DOMContentLoaded", function() {
    //var splide = new Splide('.splide', { type: loop, autoplay: true });

    // splide.on('autoplay:playing', function(rate) {
    //     console.log(rate); // 0-1
    // });
    //splide.mount();
    new Splide('.splide', { autoplay: true, type: "loop" }).mount();

    // get the form elements defined in your form HTML above

    var form = document.getElementById("my-form");
    // var button = document.getElementById("my-form-button");
    var status = document.getElementById("status");

    // Success and Error functions for after the form is submitted

    function success() {
        form.reset();
        status.classList.add("success");
        status.innerHTML = "Thanks! Message Sent";
        setTimeout(() => {
            status.style.display = "none";
        }, 5000)
    }

    function error() {
        status.classList.add("error");
        status.innerHTML = "Oops! There was a problem.";
        setTimeout(() => {
            status.style.display = "none";
        }, 5000)
    }

    // handle the form submission event

    form.addEventListener("submit", function(ev) {
        ev.preventDefault();
        var data = new FormData(form);
        ajax(form.method, form.action, data, success, error);
    });
});

// helper function for sending an AJAX request
function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            success(xhr.response, xhr.responseType);
        } else {
            error(xhr.status, xhr.response, xhr.responseType);
        }
    };
    xhr.send(data);
}

// Variebles

const navbar = document.querySelector(".navbar");
const workLink = document.querySelector(".ourwork-link");
const workbox = document.querySelector(".work");
const qoute = document.querySelector(".qoute__icon");
const removeQoute = document.querySelector(".qoute-pop__cancel");
window.addEventListener("scroll", () => {
    navbar.classList.toggle("sticky", window.scrollY > 500)
})

let test = {
    name: "Mille Gumede",
    img: "person.png",
    descr: "I love what they did withe house it is so clean and well done"
}

const testimonials = [{ name: "Mille", image: "", descr: "I am speechless, this is to much" }, { name: "Sphelele", image: "", descr: "Description 2" }]


workLink.addEventListener("click", () => {
    if (workbox.style.display == "flex") {
        workbox.style.display = "none";
        document.querySelector(".navlinks__icon").style.transform = "rotate(0deg)"
    } else {
        workbox.style.display = "flex"
        document.querySelector(".navlinks__icon").style.transform = "rotate(180deg)"
    }

})
qoute.addEventListener("click", () => {
    // alert("show")
    document.querySelector(".quote-pop").style.display = "block"
    document.querySelector(".quote-pop").style.width = "20rem";
    // document.querySelector(".quote-pop").style.height = "20rem";
})

removeQoute.addEventListener("click", () => {
    document.querySelector(".quote-pop").style.display = "none"
})

// Click the gallery img

let galleryImg = document.getElementsByClassName("gallery-img");

for (img of galleryImg) {
    img.addEventListener("click", function() {
        console.log(document.querySelector(".pop-image"))

        document.querySelector(".pop-image").src = this.src;
        document.querySelector(".display-img").style.display = "block";
    })
}
// Open side navbar
console.log(document.querySelector(".burger-icon"));

document.querySelector(".burger-icon").addEventListener("click", function() {
    document.querySelector(".sidenavbar").style.opacity = "1"
    document.querySelector(".sidenavbar").style.width = "70%";

});

// Close side navbar

document.querySelector(".sidenavbar__icon").addEventListener("click", () => {
    document.querySelector(".sidenavbar").style.width = "0%"
    document.querySelector(".sidenavbar").style.opacity = "0"

});
// Remove the gallery image display

document.querySelector(".remove-display").addEventListener("click", () => {
    document.querySelector(".display-img").style.display = "none"

});