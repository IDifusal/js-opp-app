//@ts-check
import { Question } from "./question.js";
export class Quiz {
  questionIndex = 0;
  score = 0;
  /**
   *
   * @param {Question[]} questions
   */
  constructor(questions) {
    this.questions = questions;
  }
  /**
   *
   * @returns {Question}
   */
  getQuestionIndex() {
    return this.questions[this.questionIndex];
  }

  isEnded() {
    return this.questions.length === this.questionIndex;
  }

  guess(answer) {
    console.log(answer);
    if (this.getQuestionIndex().correctAnwer(answer)) {
      this.score++;
    }
    this.questionIndex++;
  }
}
