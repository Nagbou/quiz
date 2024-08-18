var questions = [
    {
        question: "What does CSS stand for?",
        answers: [
            { text: "Computer Style Sheets", correct: false },
            { text: "Cascading Style Sheets", correct: true },
            { text: "Creative Style Selector", correct: false }
        ]
    },
    {
        question: "Which of the following is a dynamically typed programming language?",
        answers: [
            { text: "Java", correct: false },
            { text: "Python", correct: true },
            { text: "C++", correct: false }
        ]
    },
    {
        question: "What does HTML stand for?",
        answers: [
            { text: "Hyper Text Markup Language", correct: true },
            { text: "High-level Text Management Language", correct: false },
            { text: "Hyperlinks and Text Manipulation Language", correct: false }
        ]
    },
    {
        question: "In Python, what is the correct way to open a file named 'data.txt' for reading?",
        answers: [
            { text: "file = open('data.txt', 'r')", correct: true },
            { text: "file = open('data.txt', 'w')", correct: false },
            { text: "file = open('data.txt', 'a')", correct: false }
        ]
    },
    {
        question: "What does the acronym 'SQL' stand for?",
        answers: [
            { text: "Structured Query Language", correct: true },
            { text: "Simple Question Language", correct: false },
            { text: "Standardized Query Logic", correct: false }
        ]
    }
];


var header_question = document.getElementById("question");
var body_answers = document.getElementsByClassName("answer");
var i = 0;
var answered = false;
var functionEnabled = true;
var timerInterval = setInterval(countDown, 1000);

filling()
finished_box = document.getElementsByClassName("finished")
finished_box[0].classList.add("display_none")
overlay = document.getElementsByClassName("overlay")
overlay[0].classList.add("display_none")

function nextQuestion() {
    if (functionEnabled) {
        if (answered) {
            if (i === questions.length - 1) {
                finished_box[0].classList.remove("display_none")
                overlay[0].classList.remove("display_none")
                clearInterval(timerInterval);
                i = 0;
                filling();
            } else {
                i++;
                filling();
            }
            removeClasses();
            document.getElementById("answers_list").disabled = false;
        } else {
            alert("Please provide your answer!");
        }
    } else {
        alert("Time's up! The quiz has ended.");
    }
}
function removeClasses() {
    for (j = 0; j < 3; j++) {
        for (j = 0; j < 3; j++) {
            any_answer = body_answers[j];
            any_answer.classList.remove("wrong_answer", "correct_answer");
        }
    }
}

function filling() {
    header_question.innerText = questions[i].question;
    answered = false;

    for (j = 0; j < 3; j++) {
        body_answers[j].innerText = questions[i].answers[j].text;
    }
    for (j = 0; j < 3; j++) {
        if (questions[i].answers[j].correct === true) {
            correct_answer = body_answers[j];
        }

        body_answers[j].addEventListener("click", function () {
            if (functionEnabled) {
                answered = true;
                for (k = 0; k < 3; k++) {
                    if (body_answers[k] === correct_answer) {
                        body_answers[k].classList.add("correct_answer");
                    } else {
                        body_answers[k].classList.add("wrong_answer");
                    }
                }
            }
        })

    }
}

var t = 30;
document.getElementById("timer").innerText = t;
function countDown() {
    if (t > 0) {
        functionEnabled = true;
        t--;
        document.getElementById("timer").innerText = t;
    } else {
        clearInterval(timerInterval);
        functionEnabled = false;
        finished_box[0].classList.remove("display_none")
        finished_text = document.getElementById("finished_text")
        finished_text.innerText = "Time's up! Speed up next time!"
        overlay[0].classList.remove("display_none")
    }

}
function restart() {
    location.reload();
}