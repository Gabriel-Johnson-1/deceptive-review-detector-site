async function loadMatrix() {
  try {
    const res = await fetch("https://deceptive-review-detector-api.onrender.com/confusion-matrix");
    const data = await res.json();

    document.getElementById("tp").textContent = data.TP;
    document.getElementById("tn").textContent = data.TN;
    document.getElementById("fp").textContent = data.FP;
    document.getElementById("fn").textContent = data.FN;

  } catch (err) {
    console.error(err);
  }
}

loadMatrix();