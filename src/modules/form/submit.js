import dayjs from "dayjs"
import { scheduleNew } from "../../services/schedule-new.js"
import { schedulesDay } from "../schedules/load.js"
import { closeModal } from "./show-modal.js"

const form = document.querySelector("form")
const selectedDateModal = document.querySelector("#modal-date")
const ownerNameInput = document.querySelector("#name")
const petNameInput = document.querySelector("#pet-name")
const phoneInput = document.querySelector("#phone")
const serviceInput = document.querySelector("#description")
const hourInput = document.querySelector("#hour")
const mainDateInput = document.querySelector("#date")
const modal = document.querySelector(".modal")

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

        const when = dayjs(selectedDateModal.value).add(Number(hourString), "hour").format()

        const id = new Date().getTime().toString()

        await scheduleNew({
            id,
            owner,
            pet,
            service,
            when
        })

        mainDateInput.value = selectedDateModal.value

        ownerNameInput.value = ""
        petNameInput.value = ""
        phoneInput.value = ""
        serviceInput.value = ""
        hourInput.value = ""

        await schedulesDay()

        closeModal()

    } catch (error) {
        console.error("Erro ao enviar o formulário:", error)
        alert("Ops! Ocorreu um erro ao tentar agendar.")
    }
}