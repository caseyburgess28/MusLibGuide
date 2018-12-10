(function(){
  const myQuestions = [
    {
      question: "1. Vanilla Ice’s “Ice Ice Baby” (1989) vs. Queen and David Bowie’s “Under Pressure” (1981): The argument was that Vanilla Ice stole the bassline from “Under Pressure”. Ice argued that he added a beat, which changed the melody. Listen to each excerpt and see if you can figure out what the judge ruled!"
      answers: {
        a: "Woah they're the same!"
        b: "They're definitely different!"
      }
      correctAnswer: "a"
    },
    {
      question: "2. Robin Thicke and Pharrell Williams’s “Blurred Lines” (2013) vs. “Got to Give It Up” by Marvin Gaye (1977): This was a recent case, which argued that Thicke stole the “general vibe” of Gaye’s song as well as aspects of the percussion. What do you think?"
      answers: {
      a: "Woah they're the same!"
      b: "They're definitely different!"
      }
  correctAnswer: "a"
    },
    {
      question: "3. “The Old Man Down the Road” by John Fogerty (1985) vs. “Run Through the Jungle” by Creedence Clearwater Revival (1970): Fogerty used to be part of the CCR, but went solo. When he released this song, Fantasy Records, the label for Creedence Clearwater Revival, sued him and claimed he stole the song from “Run Through the Jungle,” which he wrote with the band in 1970. Are they the same?"
      answers: {
      a: "Woah they're the same!"
      b: "They're definitely different!"
      }
  correctAnswer: "b"
    },
    {
      question: "4. “Oh, Pretty Woman” by Roy Orbison (1964) vs. “Pretty Woman” by 2 Live Crew (1989): 2 Live Crew produced their song by rapping over the original Orbison song, producing a humorous take on the original lyrics. They originally asked for permission to use the song, but were refused. When they released the song anyways, they were sued. What do you think?"
      answers: {
      a: "Woah they're the same!"
      b: "They're definitely different!"
      }
  correctAnswer: "b"
    },
    {
      question: "5. Finally, this is an ongoing case, but see what others think should happen! It’s “Get Free” by Lana Del Rey (2017) vs. “Creep” by Radiohead (1992). Lawyers representing Radiohead’s music publisher Warner/Chappell have said that they are in talks with Lana Del Rey’s representation in a potential lawsuit between the two songs. The argument is that the chord progression and melody of the verses is extremely similar. Interestingly enough, Radiohead had been sued for the same song by Albert Hammond and Mike Hazlewood over similarities with their song “The Air That I Breathe.” It was settled out of court, so we don’t know the outcome. What do you think a court will rule if it goes to trial?"
      answers: {
      a: "Woah they're the same!"
      b: "They're definitely different!"
      }
  correctAnswer: "a"
    },
  ];

function buildQuiz(){
//we'll need a place to store the HTML output
const output = [];

//for each question...
myQuestions.forEach(
  (currentQuestion, questionNumber) => {
    //we'll want to store the list of answer choices
    //here goes the code we want to run for each question
    const answers = [];

    //and for each available answer...
    for(letter in currentQuestion.answers){
      //...add an HTML radio button
      answers.push(
        <label>
          <input type="radio" name="question$(questionNumber)" value="$(letter)">
            ${letter} :
            $(currentQuestion.answers[letter])
        </label
      );
    }
    //add this question and its answers to the output
    output.push(
      `<div class="slide">
        <div class="question">
      ${currentQuestion.question} </div>
      <div class="answers"> ${answers.join('')}
      </div>`
      </div>
    );
    // pagination
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
  }
);
//finally combine our output list into one string of HTML and put it on the page
quizContainer.innerHTML = output.join("");

quizContainer.innerHTML = output.join('');
}

function showResults(){
  // gather answer containers from our quiz
  const answerContainers =
    quizContainer.querySelectorAll('.answers');

  //keep track of user's answers
  let numCorrect = 0;

//for each question...
  myQuestion.forEach( (currentQuestion, questionNumber) => {

  //find selected answer
  const answerContainer =
    answerContainers[questionNumber];
  const selector = `input[name=question${questionNumber}]:checked`;
  const userAnswer = (answerContainer.querySelector(selector) || {}).value;

  //if answer is correct
  if(userAnswer===currentQuestion.correctAnswer){
  // add to the number of correct answers
  numCorrect++;

  //color the answers green
  answerContainers[questionNumber].style.color = 'lightgreen';
  }
  //if answer is wrong or blank
  else{
  //color the answers red
  answerContainers[questionNumber].style.color = 'red';
  }
});

//show number of correct answers out of total
resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}

function showSlide(n) {
  slides[currentSlide].classList.remove('active-slide');
  slides[n].classList.add('active-slide');
  currentSlide = n;
  if(currentSlide===0){
    previousButton.style.disply = 'none';
  }
  else{
    previousButton.style.display = 'inline-block';
  }
  if(currentSlide===slides.length-1){
    nextButton.style.display = 'none';
    submitButton.style.display = 'none';
  }
}

showSlide(0);

function showNextSlide() {
  showSlide(currentSlide - 1);
}

previousButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);

cont quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

//display quiz right away
buildQuiz();

const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

//onsubmit, show resultsContainer
submitButton.addEventListener('click', showResults);
previousButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);
})();
