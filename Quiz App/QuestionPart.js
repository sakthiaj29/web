
var questions = [
      {
        "question": "1) What is the output of the following code snippet?\n\npublic class Test {\n    public static void main(String[] args) {\n        int x = 5;\n        System.out.println(x++); \n    }\n}",
        "options": ["A) 5", "B) 6", "C) Compilation Error", "D) Runtime Error"],
        "answer": "A) 5",
        "correctOption": "1"
      },
      {
        "question": "2) What is the output of the following code snippet?\n\npublic class Test {\n    public static void main(String[] args) {\n        int x = 10;\n        int y = 5;\n        System.out.println(x / y); \n    }\n}",
        "options": ["A) 2", "B) 2.0", "C) 1.5", "D) Compilation Error"],
        "answer": "A) 2",
        "correctOption": "1"
      },
      {
        "question": "3) What is the output of the following code snippet?\n\npublic class Test {\n    public static void main(String[] args) {\n        int x = 7;\n        System.out.println(x >> 1); \n    }\n}",
        "options": ["A) 14", "B) 7", "C) 3", "D) Compilation Error"],
        "answer": "C) 3",
        "correctOption": "3"
      },
      {
        "question": "4) What is the output of the following code snippet?\n\npublic class Test {\n    public static void main(String[] args) {\n        int x = 7;\n        System.out.println(x >>> 1); \n    }\n}",
        "options": ["A) 7", "B) 3", "C) 14", "D) Compilation Error"],
        "answer": "B) 3",
        "correctOption": "2"
      },
      {
         "question": "5) What is the output of the following code snippet?\n\npublic class Test {\n    public static void main(String[] args) {\n        String str1 = \"hello\";\n        String str2 = \"world\";\n        String result = str1 + str2;\n        System.out.println(result); \n    }\n}",
         "options": ["A) worldhello", "B) hello world", "C) helloworld", "D) Compilation Error"],
         "answer": "C) helloworld",
         "correctOption": "3"
       }
];

var index ;
var correctAnswer;
var questionLength;
var correctOption;

function startQuiz() {
   index=0;
   correctAnswer=0;
   correctOption="0";
   questionLength=questions.length;
   displayQuestion();
}
function displayQuestion() {
   if(index==questionLength-1){
      createQuestionAndAns(questions[index], "Submit");
   }
   else if(index<questionLength){
      createQuestionAndAns(questions[index], "Next");
   }
   else{
      var suggestion="";       
      if(correctAnswer==5){
         suggestion="Great Job !";
      }
      else if(correctAnswer==3 || correctAnswer==4){
         suggestion="Good Job !";
      }
      else{
         suggestion="Do Better !";
      }
      document.getElementById("container").innerHTML="";

      showScore(correctAnswer, questionLength, suggestion);
   }
   index++;
}

var option;
var optionA, optionB, optionC, optionD;
function createQuestionAndAns(eachQuestion, button) {

   option="0";

   var questionContainer = document.createElement("div");
   questionContainer.classList.add("question-container");

   var question = document.createElement("p");
   question.classList.add("question");
   question.innerText = eachQuestion["question"];

   var ans = document.createElement("div");
   ans.classList.add("ans-container");

   optionA = document.createElement("div");
   optionA.classList.add("option");
   optionA.setAttribute("id", "1");
   optionA.innerText = eachQuestion["options"][0];

   optionA.addEventListener("click", function () {
      resetBackgroundColor();
      optionA.style.backgroundColor = "rgb(54, 163, 253)";
      option = "1";
   });

   optionB = document.createElement("div");
   optionB.classList.add("option");
   optionB.setAttribute("id", "2");
   optionB.innerText = eachQuestion["options"][1];
   optionB.addEventListener("click", function () {
      resetBackgroundColor();
      optionB.style.backgroundColor = "rgb(54, 163, 253)";
      option = "2";
   });

   optionC = document.createElement("div");
   optionC.classList.add("option");
   optionC.setAttribute("id", "3");
   optionC.innerText = eachQuestion["options"][2];
   optionC.addEventListener("click", function () {
      resetBackgroundColor();
      optionC.style.backgroundColor = "rgb(54, 163, 253)";
      option = "3";
   });

   optionD = document.createElement("div");
   optionD.classList.add("option");
   optionD.setAttribute("id", "4");
   optionD.innerText = eachQuestion["options"][3];
   optionD.addEventListener("click", function () {
      resetBackgroundColor();
      optionD.style.backgroundColor = "rgb(54, 163, 253)";
      option = "4";
   });

   correctOption=eachQuestion["correctOption"];

   var buttonClic = document.createElement("button");
   buttonClic.classList.add("button");
   buttonClic.innerText = button;
   buttonClic.addEventListener("click", function () {
      if(option=="0"){
         alert("\n\n Please Select Any One Option!");
      }
      else{
         if(option==correctOption){
            correctAnswer++;
         }
      }
      document.getElementById(option).style.backgroundColor = "rgb(253, 43, 43)";
      document.getElementById(correctOption).style.backgroundColor = "rgb(59, 248, 59)";
      setTimeout(() => {
         displayQuestion();
      }, 1000);
   });

   questionContainer.append(question);

   ans.append(optionA, optionB, optionC, optionD, buttonClic);

   document.getElementById("container").innerHTML="";

   document.getElementById("container").append(question, ans);
}

function resetBackgroundColor() {
   optionA.style.backgroundColor = "";
   optionB.style.backgroundColor = "";
   optionC.style.backgroundColor = "";
   optionD.style.backgroundColor = "";
}

