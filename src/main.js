"use strict"

import "./libs/dayjs.js"
import "./styles/global.css"
import "./styles/index.css"
import "./styles/schedule.css"
import "./modules/form/show-modal.js"
import "./modules/form/submit.js"
import "./modules/schedules/input-date.js"
import "./modules/page-load.js"

import { setupHourInput } from "./modules/form/hours-load.js"

const dateInput = document.querySelector("#modal-date")

setupHourInput(dateInput.value)

dateInput.addEventListener("change", (event) => {
    setupHourInput(event.target.value)
})