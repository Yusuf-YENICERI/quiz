import { questions } from './questions.js';
import { disableRadios } from './handleRadioState.js';
import countersInstance from './handleCounters.js';
import disableNextQuestionBtn from './handleNextBtn.js';
disableNextQuestionBtn(true);

const body = document.querySelector('body');
const allRadios = document.querySelectorAll('.btn');
const counters = countersInstance;
let { counter, wrongAnswerCounter } = counters;

export const checkAnswer = answerValue => {
  const allAnswers = questions.map(question => question.answer);

  if(answerValue === allAnswers[counter]) {
    counter++;
    disableRadios(true);
    disableNextQuestionBtn(false);
  }else {
    counter ++;
    wrongAnswerCounter ++;
    disableRadios(true);
    disableNextQuestionBtn(false)
  }
}

export const showResults = () => {
  const p = document.createElement('p');
  p.classList.add('show-results');
  p.textContent = `Fim! Você acertou ${ counter - wrongAnswerCounter }!`;
  body.appendChild(p);
}

allRadios.forEach( radio => radio.addEventListener('click', () => checkAnswer(radio.value)) );