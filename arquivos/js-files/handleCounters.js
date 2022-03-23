const countersInstance = ((counter = 0, wrongAnswerCounter = 0, rightAnswerCounter = 0) => {
  const counters = { counter, wrongAnswerCounter, rightAnswerCounter };
  return counters
})();

export default countersInstance;
module.exports = { countersInstance };