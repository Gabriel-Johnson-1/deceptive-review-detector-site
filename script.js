const form = document.getElementById("reviewForm");
const predictionText = document.getElementById("predictionText");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Build JSON data
  const data = {
    review: document.querySelector("textarea[name='review']").value,
    user_label: document.querySelector("input[name='user_label']:checked").value
  };

  try {
    const res = await fetch("https://deceptive-review-detector-api.onrender.com/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    const json = await res.json();

    if (res.ok) {
      // Display model prediction
      predictionText.textContent = `Model prediction: ${json.prediction}`;
    } else {
      predictionText.textContent = `Error: ${json.error}`;
    }
  } catch (err) {
    predictionText.textContent = "Server error, try again later.";
  }
});