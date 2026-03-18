const form = document.getElementById("form");
const result = document.getElementById("result");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = Object.fromEntries(new FormData(form));

  const res = await fetch("https://deceptive-review-detector-api.onrender.com/predict", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  const json = await res.json();

  result.textContent = `
    Model says: ${json.prediction === 1 ? "Fake" : "Real"}
    Confidence: ${json.confidence.toFixed(2)}
  `;
});