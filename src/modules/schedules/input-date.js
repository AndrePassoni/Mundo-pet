import dayjs from "dayjs"

const selectedDateMain = document.querySelector("#date")

// Carrega a data atual e mostra no input Date
selectedDateMain.value = dayjs(new Date()).format("YYYY-MM-DD")

// Define a data mínima como sendo a data atual
selectedDateMain.min = dayjs(new Date()).format("YYYY-MM-DD")