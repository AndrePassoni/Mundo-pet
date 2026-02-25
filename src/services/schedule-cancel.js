import { apiConfig } from "./api-config.js"

export async function scheduleCancel({ id }) {
    try {
        await fetch(`${apiConfig.baseURL}/schedules/${id}`, {
            method: "DELETE",
        })

        alert("Agendamento removido com sucesso!")
    } catch (error) {
        console.error(error)
        alert("Não foi possível remover o agendamento.")
    }
}