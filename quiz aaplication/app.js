let questions = [];
let index = 0;
let score = 0;
let quizTimer;
let totalTime = 20 * 60;

const API_URL = "https://opentdb.com/api.php?amount=20&category=9&difficulty=medium&type=multiple";

const htmlques = document.getElementById("ques");
const htmlopt1 = document.getElementById("opt1");
const htmlopt2 = document.getElementById("opt2");
const htmlopt3 = document.getElementById("opt3");
const htmlopt4 = document.getElementById("opt4");
const getBtn = document.getElementById("btn");
const timerDisplay = document.getElementById("timer");

fetch(API_URL)
  .then((res) => res.json())
  .then((data) => {
    questions = data.results.map((item) => {
      const allOptions = [...item.incorrect_answers, item.correct_answer];
      const shuffled = allOptions.sort(() => Math.random() - 0.5);
      return {
        question: item.question,
        options: shuffled,
        correct: item.correct_answer
      };
    });

    startQuizTimer();
    nextQuestion();
  })
  .catch((err) => {
    htmlques.innerText = "Failed to load questions!";
    console.error(err);
  });

function startQuizTimer() {
  updateTimerDisplay();
  quizTimer = setInterval(() => {
    totalTime--;
    updateTimerDisplay();
    if (totalTime <= 0) {
      clearInterval(quizTimer);
      endQuiz("⏱️ Time's up!");
    }
  }, 1000);
}

function updateTimerDisplay() {
  let minutes = Math.floor(totalTime / 60);
  let seconds = totalTime % 60;
  timerDisplay.innerText = `⏱️ Time Left: ${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

function btnWork() {
  getBtn.disabled = false;
}

function nextQuestion() {
  const inputs = document.getElementsByTagName("input");
  let selectedAnswer = null;

  for (let input of inputs) {
    if (input.checked) {
      const label = input.nextElementSibling;
      selectedAnswer = label.innerText;
    }
    input.checked = false;
  }

  if (index > 0 && selectedAnswer === questions[index - 1].correct) {
    score++;
  }

  if (index >= questions.length) {
    clearInterval(quizTimer);
    endQuiz("✅ Quiz Completed!");
    return;
  }

  const q = questions[index];
  htmlques.innerHTML = q.question;
  htmlopt1.innerText = q.options[0];
  htmlopt2.innerText = q.options[1];
  htmlopt3.innerText = q.options[2];
  htmlopt4.innerText = q.options[3];

  getBtn.disabled = true;
  index++;
}

function endQuiz(message) {
  Swal.fire({
    title: message,
    text: `🎯 Your Score: ${score}/${questions.length}`,
    icon: "success",
    confirmButtonText: "Restart"
  }).then(() => {
    window.location.reload();
  });
}
