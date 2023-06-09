// Get all the links in the navbar
const links = document.querySelectorAll('#nav-links li a');

// Add a click event listener to each link
links.forEach((link) => {
  link.addEventListener('click', function () {
    // Remove the "active" class from the previously active link
    const activeLink = document.querySelector('.active');
    activeLink.classList.remove('active');

    // Add the "active" class to the clicked link
    this.classList.add('active');
  });
});


// Toggle the hamburger menu icon and the navigation links
document.getElementById("menu-toggle").addEventListener("click", function() {
  this.classList.toggle("active");
  document.getElementById("nav-links").classList.toggle("active");
});
