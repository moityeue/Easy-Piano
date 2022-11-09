// Récupérer mes 3 blocks div HTML //
let header_screen = document.getElementById("header_screen");
let questions_screen = document.getElementById("questions_screen");
let result_screen = document.getElementById("result_screen");

// fonction Quiz //
function Quiz(){
    this.questions = [];
    this.nbrCorrects = 0;
    this.indexCurrentQuestion = 0;

    // Ajouts de questions
    this.addQuestion = function(question) {
        this.questions.push(question);
    }

    // Fonction résultat final //
    this.displayCurrentQuestion = function() {
        if(this.indexCurrentQuestion < this.questions.length) {
            this.questions[this.indexCurrentQuestion].getElement(
                this.indexCurrentQuestion + 1, this.questions.length
            );
        }
        else {
            questions_screen.style.display = "none";

            let NbrCorrectUser = document.querySelector("#nbrCorrects");
            NbrCorrectUser.textContent = quiz.nbrCorrects;
            result_screen.style.display = "block";
        }
    }
}


// Fonction Question permettant de créer les questions avec le titre, les réponses et la réponse correcte//
function Question(title, answers, answerCorrect) {
    this.title = title,
    this.answers = answers,
    this.answerCorrect = answerCorrect,

    // Mise en place et structuration pour mes questions
    this.getElement = function(indexQuestion, nbrOfQuestions) {
        let questionTitle = document.createElement("h3");
        questionTitle.classList.add("title_questions");
        questionTitle.textContent = this.title;

        // afficher le html //
        questions_screen.append(questionTitle);

        let questionAnswer = document.createElement("ul");
        questionAnswer.classList.add("list_questions");

        // Boucle en ForEach pour placer à chaque fois un <li> pour chaque réponse
        this.answers.forEach((answer, index) => {
            let answerElement =  document.createElement("li");
            answerElement.classList.add("answers");
            answerElement.textContent = answer;
            answerElement.id = index + 1;
            answerElement.addEventListener("click", this.checkAnswer)
    
            questionAnswer.append(answerElement);
        });

        // Fonction pour voir à combien de question on est sur le total de questions présents
        let questionNumber = document.createElement("h4");
        questionNumber.classList.add("avancement_question");
        questionNumber.textContent = "Questions : " + indexQuestion + "/" + nbrOfQuestions;

        questions_screen.append(questionNumber);

        questions_screen.append(questionAnswer);
    }

    this.addAnswer = function(answer) {
        this.answers.push(answer);
    },

    // la réponse correcte 
    this.checkAnswer = (e) => { 
        let answerSelect = e.target;
        if(this.isCorrectAnswer(answerSelect.id)) {
            answerSelect.classList.add("answersCorrect");
            quiz.nbrCorrects++;
        }
        else {
            answerSelect.classList.add("answersWrong");
            let RightAnswer = document.getElementById(this.answerCorrect);
            RightAnswer.classList.add("answersCorrect");
        }

        // Mise en place d'une fonction Timeout pour passer à la prochaine question,next question
        setTimeout(function() {
            questions_screen.textContent = '';
            quiz.indexCurrentQuestion++;
            quiz.displayCurrentQuestion();
        }, 2000)
    }

    // vérification réponse
    this.isCorrectAnswer = function(answerUser) {
        if(answerUser == this.answerCorrect) {
            return true;
        }
        else {
            return false;
        }
    }
};


//je crée mes questions//
let quiz = new Quiz();

let question1 = new Question("En quelle année a été composé 'Au clair de la lune' ? ", ["1940", "1860", "1925", "1926"], 2);
quiz.addQuestion(question1);


let question2 = new Question("En quelle année a été composé 'Bella Ciao'? ", ["1942", "1924", "1944", "1936"], 3);
quiz.addQuestion(question2);

let question3 = new Question("En quelle année a été composé 'Ce reve bleu' ? ", ["1992", "1995", "1991", "1987"], 1);
quiz.addQuestion(question3);

let question4 = new Question("En quelle année a été composé 'Frere Jacques' ?", ["1940", "1945", "1946", "1942"], 2);
quiz.addQuestion(question4);

let question5 = new Question("En quelle année a été composé 'Joyeux Anniversaire' ? ", ["1892", "1870", "1910", "1893"], 4);
quiz.addQuestion(question5);

let question6 = new Question("En quelle année a été composé 'La panthere rose' ? ", ["1963", "1954", "1956", "1940"], 1);
quiz.addQuestion(question6);

let question7 = new Question("En quelle année a été composé 'Les choristes' ? ", ["2000", "2004", "2002", "2003"], 2);
quiz.addQuestion(question7);

let question8 = new Question("En quelle année a été composé 'Lettre à Elise' ? ", [" 1755", "1825", "1810", "1910"], 3);
quiz.addQuestion(question8);

let question9 = new Question("En quelle année a été composé 'Petit papa noel' ", ["1920", "1944", "1943", "1921"], 2);
quiz.addQuestion(question9);

let question10 = new Question("En quelle année a été composé 'Raiponce' ? ", ["2001", "2012", "2004","2010"], 4);
quiz.addQuestion(question10);

let NbrQuestion = document.querySelectorAll(".nbrQuestion");

NbrQuestion.forEach(function(NbrQuestion) {
    NbrQuestion.textContent = quiz.questions.length;
});


// démarrage questionnire
function startQuestions() {
    header_screen.style.display = "none";
    questions_screen.style.display = "block";

    quiz.displayCurrentQuestion();
}


// action start
let btn_start = document.getElementById("btn_start");
btn_start.addEventListener("click", startQuestions);


    