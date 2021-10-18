export class Question {
  /**
   *
   * @param {string} text textofquestion
   * @param {string[]} choises choisesfromquestion
   * @param {string} answer answerofquestion
   */
  constructor(text, choises, answer) {
    this.text = text;
    this.choises = choises;
    this.answer = answer;
  }

  /**
   *
   * @param {string} choice some text to guess
   * @returns {boolean} return true if the answer is correct
   */
  correctAnwer(choice) {
    return choice === this.answer;
  }
}
