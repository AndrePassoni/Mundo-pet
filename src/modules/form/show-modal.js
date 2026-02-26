const modal = document.querySelector(".modal")
const main = document.querySelector("main")
const btnShow = document.querySelector(".btn-new")
const closeIcon = document.querySelector("#close-icon")

// Função para mostrar o modal ao clicar no botão de novo agendamento
btnShow.addEventListener("click", function () {
    modal.classList.remove("display")
    main.classList.add("filter")
    btnShow.classList.add("filter")
})

// Função para fechar o modal
export function closeModal() {
    modal.classList.add("display")
    main.classList.remove("filter")
    btnShow.classList.remove("filter")
}

document.addEventListener("click", (event) => {

    // Verifica se o modal está aberto
    const isModalOpen = !modal.classList.contains("display")

    // Verifica se o clique foi fora do modal
    const isClickOutsideModal = !modal.contains(event.target)

    // Verifica se o clique foi no botão de novo agendamento
    const isClickOutsideButton = !btnShow.contains(event.target)

    // Verifica se o clique foi no ícone de fechar o modal
    const isClickCloseIcon = closeIcon.contains(event.target)

    // Se todas as condições forem atendidas executa a função de fechar o modal
    if (isModalOpen && isClickOutsideModal && isClickOutsideButton || isClickCloseIcon) {
        closeModal()
    }
})