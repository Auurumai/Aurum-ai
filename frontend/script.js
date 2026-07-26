document.addEventListener("DOMContentLoaded", () => {

    const analyzeBtn = document.getElementById("analyzeBtn");
    const chartInput = document.getElementById("chart");

    const trend = document.getElementById("trend");
    const confidence = document.getElementById("confidence");
    const recommendation = document.getElementById("recommendation");
    const preview = document.getElementById("preview");

    // معاينة الصورة
    if (chartInput && preview) {
        chartInput.addEventListener("change", function () {

            const file = this.files[0];

            if (file) {
                preview.src = URL.createObjectURL(file);
                preview.style.display = "block";
            }

        });
    }

    // تحليل الشارت
    if (analyzeBtn) {

        analyzeBtn.addEventListener("click", function () {

            if (trend) {
                trend.innerHTML = "<strong>Trend:</strong> Bullish 📈";
            }

            if (confidence) {
                confidence.innerHTML = "<strong>Confidence:</strong> 92%";
            }

            if (recommendation) {
                recommendation.innerHTML = "<strong>Recommendation:</strong> BUY";
            }

        });

    }

});
