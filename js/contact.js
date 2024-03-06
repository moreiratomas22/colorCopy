const sendEmailButton = document.getElementById("sendEmailButton")


const sendEmail = (e) => {
    e.preventDefault()
    const from_name = document.getElementById("name")
    const from_lastName = document.getElementById("lastName")
    const from_email = document.getElementById("email")
    const message = document.getElementById("message")
    if (!from_email.value || !from_name.value || !from_lastName.value || !message.value) {
        Swal.fire(
            'Por favor, complete todos los campos antes de enviar el email',
            "",
            'error'
        )
    } else {
        var templateParams = {
            from_name: from_name.value + " " + from_lastName.value,
            from_email: from_email.value,
            subject: "Consulta desde la web",
            message: message.value
        };
        emailjs.send('service_kim9dpt', 'template_gc8npis', templateParams)
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                Swal.fire(
                    'Mensaje enviado con éxito',
                    "",
                    'success'
                )
                from_name.value = ""
                from_lastName.value = ""
                from_email.value = ""
                message.value = ""
            }, function (error) {
                console.log('FAILED...', error);
                alert("Ha ocurrido un error al intentar enviar el correr, por favor intentelo más tarde")
            });
    }
}


sendEmailButton.addEventListener("click", sendEmail)