const  highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

console.log(highScores);
highScoresList.innerHTML = highScores
    .map(score => {
        return `<li class="high-score"><span class="score-name">${score.name}</span> - <span class="score"> ${score.score}</span></li>`;
    })
    .join("");