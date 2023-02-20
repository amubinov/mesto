import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import { validationConfig } from "./constants.js";

const profile = document.querySelector('.profile');
const profileName = profile.querySelector('.profile__name');
const profileStatus = profile.querySelector('.profile__status');

const popupEdit = document.querySelector('.popup_for_edit');
const popupEditClose = popupEdit.querySelector('.popup__close');
const popupOpenEditForm = profile.querySelector('.profile__edit'); //открытие edit

const popupAdd = document.querySelector('.popup_for_add');
const popupAddClose = popupAdd.querySelector('.popup__close');
const popupAddCard = profile.querySelector('.profile__add'); //открытие add

//строки
const formEditProfile = document.querySelector('.popup__inputs_edit-item');
const nameInput = formEditProfile.querySelector('.popup__add-item_type_name');
const jobInput = formEditProfile.querySelector('.popup__add-item_type_status');

const formAddCard = popupAdd.querySelector('.popup__inputs_add-item');
const titleInput = formAddCard.querySelector('[name="item-title"]');
const linkInput = formAddCard.querySelector('[name="item-link"]');

const buttonAddSubmit = popupAdd.querySelector('.popup__button_add');

// Попап 2

// список в разметке

const cardsContainer = document.querySelector('.elements');

//темплейт
const cardTemplate = '#elements-template';

// Попап 3
const popupCard = document.querySelector('.popup_for_card');
const popupImageClose = popupCard.querySelector('.popup__close_full-image');
const popupImageBtn = popupCard.querySelector('.popup__card-image');
const popupCardTitle = popupCard.querySelector('.popup__card-title');


const handleKeyUp = (e) => {
  if (e.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

const handleOverlayClick = (e, popupSelector,) => {
  if (!e.target.closest(popupSelector)) {
  }
};

const openPopup = function (popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keyup', handleKeyUp);
}

const closePopup = function (popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keyup', handleKeyUp);
}

const hideInputValue = function () {
  titleInput.value = '';
  linkInput.value = '';
}

const handleOpenImage = (title, image) => {
  popupCardTitle.textContent = title;
  popupImageBtn.src = image;
  popupImageBtn.alt = title;

  openPopup(popupCard);
}

function generateCard(config, templateSelector) {
  const newCard = new Card(
    {
      title: config.title,
      image: config.image,
    },
    templateSelector,
    handleOpenImage
  );
  return newCard.generateCards();
}

const renderCard = (element) => {
  cardsContainer.prepend(element);
};

initialCards.forEach((item) => {
  const cardElement = generateCard(item, cardTemplate);
  renderCard(cardElement);

});

const handleAddFormSubmit = (evt) => {
  evt.preventDefault();

  const cardData = generateCard({
      title: titleInput.value,
      image: linkInput.value,
    },
    cardTemplate
  );

  renderCard(cardData)

  evt.target.reset()
  closePopup(popupAdd);
}

const handleProfileFormSubmit = (evt) => {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileStatus.textContent = jobInput.value;

  closePopup(popupEdit);
}

const validationEditForm = new FormValidator(validationConfig, '.popup__inputs_edit-item');
const validationAddForm = new FormValidator(validationConfig, '.popup__inputs_add-item');

validationEditForm.enableValidation();
validationAddForm.enableValidation();

const openPopupAdd = () => {
  openPopup(popupAdd);
  validationAddForm.disableButton(buttonAddSubmit);
  hideInputValue();
};

const openPopupEdit = () => {
  openPopup(popupEdit);
  nameInput.value = profileName.textContent;
  jobInput.value = profileStatus.textContent;
  validationEditForm.resetValidation();
};

popupAddCard.addEventListener('click', openPopupAdd);
popupOpenEditForm.addEventListener('click', openPopupEdit);

popupAddClose.addEventListener('click', () => {
  closePopup(popupAdd);
  validationAddForm.resetValidation();
  hideInputValue();
})

popupEditClose.addEventListener('click', () => {
  closePopup(popupEdit);
  validationEditForm.resetValidation();
})

popupImageClose.addEventListener('click', () => {
  closePopup(popupCard);
})

popupEdit.addEventListener("click", handleOverlayClick);
popupAdd.addEventListener("click", handleOverlayClick);
popupCard.addEventListener("click", handleOverlayClick);

formAddCard.addEventListener('submit', handleAddFormSubmit);
formEditProfile.addEventListener('submit', handleProfileFormSubmit);
