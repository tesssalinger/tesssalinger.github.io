// Function to handle smooth scrolling when clicking on navigation links
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Add event listener to the work link in the navigation bar
document.querySelector('nav ul li a[href="#work"]').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    console.log("Work link clicked"); // Add this line for debugging
    const sectionId = this.getAttribute('href').substring(1); // Extract section ID
    scrollToSection(sectionId); // Scroll to the corresponding section
});
