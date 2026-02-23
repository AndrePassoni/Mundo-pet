const modal = document.querySelector(".modal")
const main = document.querySelector("main")
const btnShow = document.querySelector(".btn-new")
const filter = document.querySelector(".filter")

btnShow.addEventListener("click", function () {
    modal.classList.remove("display")
    main.classList.add("filter")
    btnShow.classList.add("filter")
})