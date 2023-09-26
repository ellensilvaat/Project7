document.addEventListener("DOMContentLoaded", function() {
  const modal = document.getElementById("Modal");
  const span = document.querySelector(".close");
  const form = document.querySelector('#Modal form');
  const nameInput = document.querySelector('.modal-content__name');
  const jobInput = document.querySelector('.modal-content__text');
  const name = document.querySelector('.profile__title');
  const job = document.querySelector('.profile__subtitle');
  const saveButton = document.querySelector('.modal-content__button');
  const overlay = document.querySelector(".overlay");

  let nameInputTouched = false;
  let jobInputTouched = false;

  function openModal() {
    modal.style.display = "block";
  }

  function closeModal() {
    modal.style.display = "none";
    resetValidation();
  }

  document.addEventListener("click", function (event) {
    if (event.target === overlay || event.target === modal) {
      closeModal();
    }
  });

  function validateForm() {
    const nameValue = nameInput.value.trim();
    const jobValue = jobInput.value.trim();
    let isFormValid = true;

    if (nameInputTouched) {
      if (nameValue.length === 1) {
        document.getElementById("name-error").textContent = "O nome deve conter entre 2 e 40 caracteres. ";
        nameInput.classList.add("modal-content__name_error");
        isFormValid = false;
      } else if (nameValue.length < 2 || nameValue.length > 40) {
        document.getElementById("name-error").textContent = "Preencha este campo.";
        nameInput.classList.add("modal-content__name_error");
        isFormValid = false;
      } else {
        document.getElementById("name-error").textContent = "";
        nameInput.classList.remove("modal-content__name_error");
      }
    }

    if (jobInputTouched) {
      if (jobValue.length === 1) {
        document.getElementById("job-error").textContent = "O campo 'Explorar' deve conter entre 2 e 200 caracteres.";
        jobInput.classList.add("modal-content__text_error");
        isFormValid = false;
      } else if (jobValue.length < 2 || jobValue.length > 200) {
        document.getElementById("job-error").textContent = "Preencha este campo.";
        jobInput.classList.add("modal-content__text_error");
        isFormValid = false;
      } else {
        document.getElementById("job-error").textContent = "";
        jobInput.classList.remove("modal-content__text_error");
      }
    }

    saveButton.disabled = !isFormValid;
  }

  function resetValidation() {
    nameInputTouched = false;
    jobInputTouched = false;
    validateForm();
  }

  nameInput.addEventListener('input', function() {
    nameInputTouched = true;
    validateForm();
  });

  jobInput.addEventListener('input', function() {
    jobInputTouched = true;
    validateForm();
  });

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const newNameValue = nameInput.value.trim();
    const newJobValue = jobInput.value.trim();
    name.textContent = newNameValue;
    job.textContent = newJobValue;
    closeModal();
  });

  function closePopupsOnEsc(event) {
    if (event.key === "Escape" || event.keyCode === 27) {
      closeModal();
    }
  }

  document.addEventListener("keydown", closePopupsOnEsc);
});

