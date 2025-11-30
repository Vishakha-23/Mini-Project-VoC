//to collect email of the users
document.getElementById("emailForm").addEventListener("submit", function (e) {
    e.preventDefault();
    var email = document.getElementById("email").value;

    fetch("https://script.google.com/macros/s/AKfycbyPRNUrf28kJChUnSH-LvxsUWbKNfEydP5R6UHGpEtjnKTnLzPy_i8RewupY7W2Wuv3/exec", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email })
    }).then(response => {
        alert("Thank you for subscribing!");
        document.getElementById("emailForm").reset();
    })

});




//to collect contact information of the users
const form = document.querySelector('.contact-form');

form.addEventListener('submit', e => {
    e.preventDefault();

    const data = {
        name: form.name.value,
        email_address: form.email_address.value,
        subject: form.subject.value,
        phone: form.phone.value,
        message: form.message.value
    };

    fetch("https://script.google.com/macros/s/AKfycbxHkL7Gc6FJJibWvCdVanxpcwQLX6NaTbMo5JWWywX-qvP4VSNdUz-NjgeLj4OK_4kq/exec", {
        method: "POST",
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(result => {
            alert("Message sent successfully!");
            form.reset();
        })
        .catch(error => {
            alert("Error sending message. Try again.");
            console.error(error);
        });
});






//for button
document.addEventListener("DOMContentLoaded", () => {
    const openBtn = document.getElementById("openBoxBtn");
    const emailBox = document.getElementById("emailBox");
    const closeBtn = document.getElementById("closeBoxBtn");

    openBtn.addEventListener("click", () => {
        emailBox.classList.remove("hidden");
    });

    closeBtn.addEventListener("click", () => {
        emailBox.classList.add("hidden");
    });
});

