var points = 0;
var highscore = 3;
var questions = [{
  question: 'How many continents?',
  answers: ['7 continents', '5 continents', '180 continents'],
  correctanswerKey: 0
}, {
  question: 'How many countries',
  answers: ['more than 1000 countries', 'aprox. 50 countries', '195 countries'],
  correctanswerKey: 2
}, {
  question: 'How many queens are in a hive',
  answers: ['one', 'one and maybe serveral younglings', 'thousands', 'depending on species'],
  correctanswerKey: 3
}];

function rightAnswer(questionId) {
  points = points + 1;
  var pointsElement = document.getElementById('points');
  pointsElement.innerHTML = points;

  var questionElement = document.getElementById(questionId);
  questionElement.innerText = 'You are correct!';
  questionElement.style.color = 'green';

  checkHighscore();
}

function wrongAnswer(questionId) {
  var questionElement = document.getElementById(questionId);
  questionElement.innerHTML += '<div class="error">Sorry, try again.</div>';
}

function checkHighscore() {
  if (points == highscore) {
    var pointsElement = document.getElementById('points');
    pointsElement.innerHTML = points + ' Highscore!';
    pointsElement.style.fontWeight = 'bold';
    pointsElement.style.fontColor = 'green';
  }
}

function renderQuestions() {
  var questionsElement = document.getElementById('questions');

  var questionsCode = '';

  highscore += questions.length;

  for (var questionKey in questions) {
    questionsCode += '<h2>' + questions[questionKey].question + '</h2>';

    questionsCode += '<div id="questionX' + questionKey + '">';
    for (var answerKey in questions[questionKey].answers) {
      if (answerKey == questions[questionKey].correctanswerKey) {
        questionsCode += '<button onclick="rightAnswer(\'questionX' + questionKey + '\')" > ' + questions[questionKey].answers[answerKey] + '</button> ';
      } else {
        questionsCode += '<button onclick="wrongAnswer(\'questionX' + questionKey + '\')" > ' + questions[questionKey].answers[answerKey] + '</button> ';
      }
    }
    questionsCode += '</div>';
  }

  questionsElement.innerHTML = questionsCode;
}