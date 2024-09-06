


function toggleMenu() {
  const menuLinks = document.querySelector('.menu-links');
  menuLinks.classList.toggle('active'); // Toggles 'active' class on click
}

document.addEventListener('DOMContentLoaded', function () {
  console.log('DOM fully loaded and parsed');

  const scrollUpButton = document.getElementById('scrollUp');
  const scrollDownButton = document.getElementById('scrollDown');
  const projects = document.querySelectorAll('.projects .project');
  let currentIndex = 0;

  if (scrollUpButton && scrollDownButton && projects.length) {
    console.log('Buttons and projects found');

    // Function to update visible project
    function updateVisibleProject() {
      projects.forEach((project, index) => {
        if (index === currentIndex) {
          project.classList.add('active');
        } else {
          project.classList.remove('active');
        }
      });
    }

    // Initialize the first project as visible
    updateVisibleProject();

    scrollUpButton.addEventListener('click', function () {
      console.log('Scroll Up button clicked');
      if (currentIndex > 0) {
        currentIndex--;
      } else {
        currentIndex = projects.length - 1; // Wrap around to last project
      }
      updateVisibleProject();
    });

    scrollDownButton.addEventListener('click', function () {
      console.log('Scroll Down button clicked');
      if (currentIndex < projects.length - 1) {
        currentIndex++;
      } else {
        currentIndex = 0; // Wrap around to first project
      }
      updateVisibleProject();
    });
  } else {
    console.log('Buttons or projects not found');
  }
});
