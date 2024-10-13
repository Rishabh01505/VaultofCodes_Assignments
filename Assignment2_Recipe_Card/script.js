// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Toggle Ingredients Visibility
  const toggleIngredientsBtn = document.getElementById("toggle-ingredients");
  const ingredientsList = document.getElementById("ingredients");

  toggleIngredientsBtn.addEventListener("click", function () {
    ingredientsList.classList.toggle("hidden");
    // Update button text based on visibility
    toggleIngredientsBtn.textContent = ingredientsList.classList.contains(
      "hidden"
    )
      ? "Show Ingredients"
      : "Hide Ingredients";
  });

  // Toggle Steps Visibility (now handled automatically on start cooking)
  const toggleStepsBtn = document.getElementById("toggle-steps");
  const stepsList = document.getElementById("steps");

  toggleStepsBtn.addEventListener("click", function () {
    stepsList.classList.toggle("hidden");
    // Update button text based on visibility
    toggleStepsBtn.textContent = stepsList.classList.contains("hidden")
      ? "Show Steps"
      : "Hide Steps";
  });

  // Start Cooking and Next Step Functionality
  const startCookingBtn = document.getElementById("start-cooking");
  const nextStepBtn = document.getElementById("next-step");
  const allSteps = document.querySelectorAll("#steps li");
  const progressBar = document.getElementById("progress-bar");
  let currentStep = 0;

  // Function to update the progress bar
  function updateProgressBar() {
    const percentage = (currentStep / allSteps.length) * 100;
    progressBar.style.width = percentage + "%";
  }

  // Function to highlight the current step
  function highlightStep(stepIndex) {
    if (stepIndex < allSteps.length) {
      allSteps[stepIndex].classList.add("active-step");
      allSteps[stepIndex].scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }

  // Start Cooking Button Click Event
  startCookingBtn.addEventListener("click", function () {
    // Show the steps list automatically
    if (stepsList.classList.contains("hidden")) {
      stepsList.classList.remove("hidden");
      toggleStepsBtn.textContent = "Hide Steps";
    }

    if (currentStep === 0) {
      highlightStep(currentStep);
      currentStep++;
      nextStepBtn.classList.remove("hidden"); // Show the Next Step button
      updateProgressBar();
    }
  });

  // Next Step Button Click Event
  nextStepBtn.addEventListener("click", function () {
    if (currentStep < allSteps.length) {
      highlightStep(currentStep);
      currentStep++;
      updateProgressBar();

      // If all steps are completed, hide the Next Step button
      if (currentStep === allSteps.length) {
        nextStepBtn.classList.add("hidden");
        startCookingBtn.textContent = "Cooking Complete";
      }
    }
  });
});
