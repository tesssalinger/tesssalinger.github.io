// Get all the project elements
const projects = document.querySelectorAll('.project');

// Add event listeners to each project element
projects.forEach(project => {
    // Toggle the 'active' class when the project is tapped or clicked
    project.addEventListener('click', () => {
        project.classList.toggle('active');
    });
});
