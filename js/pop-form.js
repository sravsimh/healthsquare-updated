document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const toggleButton = document.getElementById("toggleFormButton");
  let formVisible = false;

  // Function to toggle the form
  function toggleForm() {
    if (formVisible) {
      form.classList.remove("visible-form");
      form.classList.add("hidden-form");
    } else {
      form.classList.remove("hidden-form");
      form.classList.add("visible-form");
    }
    formVisible = !formVisible;
  }

  // Event listener for the toggle button
  toggleButton.addEventListener("click", toggleForm);

  // Function to check if the user has scrolled to the footer
  function checkScrollToFooter() {
    const footer = document.querySelector("footer");
    const footerPosition = footer.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;

    if (footerPosition < screenPosition) {
      setTimeout(() => {
        form.classList.add("visible-form");
        formVisible = true;
      }, 2000);
      window.removeEventListener("scroll", checkScrollToFooter);
    }
  }

  window.addEventListener("scroll", checkScrollToFooter);
});
