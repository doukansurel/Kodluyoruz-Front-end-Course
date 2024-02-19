const alertMessage = () => {
  return `
<div class="alert alert-danger alert-dismissible fade show" role="alert">
  <strong>Boş Değer Girilemez!</strong> Lütfen Uyarıları Dikkate Alınız.
  <button
    type="button"
    class="btn-close"
    data-bs-dismiss="alert"
    aria-label="Close">X</button>
</div>
`;
};

function newElement() {
  const alertDiv = document.querySelector("#alert");
  const taskText = document.querySelector("#task");
  if (!taskText.value) {
    alertDiv.innerHTML = alertMessage();
  } //console.log(taskText);
  else {
    const listElement = document.querySelector("#list");
    const newListItem = document.createElement("li");
    newListItem.innerHTML = `${taskText.value} <span class="close">X</span>`;
    listElement.appendChild(newListItem);
    taskText.value = "";
  }
}

const listElement = document.querySelector("#list");
listElement.addEventListener("click", removeElement);

function removeElement(event) {
  const closeButton = event.target.closest(".close");
  if (closeButton) {
    closeButton.parentNode.remove();
  }
}
