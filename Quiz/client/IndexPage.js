
startPage();

function startPage(){
    var startPage= document.createElement("div");
    startPage.classList.add("start-page");

    var imageHolder=document.createElement("div");
    imageHolder.classList.add("image-holder");
    
    var image=document.createElement("img");
    image.src="applogo.png";

    imageHolder.appendChild(image);

    var loading = document.createElement("img");
    loading.setAttribute("id", "load-image");
    loading.src = "loading.gif";

    var startButton = document.createElement("button");
    startButton.classList.add("start-button");
    startButton.setAttribute("id", "button");
    startButton.innerText = "START";
    startButton.style.display = "none";
    startButton.addEventListener("click", function(){
        startQuiz();
        startPage.style.display="none";
    });

    startPage.append(imageHolder, loading, startButton);

    document.getElementById("container").append(startPage);
    setTimeout(changeLoading, 2000);
} 

function changeLoading()
  {
    document.getElementById("load-image").style.display="none";
    document.getElementById("button").style.display="block";
  }