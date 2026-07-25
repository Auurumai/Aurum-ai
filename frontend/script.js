const analyzeBtn = document.getElementById("analyzeBtn");

analyzeBtn.addEventListener("click", function () {

    const result = document.querySelectorAll(".card p");

    result[0].innerHTML = "<strong>Trend:</strong> Bullish 📈";
    result[1].innerHTML = "<strong>Confidence:</strong> 92%";
    result[2].innerHTML = "<strong>Recommendation:</strong> BUY";

});
