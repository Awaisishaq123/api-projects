
// let questions = [];
// let index = 0;
// let score = 0;
// let quizTimer;
// let totalTime = 20 * 60; // 20 minutes

// const API_URL = "https://opentdb.com/api.php?amount=20&category=9&difficulty=medium&type=multiple";

// const htmlques = document.getElementById("ques");
// const htmlopt1 = document.getElementById("opt1");
// const htmlopt2 = document.getElementById("opt2");
// const htmlopt3 = document.getElementById("opt3");
// const htmlopt4 = document.getElementById("opt4");
// const getBtn = document.getElementById("btn");
// const timerDisplay = document.getElementById("timer");

// // Fetch questions and start quiz
// fetch(API_URL)
//   .then((res) => res.json())
//   .then((data) => {
//     questions = data.results.map((item) => {
//       const allOptions = [...item.incorrect_answers, item.correct_answer];
//       const shuffledOptions = allOptions.sort(() => Math.random() - 0.5);
//       return {
//         question: item.question,
//         options: shuffledOptions,
//         correct: item.correct_answer
//       };
//     });
//     startQuizTimer();
//     nextQuestion();
//   })
//   .catch((err) => {
//     htmlques.innerText = "Failed to load questions!";
//     console.error(err);
//   });

// // Start Timer
// function startQuizTimer() {
//   updateTimerDisplay();
//   quizTimer = setInterval(() => {
//     totalTime--;
//     updateTimerDisplay();
//     if (totalTime <= 0) {
//       clearInterval(quizTimer);
//       endQuiz("⏱️ Time's up!");
//     }
//   }, 1000);
// }

// function updateTimerDisplay() {
//   let minutes = Math.floor(totalTime / 60);
//   let seconds = totalTime % 60;
//   timerDisplay.innerText = `⏱️ Time Left: ${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
// }

// // Enable Next Button
// function btnWork() {
//   getBtn.disabled = false;
// }

// // Load next question
// function nextQuestion() {
//   const inputs = document.getElementsByTagName("input");
//   let selectedAnswer = null;

//   for (let input of inputs) {
//     if (input.checked) {
//       const label = document.querySelector(`label[for="${input.id}"]`);
//       selectedAnswer = label.innerText;
//     }
//     input.checked = false;
//   }

//   if (index > 0 && selectedAnswer === questions[index - 1].correct) {
//     score++;
//   }

//   if (index >= questions.length) {
//     clearInterval(quizTimer);
//     endQuiz("✅ Quiz Completed!");
//     return;
//   }

//   const q = questions[index];
//   htmlques.innerHTML = q.question;
//   htmlopt1.innerText = q.options[0];
//   htmlopt2.innerText = q.options[1];
//   htmlopt3.innerText = q.options[2];
//   htmlopt4.innerText = q.options[3];

//   htmlopt1.setAttribute("for", "opt1_radio");
//   htmlopt2.setAttribute("for", "opt2_radio");
//   htmlopt3.setAttribute("for", "opt3_radio");
//   htmlopt4.setAttribute("for", "opt4_radio");

//   getBtn.disabled = true;
//   index++;
// }

// // Show result
// function endQuiz(message) {
//   Swal.fire({
//     title: message,
//     text: `Your Score: ${score}/${questions.length}`,
//     icon: "success",
//     confirmButtonText: "Restart"
//   }).then(() => {
//     window.location.reload();
//   });
// }



// let questions = [];
// let index = 0;
// let score = 0;
// let quizTimer;
// let totalTime = 20 * 60; // 20 minutes in seconds

// // Replace this with your actual Mocki API URL
// const API_URL =
//   "https://opentdb.com/api.php?amount=20&category=9&difficulty=medium&type=multiple"; // ← Change this

// const htmlques = document.getElementById("ques");
// const htmlopt1 = document.getElementById("opt1");
// const htmlopt2 = document.getElementById("opt2");
// const htmlopt3 = document.getElementById("opt3");
// const getBtn   = document.getElementById("btn");

// // Quiz Timer Display
// const timerDisplay = document.createElement("p");
// timerDisplay.style.color = "green";
// timerDisplay.style.fontWeight = "bold";
// htmlques.parentNode.insertBefore(timerDisplay, htmlques);

// // Fetch Questions
// fetch(API_URL)
//   .then((res) => res.json())
//   .then((data) => {
//     questions = data;
//     startQuizTimer(); // Start 20-minute timer
//     nextQuestion(); // Load first question
//   })
//   .catch((err) => {
//     htmlques.innerText = "Failed to load questions!";
//     console.error(err);
//   });

// // Start 20-minute quiz timer
// function startQuizTimer() {
//   updateTimerDisplay();
//   quizTimer = setInterval(() => {
//     totalTime--;
//     updateTimerDisplay();
//     if (totalTime <= 0) {
//       clearInterval(quizTimer);
//       endQuiz("Time's up!");
//     }
//   }, 1000);
// }

