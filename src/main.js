"use strict"

import "./libs/dayjs.js"
import "./styles/global.css"
import "./styles/index.css"
import "./styles/schedule.css"
import "./modules/form/show-modal.js"
import "./modules/form/submit.js"
import "./modules/schedules/input-date.js"
import "./modules/page-load.js"
import "./modules/schedules/cancel.js"
import "./modules/form/phone-input.js"

import { setupHourInput } from "./modules/form/hours-load.js"
import { scheduleFetchByDay } from "./services/schedule-fetch-by-day.js"

const dateInput = document.querySelector("#modal-date")

async function updateModalHours(date) {
    if (!date) return;

    const dailySchedules = await scheduleFetchByDay({ date })

    setupHourInput({ date, dailySchedules })
}

updateModalHours(dateInput.value)

dateInput.addEventListener("change", (event) => {
    updateModalHours(event.target.value)
})