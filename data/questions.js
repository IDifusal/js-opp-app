import { Question } from "../models/question.js";
import { data } from "./data.js";

export const newquestions = data.map(
  (question) =>
    new Question(question.question, question.choises, question.answer)
);
