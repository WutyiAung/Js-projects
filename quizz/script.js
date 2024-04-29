// Quiz questions and answers
var questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Rome"],
        answer: "Paris"
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Jupiter"
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["William Shakespeare", "Jane Austen", "Charles Dickens", "Emily Bronte"],
        answer: "William Shakespeare"
    }
];

var currentQuestion = 0; // Index of the current question
var score = 0; // User's score

var questionElement = document.getElementById('question');
var optionsElement = document.getElementById('options');
var nextButton = document.getElementById('nextButton');
var resultElement = document.getElementById('result');

// Function to display the current question
function displayQuestion() {
    var currentQuestionData = questions[currentQuestion];
    questionElement.textContent = currentQuestionData.question;

    optionsElement.innerHTML = '';

    currentQuestionData.options.forEach(function(option) {
        var button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', function() {
            checkAnswer(option);
        });
        optionsElement.appendChild(button);
    });
}

// Function to check the user's answer
function checkAnswer(selectedOption) {
    var currentQuestionData = questions[currentQuestion];
    if (selectedOption === currentQuestionData.answer) {
        score++;
        resultElement.textContent = "Correct!";
    } else {
        resultElement.textContent = "Incorrect. The correct answer is: " + currentQuestionData.answer;
    }

    nextButton.style.display = 'block';
}

// Function to display the next question
function nextQuestion() {
    currentQuestion++;
    resultElement.textContent = '';

    if (currentQuestion < questions.length) {
        displayQuestion();
        nextButton.style.display = 'none';
    } else {
        endQuiz();
    }
}

// Function to end the quiz and display the final score
function endQuiz() {
    questionElement.textContent = "Quiz complete!";
    optionsElement.innerHTML = '';
    nextButton.style.display = 'none';
    resultElement.textContent = "Your final score: " + score + " out of " + questions.length;
}

// Initial display of the first question
displayQuestion();

// Event listener for the next button
nextButton.addEventListener('click', nextQuestion);
