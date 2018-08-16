/* jshint esversion: 6 */
/* 3rd Quiz */

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('resulty');
const submitButton = document.getElementById('submit');

(function () {
  const myQuestions = [{
      question: "What are bees?",
      answers: {
        a: "Spiders",
        b: "Fish",
        c: "Insects"
      },
      correctAnswer: "c"
    },
    {
      question: "Are bees really endangered?",
      answers: {
        a: "Yes, and they are curcial to our food supply!",
        b: "No"
      },
      correctAnswer: "a"
    },
    {
      question: "What is the most important tasks of bees??",
      answers: {
        a: "Honey",
        b: "Zooming",
        c: "Pollenating"
      },
      correctAnswer: "c"
    }
  ];

  function buildQuiz() {
    // Here, we'll need a place to store the HTML output
    const output = [];
    // For each question we use a loop
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        // Here we'll want to stor the list of answer choices
        const answers = [];

        // Here for each answer, we also use a loop function
        for (let letter in currentQuestion.answers) {

          // add an HTML radio buttons
          answers.push(
            `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
            </label>
          `
          );
        }

        // Add this question and its answers to the output
        output.push(
          `<div class="question">${currentQuestion.question}</div>
        <div class="answers"> ${answers.join('')}</div>
        `
        );
      }
    );

    // Finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }

  function showResults() {
    // Gather answer cintainers from our quiz
    const answerContainters = quizContainer.querySelectorAll('.answers');

    // Keep track of the user's answers
    let numCorrect = 0;

    // For each Question
    myQuestions.forEach((currentQuestion, questionNumber) => {

      // Find selected answer
      const answerContainer = answerContainters[questionNumber];
      const selector = 'input[name = question' + questionNumber + ']:checked';
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // If answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // Add to the number of correct answers
        numCorrect++;

        // Color the answers green
        answerContainters[questionNumber].style.color = 'green';
      } else {
        // Answer wrongly, turn text red
        answerContainters[questionNumber].style.color = 'red';
      }

    });
  }

  // Display quiz right away
  buildQuiz();

  // On submit, show results
  submitButton.addEventListener('click', showResults);
})();