import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day"
import { schedulesShow } from "./show.js"
import { setupHourInput } from "../form/hours-load.js"

const selectedDate = document.getElementById("date")

selectedDate.addEventListener("change", () => {
    schedulesDay()
})

export async function schedulesDay() {
    const date = selectedDate.value

    if (!date) return

    const dailySchedules = await scheduleFetchByDay({ date })

    dailySchedules.sort((a, b) => {
        return new Date(a.when) - new Date(b.when);
    });

    schedulesShow({ dailySchedules })
    setupHourInput({ date, dailySchedules })
}