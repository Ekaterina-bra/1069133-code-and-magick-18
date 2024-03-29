'use strict';
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var WIZARDS_NUMBER = 4;
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_LASTNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COATCOLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYESCOLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var getRandomArrElement = function (wizards) {
  var rand = Math.floor(Math.random() * wizards.length);
  return wizards[rand];
};

var generateWizard = function () {
  var nameWizard = getRandomArrElement(WIZARD_NAMES);
  var surnameWizard = getRandomArrElement(WIZARD_LASTNAMES);
  var coatColorWizard = getRandomArrElement(WIZARD_COATCOLORS);
  var eyesColorWizard = getRandomArrElement(WIZARD_EYESCOLORS);
  return {
    name: nameWizard + ' ' + surnameWizard,
    coatColor: coatColorWizard,
    eyesColor: eyesColorWizard
  };
};
var generateWizards = function (count) {
  var wizards = [];
  for (var i = 0; i < count; i++) {
    wizards.push(generateWizard());
  }
  return wizards;
};
generateWizards(WIZARDS_NUMBER);

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};
var newWizards = generateWizards(WIZARDS_NUMBER);
var fragment = document.createDocumentFragment();
for (var i = 0; i < WIZARDS_NUMBER; i++) {
  fragment.appendChild(renderWizard(newWizards[i]));
}
similarListElement.appendChild(fragment);
userDialog.querySelector('.setup-similar').classList.remove('hidden');


