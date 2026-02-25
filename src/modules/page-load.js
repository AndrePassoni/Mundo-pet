import dayjs from "dayjs"
import { schedulesDay } from "./schedules/load.js"

const selectedDate = document.querySelector("#date")

document.addEventListener("DOMContentLoaded", function () {
    selectedDate.value = dayjs(new Date()).format("YYYY-MM-DD")

    schedulesDay()
})