document.addEventListener("DOMContentLoaded", function() {
  const deleteIcons = document.querySelectorAll(".elements__delete");

  deleteIcons.forEach(icon => {
      icon.addEventListener("click", function() {
          const card = icon.closest(".elements__item");
          card.parentNode.removeChild(card);
      });
  });

  const likeButtons = document.querySelectorAll(".elements__like");

  likeButtons.forEach(button => {
    let isActive = false;

    button.addEventListener("click", function() {
      isActive = !isActive;
      if (isActive) {
        button.src = "images/Union.png";
        button.alt = "like preenchido";
      } else {
        button.src = "images/Vector.png";
        button.alt = "like vazio";
      }
    });
  });

  const modal = document.getElementById("Modal");
  const img = document.getElementById("Img");
  const profileClose = modal.querySelector(".close");
  const popup = document.getElementById("popup");
  const closePopupBtn = document.getElementById("close");
  const titleInput = document.getElementById("title");
  const linkInput = document.getElementById("link");
  const cardForm = document.getElementById("card-form");
  const addCardButton = document.getElementById("addCard");
  const profileAdd = document.querySelector(".profile__add");
  const overlay = document.querySelector(".overlay");

  let titleInputTouched = false;
  let linkInputTouched = false;

  img.addEventListener("click", function() {
      modal.style.display = "block";
  });

  profileClose.addEventListener("click", function() {
      modal.style.display = "none";
      resetValidation();
  });

  document.addEventListener("DOMContentLoaded", function() {
      modal.style.display = "none";
      resetValidation();
  });

  profileAdd.addEventListener("click", function() {
    popup.style.display = "flex";
  });

  closePopupBtn.addEventListener("click", function() {
    popup.style.display = "none";
    resetValidation();
  });

  function resetCardValidation() {
    titleInputTouched = false;
    linkInputTouched = false;
    validateCardForm();
  }

document.addEventListener("click", function (event) {
  if (!popup.contains(event.target) && event.target !== profileAdd) {
    popup.style.display = "none";
  }
});

  function closePopupOnEsc(event) {
    if (event.key === "Escape" || event.keyCode === 27) {
      popup.style.display = "none";
    }
  }

  document.addEventListener("keydown", closePopupOnEsc);

  function validateCardForm() {
    const titleValue = titleInput.value.trim();
    const linkValue = linkInput.value.trim();

    let isFormValid = true;

    function showError(element, message) {
      element.textContent = message;
      element.style.display = "block";
    }

    function hideError(element) {
      element.textContent = "";
      element.style.display = "none";
    }

    if (titleInputTouched) {
      if (titleValue.length === 1) {
        showError(document.getElementById("title-error"), "O título deve conter entre 2 e 30 caracteres..");
        titleInput.classList.add("popup-content__local_error");
        isFormValid = false;
      } else if (titleValue.length < 2 || titleValue.length > 30) {
        showError(document.getElementById("title-error"), "Preencha este campo.");
        titleInput.classList.add("popup-content__local_error");
        isFormValid = false;
      } else {
        hideError(document.getElementById("title-error"));
        titleInput.classList.remove("popup-content__local_error");
      }
    }

    if (linkInputTouched) {
      const urlPattern = /^(https?:\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/;
      if (!urlPattern.test(linkValue)) {
        showError(document.getElementById("link-error"), "Insira uma URL válida.");
        linkInput.classList.add("popup-content__link_error");
        isFormValid = false;
      } else {
        hideError(document.getElementById("link-error"));
        linkInput.classList.remove("popup-content__link_error");
      }
    }

    addCardButton.disabled = !isFormValid;
  }

  titleInput.addEventListener('input', function () {
    titleInputTouched = true;
    validateCardForm();
  });

  linkInput.addEventListener('input', function () {
    linkInputTouched = true;
    validateCardForm();
  });

  cardForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const newTitle = titleInput.value.trim();
    const newLink = linkInput.value.trim();

  document.getElementById("addCard").addEventListener("click", function() {
      const newTitle = titleInput.value;
      const newLink = linkInput.value;

      const newCard = document.createElement("div");
      newCard.className = "elements__item new-card";

      const rectangleIcon = document.createElement("img");
      rectangleIcon.className = "elements__rectangle";
      rectangleIcon.src = "images/Rectangle.png";
      rectangleIcon.alt = "retângulo branco";

      const photo = document.createElement("img");
      photo.className = "elements__photo new-card";
      photo.src = newLink;
      photo.alt = newTitle;

      const group = document.createElement("div");
      group.className = "elements__group";

      const title = document.createElement("h2");
      title.className = "elements__title";
      title.textContent = newTitle;

      const likeButton = document.createElement("img");
      likeButton.className = "elements__like";
      likeButton.src = "images/Vector.png";
      likeButton.alt = "like";

      const activeLikeButton = document.createElement("img");
      activeLikeButton.className = "elements__like elements__like--active";
      activeLikeButton.src = "images/Union.png";
      activeLikeButton.alt = "like";

      group.appendChild(title);
      group.appendChild(likeButton);
      group.appendChild(activeLikeButton);


      const deleteIcon = document.createElement("img");
      deleteIcon.className = "elements__delete";
      deleteIcon.src = "images/Group.png";
      deleteIcon.alt = "Excluir";

      newCard.appendChild(rectangleIcon);
      newCard.appendChild(photo);
      newCard.appendChild(group);
      newCard.appendChild(deleteIcon);

      const elementsContainer = document.querySelector('.elements');
      elementsContainer.insertBefore(newCard, elementsContainer.firstChild);

      deleteIcon.addEventListener("click", function() {
          newCard.parentNode.removeChild(newCard);
      });

      popup.style.display = "none";
      titleInput.value = "";
      linkInput.value = "";


  });

  const modalTemplate = document.getElementById("modalTemplate");

  document.addEventListener("click", (e) => {
    const elem = e.target;
    if (elem.classList.contains("elements__photo")) {
      const modalInstance = document.importNode(modalTemplate.content, true);

      const enlargeModal = modalInstance.querySelector("#enlargeModal");
      const myPlace = modalInstance.querySelector("#myPlace");
      const captarText = modalInstance.querySelector("#captar");

      document.body.appendChild(modalInstance);

      enlargeModal.style.display = "block";
      myPlace.src = elem.src;
      captarText.textContent = elem.alt;

      const span = modalInstance.querySelector(".fechar");

      span.addEventListener("click", function () {
        document.body.removeChild(modalInstance);
      });

      modalInstance.addEventListener("click", (event) => {
        if (event.target === modalInstance) {
          document.body.removeChild(modalInstance);
        }
      });
    }
  });
})
})