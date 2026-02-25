const phoneInput = document.querySelector("#phone")

phoneInput.addEventListener("input", (event) => {
    let value = event.target.replace(/\D/g, "")

    // Limita a quantidade máxima de números
    value = value.substring(0, 11)

    value = value.replace(/^(\d{2})(\d)/g, "($1) $2")

    value = value.replace(/(\s\d)(\d)/, "$1 $2")

    value = value.replace(/(\d{4})(\d)/, "$1-$2")

    event.target.value = value
})