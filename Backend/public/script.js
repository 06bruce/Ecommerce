function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value
    }
    emailjs.send("service_bxsmjdd, template_uvl234d", parms).then(alert("your subscription has been recived"))
}