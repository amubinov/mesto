const popupElement = document.querySelector(".popup"); // popup form
const popupOpenButtonElement = document.querySelector(".profile__edit-button"); // button popup open
const popupCloseButtonElement = popupElement.querySelector(".popup__close"); // button popup close
const popupSaveButton = popupElement.querySelector(".popup__save"); // button popup save
const profileName = document.querySelector(".profile__info-name"); // profile name
const profileJob = document.querySelector(".profile__info-job"); // profile job
const formElement = document.querySelector(".popup__content"); // submit form
const nameInput = document.querySelector(".popup__input_type_name"); // entry field name
const jobInput = document.querySelector(".popup__input_type_job"); // entry field job

// popup open
const togglePopupVisibility = function () {
    jobInput.value = profileJob.textContent;
    nameInput.value = profileName.textContent;
    popupElement.classList.add("popup_is-opened");
 };
popupOpenButtonElement.addEventListener("click", togglePopupVisibility);

// popup close
const closePopup = function () {
    popupElement.classList.remove("popup_is-opened");
};
popupCloseButtonElement.addEventListener("click", closePopup);

//Send form
function formSubmitHandler (evt) {
    evt.preventDefault();

    let job = jobInput.value;
    let name = nameInput.value;

    // New value width textContent
    profileJob.textContent  = job;
    profileName.textContent = name;
    popupElement.classList.remove("popup_is-opened");
}

formElement.addEventListener('submit', formSubmitHandler);

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];



const popupElementAdd = document.getElementById('addPlace');
const openButtonElementAdd = document.querySelector('.profile__add-button');
const popupCloseButtonElementPlace = document.getElementById('popupClosePlace')
const namePlace = document.querySelector('.popup__input_type_place-name');
const placeURL = document.querySelector('.popup__input_type_place-url');

//переменные
const placeTitle = document.querySelector('.popup__input_type_place-name')
const placeUrl = document.querySelector('.popup__input_type_place-url')
const placeForm = document.querySelector('#popup__content-place')
const nameTemplate = document.querySelector('.element__bottom-title')
const imgTemplate = document.querySelector('.element__image')

const togglePopupVisibilityCard = function () {
  popupElementAdd.classList.add("popup_is-opened")
}
openButtonElementAdd.addEventListener("click", togglePopupVisibilityCard);

const closePopupPlace = function () {
  popupElementAdd.classList.remove("popup_is-opened");
};
popupCloseButtonElementPlace.addEventListener("click", closePopupPlace);

//FormPlace
function placeformsubmitHandler(evt) {
  evt.preventDefault();
  renderCard ({name:placeTitle.value,
              link:placeUrl.value})
  nameTemplate.value = '';
  imgTemplate.value = '';
  closePopupPlace();
}

placeForm.addEventListener('submit',placeformsubmitHandler);

const placeContainer = document.querySelector('.elements');
const placeTemplate = document.querySelector('#elements-template').content;
const cardTemplate = document.querySelector('#elements-template').content.querySelector('.element');

const generateCardPlace = (dataCard) => {
  const newCard = cardTemplate.cloneNode(true);
  const title = newCard.querySelector('.element__bottom-title');
  const img = newCard.querySelector('.element__image');
  title.textContent = dataCard.name;
  image.src = dataCard.link;
  return newCard;
}

const placeInfo = initialCards.map(function (item){
  return {
    name:item.name,
    link:item.link
  };
});

function renderCard({name,link}) {
  const placeElement = placeTemplate
    .querySelector('.element')
    .cloneNode(true);
  placeElement.querySelector('.element__bottom-title').textContent = name;
  placeElement.querySelector('.element__image').src = link;
  placeContainer.prepend(placeElement);
}
render();
function render() {
  placeInfo.forEach(renderCard);
}


