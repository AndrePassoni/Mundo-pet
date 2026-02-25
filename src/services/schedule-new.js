import { apiConfig } from "./api-config.js"

export async function scheduleNew({ id, owner, pet, service, when }) {
    try {
        const response = await fetch(`${apiConfig.baseURL}/schedules`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                id,
                owner,
                pet,
                service,
                when
            })
        })

        if (!response.ok) {
           throw new Error(`Erro HTTP: ${response.status}`)
        }

        alert("Agendamento realizado com sucesso!")
    } catch (error) {
        console.error("Falha ao salvar no servidor:", error)
        throw error
    }
}