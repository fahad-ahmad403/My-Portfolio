const content_box1 = document.querySelector(".content_box1");
const content_box2 = document.querySelector(".content_box2");
const video1 = document.querySelector("#video1");
const video2 = document.querySelector("#video2");

content_box1.addEventListener("mouseenter", function () {
    video1.play();
});

content_box1.addEventListener("mouseleave", function () {
    video1.pause();
    video1.currentTime = 0;
});

content_box2.addEventListener("mouseenter", function () {
    video2.play();
});

content_box2.addEventListener("mouseleave", function () {
    video2.pause();
    video2.currentTime = 0;
});


function sendmail() {

    let client_data = {
        name: document.querySelector("#name").value,
        email: document.querySelector("#email").value,
        number: document.querySelector("#number").value,
        message: document.querySelector("#message").value
    }

    emailjs.send("service_0l0cfns", "template_52m4bdt", client_data)

        .then(function (response) {
            alert("Message sent successfully!");
        })

        .catch(function (error) {
            alert("Failed to send the message. Try again.");
        });

    let reply_msg = {
        name: client_data.name,
        to_email: client_data.email
    }

    emailjs.send("service_0l0cfns", "template_dn4dzav", reply_msg)

        .then(function (response) {
            alert("Reply message sent successfully to the user!");
        })

        .catch(function (error) {
            alert("Failed to send the reply message. Sorry!");
        });
}

const lenis = new Lenis()

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)