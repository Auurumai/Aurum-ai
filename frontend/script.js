document.addEventListener("DOMContentLoaded", () => {

    const analyzeBtn = document.getElementById("analyzeBtn");
    const chartInput = document.getElementById("chart");
    const preview = document.getElementById("preview");

    // AI Report
    const trend = document.getElementById("trend");
    const confidence = document.getElementById("confidence");
    const recommendation = document.getElementById("recommendation");
    const risk = document.getElementById("risk");
    const timeframe = document.getElementById("timeframe");
    const status = document.getElementById("status");

    // Market Structure
    const bos = document.getElementById("bos");
    const choch = document.getElementById("choch");
    const direction = document.getElementById("direction");
    const support = document.getElementById("support");
    const resistance = document.getElementById("resistance");

    // Image Preview
    if (chartInput && preview) {
        chartInput.addEventListener("change", function () {
            const file = this.files[0];

            if (file) {
                preview.src = URL.createObjectURL(file);
                preview.style.display = "block";
            }
        });
    }

    // Analyze
    if (analyzeBtn) {
        analyzeBtn.addEventListener("click", function () {

            // AI Report
            trend.innerHTML = "<strong>📈 Market Trend:</strong> Bullish";
            confidence.innerHTML = "<strong>🎯 Confidence Score:</strong> 92%";
            recommendation.innerHTML = "<strong>💰 Recommendation:</strong> BUY";
            risk.innerHTML = "<strong>⚠️ Risk Level:</strong> LOW";
            timeframe.innerHTML = "<strong>🕒 Timeframe:</strong> 1H";
            status.innerHTML = "<strong>📊 Market Status:</strong> Strong Uptrend";

            // Market Structure
            bos.innerHTML = "<strong>🔹 BOS:</strong> Confirmed";
            choch.innerHTML = "<strong>🔸 CHoCH:</strong> Bullish";
            direction.innerHTML = "<strong>📈 Direction:</strong> Uptrend";
            support.innerHTML = "<strong>🟢 Support:</strong> 3350.00";
            resistance.innerHTML = "<strong>🔴 Resistance:</strong> 3385.00";

        });
    }

});
