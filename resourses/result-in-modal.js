let modalBody = document.querySelector('.modal-body')

function renderModal(form) {
  modalBody.innerHTML =
    `<div class="h3">Фамилия : ${form.surName.value}</div>
        <div class="h3">Имя : ${form.name.value}</div>
        <div class="h3">Отчество : ${form.secName.value}</div>
        <div class="h3">Меняли фамилию : ${form.changeSurname.value}</div>
        <div class="h3">Пол: ${form.sex.value}</div>
        <div class="h3">Семейный статус: ${form.maritalStatus.value}</div>`
}