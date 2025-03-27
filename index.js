function toggleForm() {
    var form = document.getElementById("form");
    var overlay = document.getElementById("overlay");

    if (!form) {
        // Load the form dynamically if it's not already loaded
        fetch("form.html")
            .then(response => response.text())
            .then(data => {
                document.getElementById("formContainer").innerHTML = data;
                document.getElementById("form").style.display = "block";
                overlay.style.display = "block";
            })
            .catch(error => console.error("Error loading form:", error));
    } else {
        // Toggle visibility
        if (form.style.display === "none" || form.style.display === "") {
            form.style.display = "block";
            overlay.style.display = "block";
        } else {
            form.style.display = "none";
            overlay.style.display = "none";
        }
    }
}



function handleClick() {
    const mobile = "7702068334"
    const name = document.getElementById("name").value;
    const number = document.getElementById("mobile").value;
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
    const address = document.getElementById("address").value;
    const details = document.getElementById("details").value;

    const message = `Hello, I am sending my priscription and details\n` +
        `Name - ${name} \n` + `Number - ${number} \n` + `Age - ${age} \n` + `Gender - ${gender} \n` + `Address - ${address} \n` + `Details - ${details} \n`
        + `Thank you`;

    const encode = encodeURIComponent(message);
    window.open(`https://wa.me/${mobile}?text=${encode}`, "_blank");



}