// // Show time remaining
// function updateTimerDisplay() {
//   let minutes = Math.floor(totalTime / 60);
//   let seconds = totalTime % 60;
//   timerDisplay.innerText = `⏱️ Time Left: ${minutes}:${
//     seconds < 10 ? "0" : ""
//   }${seconds}`;
// }

// // Handle radio input selection
// function btnWork() {
//   getBtn.disabled = false;
// }

// // Show next question
// function nextQuestion() {
//   const inputs = document.getElementsByTagName("input");
//   let selectedAnswer = null;

//   for (let input of inputs) {
//     if (input.checked) {
//       const label = document.querySelector(`label[for="${input.id}"]`);
//       selectedAnswer = label.innerText;
//     }
//     input.checked = false;
//   }

//   // Check previous answer
//   if (index > 0 && selectedAnswer === questions[index - 1].correctOption) {
//     score++;
//   }

//   if (index >= questions.length) {
//     clearInterval(quizTimer);
//     endQuiz("Quiz Completed!");
//   } else {
//     const q = questions[index];
//     htmlques.innerText = q.question;
//     htmlopt1.innerText = q.option1;
//     htmlopt2.innerText = q.option2;
//     htmlopt3.innerText = q.option3;

//     htmlopt1.setAttribute("for", "opt1_radio");
//     htmlopt2.setAttribute("for", "opt2_radio");
//     htmlopt3.setAttribute("for", "opt3_radio");

//     getBtn.disabled = true;
//     index++;
//   }
// }

// // Show final result
// function endQuiz(message) {
//   Swal.fire({
//     title: message,
//     text: `Your score: ${score}/${questions.length}`,
//     icon: "info",
//   });
//   getBtn.disabled = true;
// }




// var questions = [
//     {
//         question: "What does HTML stand for?",
//         option1: "Hyperlinks and Text Markup Language",
//         option2: "Hypertext Markup Language",
//         option3: "Home Tool Markup Language",
//         correctOption: "Hypertext Markup Language",
//     },
//     {
//         question: "Who is making the Web standards?",
//         option1: "Google",
//         option2: "The World Wide Web Consortium",
//         option3: "Microsoft",
//         correctOption: "The World Wide Web Consortium",
//     },
//     {
//         question: "Choose the correct HTML element for the largest heading:",
//         option1: "<heading>",
//         option2: "<h6>",
//         option3: "<h1>",
//         correctOption: "<h1>",
//     },
//     {
//         question: "What is the correct HTML element for inserting a line break?",
//         option1: "<linebreak>",
//         option2: "<br>",
//         option3: "<break>",
//         correctOption: "<br>",
//     },
//     {
//         question: "What is the correct HTML for adding a background color?",
//         option1: '<body bg="yellow">',
//         option2: "<background>yellow</background>",
//         option3: '<body style="background-color:yellow;">',
//         correctOption: '<body style="background-color:yellow;">',
//     },
//     {
//         question: "Choose the correct HTML element to define important text:",
//         option1: "<strong>",
//         option2: "<b>",
//         option3: "<i>",
//         correctOption: "<strong>",
//     },
//     {
//         question: "Choose the correct HTML element to define emphasized text:",
//         option1: "<italic>",
//         option2: "<i>",
//         option3: "<em>",
//         correctOption: "<em>",
//     },
//     {
//         question: "What is the correct HTML for creating a hyperlink?",
//         option1: "<a>http://www.w3schools.com</a>",
//         option2: '<a href="http://www.w3schools.com">W3Schools</a>',
//         option3: '<a url="http://www.w3schools.com">W3Schools.com</a>',
//         correctOption: '<a href="http://www.w3schools.com">W3Schools</a>',
//     },
// ];

// var htmlques = document.getElementById('ques')
// var htmlopt1 = document.getElementById('opt1')
// var htmlopt2 = document.getElementById('opt2')
// var htmlopt3 = document.getElementById('opt3')
// var index = 0
// var getBtn = document.getElementById('btn')
// var score = 0

// function nextQuestion() {

//     var getInputs = document.getElementsByTagName('input')
//     for(var i=0; i < getInputs.length; i++){
//         getInputs[i].checked = false
//     }

//     if (index >= questions.length ) {
//         Swal.fire({
//             title: "Quiz End!",
//             text: "Restart Quiz",
//             icon: "success"
//         });
//     }
//     else {
//         htmlques.innerText = questions[index].question
//         htmlopt1.innerText = questions[index].option1
//         htmlopt2.innerText = questions[index].option2
//         htmlopt3.innerText = questions[index].option3
//         index++
//     }

//     getBtn.disabled = true

// }

// nextQuestion()

// function btnWork(){

//     getBtn.disabled = false

// }

