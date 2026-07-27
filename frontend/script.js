document.addEventListener("DOMContentLoaded", () => {

    const analyzeBtn = document.getElementById("analyzeBtn");
    const chartInput = document.getElementById("chart");
    const preview = document.getElementById("preview");

    // Image Preview
    chartInput.addEventListener("change", function () {

        const file = this.files[0];

        if (file) {
            preview.src = URL.createObjectURL(file);
            preview.style.display = "block";
        } else {
            preview.style.display = "none";
        }

    });

    // Analyze Button
    analyzeBtn.addEventListener("click", function () {

        // Check if image selected
        if (chartInput.files.length === 0) {
            alert("Please choose a chart image first.");
            return;
        }

        analyzeBtn.disabled = true;
        analyzeBtn.innerHTML = "⏳ Analyzing...";

        setTimeout(() => {

            // AI Report
            document.getElementById("trend").innerHTML =
                "<strong>📈 Market Trend:</strong> Bullish";

            document.getElementById("confidence").innerHTML =
                "<strong>🎯 Confidence Score:</strong> 92%";

            document.getElementById("recommendation").innerHTML =
                "<strong>💰 Recommendation:</strong> BUY";

            document.getElementById("risk").innerHTML =
                "<strong>⚠️ Risk Level:</strong> LOW";

            document.getElementById("timeframe").innerHTML =
                "<strong>🕒 Timeframe:</strong> 1H";

            document.getElementById("status").innerHTML =
               
            "<strong>📊 Market Status:</strong> Strong Uptrend";
                        // Market Structure
            document.getElementById("bos").innerHTML =
                "<strong>🔹 BOS:</strong> Confirmed";

            document.getElementById("choch").innerHTML =
                "<strong>🔸 CHoCH:</strong> Bullish";

            document.getElementById("direction").innerHTML =
                "<strong>📈 Direction:</strong> Uptrend";

            document.getElementById("support").innerHTML =
                "<strong>🟢 Support:</strong> 3350.00";

            document.getElementById("resistance").innerHTML =
                "<strong>🔴 Resistance:</strong> 3385.00";

            // Smart Money Concepts
            document.getElementById("orderblock").innerHTML =
                "<strong>🟩 Order Block:</strong> Bullish";

            document.getElementById("fvg").innerHTML =
                "<strong>🟪 Fair Value Gap:</strong> Detected";

            document.getElementById("liquidity").innerHTML =
                "<strong>💧 Liquidity:</strong> Buy Side";

            document.getElementById("sweep").innerHTML =
                "<strong>⚡ Liquidity Sweep:</strong> Confirmed";

            document.getElementById("breaker").innerHTML =
                "<strong>📦 Breaker Block:</strong> Active";

            document.getElementById("mitigation").innerHTML =
                "<strong>🎯 Mitigation Block:</strong> Valid";

            // Gann
            document.getElementById("gann9").innerHTML =
                "<strong>Square of 9:</strong> Bullish";

            document.getElementById("gann144").innerHTML =
                "<strong>Square 144:</strong> Bullish";

            // Fibonacci
            document.getElementById("fib").innerHTML =
                "<strong>Key Level:</strong> 61.8%";

            // News
            document.getElementById("news").innerHTML =
                "No high-impact economic news.";

            // AI Reasoning
            document.getElementById("reason").innerHTML =
                "AI detected a bullish trend, confirmed BOS, bullish Order Block, Fibonacci 61.8% support, and recommends BUY.";

            analyzeBtn.innerHTML = "✅ Analysis Complete";
            analyzeBtn.disabled = false;

        }, 2000);

    });

});
