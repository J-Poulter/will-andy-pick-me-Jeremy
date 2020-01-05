var allMessages = ['It is certain.', 'It is decidedly so.', 'Without a doubt.', 'Yes-definitely.', 'You may rely on it.', 'As I see it, yes.', 'Most likely', 'Outlook good.', 'Yes.', 'Signs point to yes.', 'Reply hazy, try again.', 'Ask again, later.', 'Better not tell you now.', 'Cannot predict now.', 'Concentrate and ask again.', "Don't count on it.", 'My reply is no', 'My sources say no.', 'Outlook not so good', 'Very doubtful.'];
var questionDisplay = document.querySelector('.question-display-js');
var responseDisplay = document.querySelector('.response-display-js');
var ballImg = document.querySelector('.ball-img-js');
var clearButton = document.querySelector('.clear-button-js');
var getAnsButton = document.querySelector('.get-answer-btn-js');
var textInputBox = document.querySelector('.text-input-js');

var globalListener = document.querySelector('body');

globalListener.addEventListener('click', clickHandler);
textInputBox.addEventListener('input', activateButton);

function clickHandler() {
  if (event.target.classList.contains('get-answer-btn-js')) {
    generateResponse();
  }
  if (event.target.classList.contains('clear-button-js')) {
    clearOutputs();
  }
};

function activateButton() {
  if (textInputBox.value != '') {
    clearButton.disabled = false;
    getAnsButton.disabled = false;
  }
  else {
    clearButton.disabled = true;
    getAnsButton.disabled = true;
  }
}

function generateResponse() {
  responseDisplay.classList.remove('hidden-items');
  questionDisplay.classList.remove('hidden-items');
  ballImg.classList.add('hidden-items');
  var ranNum = Math.floor(Math.random() * 20);
  responseDisplay.innerHTML = allMessages[ranNum];
  transferQuestion();
}

function transferQuestion() {
  questionDisplay.innerText = '"' + textInputBox.value + '"';
  textInputBox.value = '';
}

function clearOutputs() {
  textInputBox.value = '';
  responseDisplay.classList.add('hidden-items');
  questionDisplay.classList.add('hidden-items');
  ballImg.classList.remove('hidden-items');
}
