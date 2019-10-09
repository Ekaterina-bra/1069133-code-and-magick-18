'use strict';
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var WIZARDS_NUMBER = 4;
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_LASTNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COATCOLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYESCOLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var renderWizard = function (wizards) {
  for (var i = 0; i < wizards.length - 1; i++) {
   var rand = Math.random() * wizards.length;
    return wizards[rand];
}
};

var getRandomArrElement = function (WIZARD_NAMES, WIZARD_LASTNAMES, WIZARD_COATCOLOR, WIZARD_EYESCOLOR) {
  var rand = Math.random() * wizards.length;
    return wizards[rand];
};
var generateWizard = function (WIZARD_NAMES, WIZARD_LASTNAMES, WIZARD_COATCOLOR, WIZARD_EYESCOLOR) {
var name = getRandomArrElement(WIZARD_NAMES);
var surname = getRandomArrElement(WIZARD_LASTNAMES);
var coatColor =  getRandomArrElement(WIZARD_COATCOLOR);
var eyesColor =  getRandomArrElement(WIZARD_EYESCOLOR);
return {
name : getRandomArrElement(WIZARD_NAMES) + getRandomArrElement(WIZARD_LASTNAMES),
coatColor : getRandomArrElement(WIZARD_COATCOLOR),
eyesColor : getRandomArrElement(WIZARD_EYESCOLOR)
}
};
var generateWizards = function (count) {
wizards = [];
for (var i = 0; i< count; i++) {
wizards.push(generateWizard())
}
generateWizards(WIZARDS_NUMBER);
};

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var renderRandomWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
return  wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i= 0; i< WIZARDS_NUMBER; i++) {
fragment.appendChild(renderRandomWizard(wizard[i]));
}
  similarListElement.appendChild(fragment);
 userDialog.querySelector('.setup-similar').classList.remove('hidden');


















