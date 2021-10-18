import { newquestions } from "./data/questions.js";
import { Quiz } from "./models/quizz.js";
import { UI } from "./models/frontend.js";

/**
 *
 * @param {Quiz} quiz quiz object
 * @param {UI} ui ui object
 */
const renderPage = (quiz, ui) => {
  if (quiz.isEnded()) {
    console.log(quiz.score);
    ui.showScores(quiz.score);
  } else {
    ui.showQuestion(quiz.getQuestionIndex().text);
    ui.showChoises(quiz.getQuestionIndex().choises, (currentChoise) => {
      quiz.guess(currentChoise);
      renderPage(quiz, ui);
    });
    ui.showProgress(quiz.questionIndex + 1, newquestions.length);
  }
};

function main() {
  const quiz = new Quiz(newquestions);
  const ui = new UI();
  renderPage(quiz, ui);
}

main();
