import dayjs from "dayjs"

const periodMorning = document.getElementById("period-morning")
const periodAfternoon = document.getElementById("period-afternoon")
const periodNight = document.getElementById("period-night")

export function schedulesShow({ dailySchedules }) {
    try {
        periodMorning.innerHTML = ""
        periodAfternoon.innerHTML = ""
        periodNight.innerHTML = ""

        dailySchedules.forEach((schedule) => {
            const item = document.createElement("li")
            item.setAttribute("data-id", schedule.id)

            const leftContainer = document.createElement("div")
            leftContainer.classList.add("left")

            const time = document.createElement("strong")
            time.textContent = dayjs(schedule.when).format("HH:mm")

            const pet = document.createElement("strong")
            pet.textContent = schedule.pet || schedule.name

            const ownerName = document.createElement("span")
            ownerName.textContent = ` / ${schedule.owner || "Tutor"}`

            leftContainer.append(time, pet, ownerName)

            const service = document.createElement("span")
            service.textContent = schedule.service || "Serviço"

            const cancel = document.createElement("a")
            cancel.textContent = "Remover agendamento"
            cancel.href = "#"
            cancel.classList.add("cancel-icon")

            item.append(leftContainer, service, cancel)

            const hour = dayjs(schedule.when).hour()

            if (hour <= 12) {
                periodMorning.appendChild(item)
            } else if (hour > 12 && hour <= 18) {
                periodAfternoon.appendChild(item)
            } else {
                periodNight.appendChild(item)
            }
        })

    } catch (error) {
        console.log(error)
        alert("Não foi possível exibir os agendamentos")
    }
}