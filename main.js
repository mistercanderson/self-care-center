var affirmations = [
  'I forgive myself and set myself free.',
  'I believe I can be all that I want to be.',
  'I am in the process of becoming the best version of myself.',
  'I have the freedom & power to create the life I desire.',
  'I choose to be kind to myself and love myself unconditionally.',
  'My possibilities are endless.',
  'I am worthy of my dreams.',
  'I am enough.',
  'I deserve to be healthy and feel good.',
  'I am full of energy and vitality and my mind is calm and peaceful.',
  'Every day I am getting healthier and stronger.',
  'I honor my body by trusting the signals that it sends me.',
  'I manifest perfect health by making smart choices.'
]
var mantras = [
  'Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.',
  'Don’t let yesterday take up too much of today.',
  'Every day is a second chance.',
  'Tell the truth and love everyone.',
  'I am free from sadness.',
  'I am enough.',
  'In the beginning it is you, in the middle it is you and in the end it is you.',
  'I love myself.',
  'I am present now.',
  'Inhale the future, exhale the past.',
  'This too shall pass.',
  'Yesterday is not today.',
  'The only constant is change.',
  'Onward and upward.',
  'I am the sky, the rest is weather.'
]

var body = document.querySelector('body');
var messageButton = document.querySelector('.receive-button');
var meditationIcon = document.querySelector('.bell');
var message = document.querySelector('.message');
var radios = document.getElementsByName('radAnswer');
var affirmationRadio = document.getElementById('affirmation-select');
var mantraRadio = document.getElementById('mantra-select')
var selectSection = document.querySelector('.message-select');
var messageSection = document.querySelector('.notification')

messageButton.addEventListener('click', receiveMessage);
mantraRadio.addEventListener('click', changeBackground);
affirmationRadio.addEventListener('click', changeBackground);


function generateRandomNum(arr) {
  return Math.floor(Math.random() * arr.length)
};

function mantraOrAffirmation() {
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      var selection = radios[i].value;
      message.innerText = eval(selection)[generateRandomNum(eval(selection))];
      messageButton.innerText = 'Clear';
      messageSection.style.background = '#EAF9FA';
      selectSection.style.background = 'white'
    } else {
      messageButton.innerText = 'Clear';
    }
  }
}

function receiveMessage() {
  if (message.classList.contains('hidden')) {
    mantraOrAffirmation()
    message.classList.remove('hidden');
    meditationIcon.classList.add('hidden')
  } else {
    messageButton.innerText = 'Receive Message'
    messageSection.style.background = 'white';
    selectSection.style.background = '#EAF9FA'
    message.classList.add('hidden');
    meditationIcon.classList.remove('hidden')
  }
}

function changeBackground() {
  if (meditationIcon.classList.contains('hidden') &&
    message.innerText === 'Please select a message type ⬆️') {
    message.innerText = 'Sounds good. Hit \'Clear\' to begin. '
    messageSection.style.background = '#EAF9FA';
  }
  var value = event.target.getAttribute('value');
  if (value === 'mantras') {
    body.classList.add('mantras-background')
  } else {
    body.classList.remove('mantras-background')
  }
}
