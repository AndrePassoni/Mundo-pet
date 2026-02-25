import { openingHours } from "../../utils/opening-hours"
import dayjs from "dayjs"

export function setupHourInput({ date, dailySchedules }) {
    const hourSelect = document.querySelector("#hour")
    
    // Se o elemento não existir, paramos a execução aqui para evitar erros
    if (!hourSelect) return;

    // Limpa qualquer opção que já exista (boa prática para garantir que a lista esteja vazia antes de preencher)
    hourSelect.innerHTML = ""

    // Cria a opção padrão (Placeholder)
    const defaultOption = document.createElement("option")
    defaultOption.value = ""
    defaultOption.textContent = "Selecione a hora"
    defaultOption.disabled = true
    defaultOption.selected = true
    hourSelect.appendChild(defaultOption)

    const unavailableHours = dailySchedules.map((schedule) => dayjs(schedule.when).format("HH:mm"))

    // Verifica se a data selecionada é a atual
    const isToday = dayjs(date).isSame(dayjs(), "day")

    // Pega a hora atual
    const currentHour = dayjs().hour()

    // Percorre cada item do array openingHours
    openingHours.forEach((hour) => {
        const [hourString] = hour.split(":")

        const hourNumber = parseInt(hourString)

        const isPast = isToday && hourNumber <= currentHour

        const isUnavailable = unavailableHours.includes(hour)

        const option = document.createElement("option")
        option.value = hour
        option.textContent = hour

        if (isPast || isUnavailable) {
            option.disabled = true
        }

        hourSelect.appendChild(option)
    })
}