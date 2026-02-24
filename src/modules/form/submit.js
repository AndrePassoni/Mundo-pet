import dayjs from "dayjs"

const form = document.querySelector("form")
const selectedDateModal = document.querySelector("#modal-date")

// Carrega a data atual e mostra no input Date
selectedDateModal.value = dayjs(new Date()).format("YYYY-MM-DD")

// Define a data mínima como sendo a data atual
selectedDateModal.min = dayjs(new Date()).format("YYYY-MM-DD")

form.onsubmit = (event) => {
    event.preventDefault()

    console.log("ENVIADO!")
}