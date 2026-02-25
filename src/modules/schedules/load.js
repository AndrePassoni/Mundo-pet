import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day"
import { schedulesShow } from "./show.js"
import { setupHourInput } from "../form/hours-load.js"

const selectedDate = document.getElementById("date")

export async function schedulesDay() {
    const date = selectedDate.value

    if (!date) return

    const dailySchedules = await scheduleFetchByDay({ date })

    schedulesShow({ dailySchedules })
    setupHourInput(date)
}