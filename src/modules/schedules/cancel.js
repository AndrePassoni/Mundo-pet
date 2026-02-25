import { schedulesDay } from "./load.js"
import { scheduleCancel } from "../../services/schedule-cancel.js"

const periods = document.querySelectorAll(".schedule-period")

periods.forEach((period) => {
    period.addEventListener("click", async (event) => {
        if (event.target.classList.contains("cancel-icon")) {
            event.preventDefault()

            const item = event.target.closest("li")
            const { id } = item.dataset

            if (id) {
                const isConfirm = confirm("Tem certeza que deseja remover o agendamento?")

                if (isConfirm) {
                    await scheduleCancel({ id })
                    schedulesDay()
                }
            }
        }
    })
})