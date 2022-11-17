const popupElement = document.querySelector(".popup"); // popup form
const popupOpenButtonElement = document.querySelector(".profile__edit-button"); // button popup open
const popupCloseButtonElement = popupElement.querySelector(".popup__close"); // button popup close
const popupSaveButton = popupElement.querySelector(".popup__save"); // button popup save
let profileName = document.querySelector(".profile-info-name"); // profile name
let profileJob = document.querySelector(".profile-info-job"); // profile job
let formElement = document.querySelector(".popup__content"); // submit form
let jobInput = document.querySelector(".input__text_type_job"); // entry field job
let nameInput = document.querySelector(".input__text_type_name"); // entry field name

// popup open
const togglePopupVisibility = function (event) {
    jobInput.placeholder = profileJob.textContent;
    nameInput.placeholder = profileName.textContent;
  popupElement.classList.toggle("popup_is-opened");
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
    
    let profileName = document.querySelector(".profile-info-name");
    let profileJob = document.querySelector(".profile-info-job");
    // New value width textContent
    profileJob.textContent  = job;
    profileName.innerHTML = name;
    popupElement.classList.remove("popup_is-opened");
}

formElement.addEventListener('submit', formSubmitHandler);





