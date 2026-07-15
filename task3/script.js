const questions=[

{
question:"Which language runs inside the browser?",
options:["Java","Python","JavaScript","C++"],
answer:2
},

{
question:"HTML stands for?",
options:[
"Hyper Text Markup Language",
"High Transfer Machine Language",
"Home Tool Markup Language",
"Hyperlinks Text Machine Language"
],
answer:0
},

{
question:"CSS is used for?",
options:[
"Programming",
"Styling Web Pages",
"Database",
"Networking"
],
answer:1
},

{
question:"Which company developed Java?",
options:[
"Google",
"Sun Microsystems",
"Apple",
"IBM"
],
answer:1
},

{
question:"Which symbol is used for comments in JavaScript?",
options:[
"//",
"<!-- -->",
"#",
"**"
],
answer:0
},

{
question:"Which tag displays the largest heading?",
options:[
"<h6>",
"<head>",
"<h1>",
"<title>"
],
answer:2
},

{
question:"Which keyword declares variables in JavaScript?",
options:[
"int",
"var",
"string",
"float"
],
answer:1
},

{
question:"Which CSS property changes text color?",
options:[
"font",
"background",
"color",
"text"
],
answer:2
},

{
question:"Which HTML tag inserts an image?",
options:[
"<image>",
"<img>",
"<src>",
"<picture>"
],
answer:1
},

{
question:"Which method prints to browser console?",
options:[
"console.log()",
"print()",
"echo()",
"printf()"
],
answer:0
}

];

const startScreen=document.getElementById("startScreen");
const quizScreen=document.getElementById("quizScreen");
const resultScreen=document.getElementById("resultScreen");

const question=document.getElementById("question");
const answers=document.getElementById("answers");

const progress=document.getElementById("progress");
const progressText=document.getElementById("progressText");
const scoreText=document.getElementById("score");

const timer=document.getElementById("timer");

const startBtn=document.getElementById("startBtn");
const nextBtn=document.getElementById("nextBtn");
const restartBtn=document.getElementById("restartBtn");

let current=0;
let score=0;
let selected=null;

let time=20;
let interval;

startBtn.onclick=()=>{
startScreen.classList.add("hide");
quizScreen.classList.remove("hide");
loadQuestion();
}

function loadQuestion(){

clearInterval(interval);

time=20;
timer.innerHTML=time;

interval=setInterval(()=>{

time--;

timer.innerHTML=time;

if(time==0){

clearInterval(interval);

nextQuestion();

}

},1000);

selected=null;

progressText.innerHTML=`Question ${current+1} / ${questions.length}`;

progress.style.width=((current)/questions.length)*100+"%";

question.innerHTML=questions[current].question;

answers.innerHTML="";

questions[current].options.forEach((option,index)=>{

let btn=document.createElement("div");

btn.className="option";

btn.innerHTML=option;

btn.onclick=()=>{

document.querySelectorAll(".option").forEach(x=>x.classList.remove("selected"));

btn.classList.add("selected");

selected=index;

}

answers.appendChild(btn);

});

}

nextBtn.onclick=()=>{

nextQuestion();

}

function nextQuestion(){

clearInterval(interval);

if(selected===questions[current].answer){

score++;

}

current++;

if(current==questions.length){

finishQuiz();

return;

}

loadQuestion();

}

function finishQuiz(){

quizScreen.classList.add("hide");

resultScreen.classList.remove("hide");

progress.style.width="100%";

let percent=(score/questions.length)*100;

scoreText.innerHTML=`${score} / ${questions.length}<br><br>${percent}%`;

}

restartBtn.onclick=()=>{

current=0;

score=0;

resultScreen.classList.add("hide");

quizScreen.classList.remove("hide");

loadQuestion();

}