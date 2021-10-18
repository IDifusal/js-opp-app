export class UI {
  constructor() {}
  /**
   *
   * @param {String} text question to render
   */
  showQuestion(text) {
    const questiontitle = document.getElementById("question");
    questiontitle.innerHTML = text;
  }
  /**
   *
   * @param {string[]} choises choises of the question
   */
  showChoises(choises, callback) {
    const choisesContainer = document.getElementById("choises");
    choisesContainer.innerHTML = "";
    for (let i = 0; i < choises.length; i++) {
      const button = document.createElement("button");
      button.innerText = choises[i];
      button.className = "btn btn-primary";
      button.addEventListener("click", () => callback(choises[i]));
      choisesContainer.append(button);
    }
  }
  /**
   *
   * @param {number} score the total score
   */
  showScores(score) {
    const quizEndHTML = `<h1> Result</h1>
    <h2> Your Score: ${score}</h2>`;

    const element = document.getElementById("quizz");
    element.innerHTML = quizEndHTML;
  }

  /**
   *
   * @param {Number} currentIndex the current ndex of quiz
   * @param {Number} total the total questions number
   */
  showProgress(currentIndex, total) {
    const element = document.getElementById("progress");
    element.innerText = `Question ${currentIndex} of ${total}`;
  }
}
