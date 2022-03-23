import { questions } from './questions.js';
import { uncheckRadios, disableRadios } from './handleRadioState.js';
import countersInstance from './handleCounters.js';
import { showResults } from './handleAnswers.js';
import disableNextQuestionBtn from './handleNextBtn.js';

const body = document.querySelector('body');
const form = document.querySelector('#my-form');
const questionTitle = document.querySelector('#question');
const image = document.querySelector('#img1');
const optionsParagraphs = document.querySelectorAll('.parag');
const nextQuestionButton = document.querySelector('#next-btn');

const counters = countersInstance;
let { counter: nextQuestionCounter } = counters;

const options = { 1: optionsParagraphs[0], 2: optionsParagraphs[1], 3: optionsParagraphs[2] }
const { 1: first, 2: second, 3: third } = options;

const showActualQuestion = () => {
  if(nextQuestionCounter !== questions.length) {  
    disableNextQuestionBtn(true);
    questionTitle.textContent = questions[nextQuestionCounter].question;

    first.textContent = questions[nextQuestionCounter].options.a;
    second.textContent = questions[nextQuestionCounter].options.b;
    third.textContent = questions[nextQuestionCounter].options.c;

    image.src = questions[nextQuestionCounter].img
  }else{ 
    body.removeChild(form);
    showResults()
  }
};
showActualQuestion(); //MUST_BE_CALLED_ONCE_TO_SHOW_THE_FIRST_QUESTION.

nextQuestionButton.addEventListener('click', () => {
  nextQuestionCounter ++;
  uncheckRadios();
  disableRadios(false);
  showActualQuestion();
})

export default showActualQuestion;