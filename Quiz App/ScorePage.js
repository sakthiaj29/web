
function showScore(point, totalPoint, quotes){
    var scoreHeader=document.createElement("div");
    scoreHeader.classList.add("score-header");

    var headerBox=document.createElement("div");
    headerBox.classList.add("header-box");
    headerBox.innerText="SCORE";
    scoreHeader.append(headerBox);

    var scoreCard=document.createElement("div");
    scoreCard.classList.add("score-card");

    var scoreBox=document.createElement("div");
    scoreBox.classList.add("score-box");
    scoreBox.innerText=point+"/"+totalPoint;
    scoreCard.append(scoreBox);

    var scoreFooter=document.createElement("div");
    scoreFooter.classList.add("score-footer");

    var footerBox=document.createElement("div");
    footerBox.classList.add("footer-box");
    footerBox.innerText=quotes;
    scoreFooter.append(footerBox);

    var scorePage=document.createElement("div");
    scorePage.classList.add("score-page");

    scorePage.append(scoreHeader, scoreCard, scoreFooter);

    document.getElementById("container").appendChild(scorePage);
}