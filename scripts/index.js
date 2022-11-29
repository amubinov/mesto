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
const openPopup = function () {
    jobInput.value = profileJob.textContent;
    nameInput.value = profileName.textContent;
    popupElement.classList.add("popup_is-opened");
 };
popupOpenButtonElement.addEventListener("click", openPopup);

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

const popupElementAdd = document.getElementById('addPlace');
const openButtonElementAdd = document.querySelector('.profile__add-button');
const namePlace = document.querySelector('.popup__input_type_place-name');
const placeURL = document.querySelector('.popup__input_type_place-url');

const openAddPopup = function () {
  namePlace.value = namePlace.textContent;
  placeURL.value = placeURL.textContent;
  popupElementAdd.classList.add('#addPlace');
}
openButtonElementAdd.addEventListener("click", popupElementAdd);

popupCloseButtonElement.addEventListener("click", function () {
  popupElementAdd.classList.remove("popup_is-opened");
});




