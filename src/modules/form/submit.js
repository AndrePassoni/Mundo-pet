import dayjs from "dayjs"
import { scheduleNew } from "../../services/schedule-new.js"
import { schedulesDay } from "../schedules/load.js"

const form = document.querySelector("form")
const selectedDateModal = document.querySelector("#modal-date")
const ownerNameInput = document.querySelector("#name")
const petNameInput = document.querySelector("#pet-name")
const serviceInput = document.querySelector("#description")
const hourInput = document.querySelector("#hour")

// Carrega a data atual e mostra no input Date
selectedDateModal.value = dayjs(new Date()).format("YYYY-MM-DD")

// Define a data mínima como sendo a data atual
selectedDateModal.min = dayjs(new Date()).format("YYYY-MM-DD")

form.onsubmit = async (event) => {
    event.preventDefault()

    try {
        const owner = ownerNameInput.value.trim()
        const pet = petNameInput.value.trim()
        const service = serviceInput.value.trim()
        const hour = hourInput.value

        if (!hour) {
            alert("Selecione um horário.")
            return
        }

        const [hourString] = hour.split(":")

        const when = dayjs(selectedDateModal.value).add(Number(hourString), "hour").toDate()

        const id = new Date().getTime().toString()

        await scheduleNew({
            id,
            owner,
            pet,
            service,
            when
        })

        ownerNameInput.value = ""
        petNameInput.value = ""
        serviceInput.value = ""
        hourInput.value = ""

        schedulesDay()

    } catch (error) {
        console.error("Erro ao enviar o formulário:", error)
        alert("Ops! Ocorreu um erro ao tentar agendar.")
    }
}