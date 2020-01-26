$(document).ready(function (){
    var questions = [
        {
            title: "What does HTML stand for?",
            choices: ["Hyper Text Markup Language", "High Text Markup Language", "Hyper Tabular Markup Lanuage", "High Tabular Markup Language"],
            answer: "Hyper Text Markup Language"
        },

        {
            title: "Arrays can contain which of the following?",
            choices: ["Strings", "Numbers", "Booleans", "All Of the Above"],
            answer: "All Of the Above"
        },

        {
            title: "Which of the following is the correct marking for begining a paragraph?",
            choices: ["<p>", "<par>", "br", "txt"],
            answer: "<p>"
        },

        {
            title: "What is the correct format to link your styles sheet to your index file?",
            choices: ["src='style' href='filename.css'", "stylesheet href='filename.css'", "link='stylesheet' href='filename.css", "src='stylesheet' href='filename.css'"],
            answer: "src='stylesheet' href='filename.css'"

        },

        {
            title: "What is the correct mark for executing JavaScript in your main index file?",
            choices: ["<scrlink>", "<jscript>", "<scripting>", "<script>"],
            answer: "<script>"
        },
    ];
    $(".questions").text($(this).text());
    

    for (var i=0; i < questions.length; i++) {
    console.log("title: " + questions[i].title, "choices: " + questions[i].choices);    
    }

    timeEl = document.querySelector(".time");
    var secondsLeft = 75;
    function setTime() {
        var timeInterval = setInterval(function (){
            secondsLeft--;
            timeEl.textContent = secondsLeft;

            if(secondsLeft === 0) {
                clearInterval(timeInterval);
            }
        }, 1000);
    }

    var mainEl = document.getElementById("main");
    var timerEl = document.getElementById("countdown");
    var bodyEl = document.getElementById("div");

    function quiz() {
        var timeInterval = setInterval(function () {
            timerEl.textContent = timeLeft;
            timeleft--;

            if (timeLeft === 0) {
                timerEl.textContent = "";
                clearInterval(timeInterval);
            }
        }, 1000)
    }






});