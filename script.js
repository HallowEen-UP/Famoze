const ctx = document.getElementById('growthChart').getContext('2d');
const growthChart = new Chart(ctx, {
type: 'line',
data: {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [{
      label: 'Client Growth',
      data: [10, 20, 15, 25, 30, 35, 40],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 2
  }]
},
options: {
  scales: {
      y: {
          beginAtZero: true
      }
  }
}
});
// Function to observe and reveal sections
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
  if (entry.isIntersecting) {
      entry.target.classList.add('figcaption-visible'); // Add class when in view
  } else {
      entry.target.classList.remove('figcaption-visible'); // Remove class when out of view (optional)
  }
});
}, {
threshold: 0.1 // Trigger when 10% of the section is visible
});

// Observe all sections on the page
document.querySelectorAll('figcaption').forEach(section => {
observer.observe(section);
});




//REVIEW


function revealOnScroll() {
  const testimonials = document.querySelectorAll('.testimonial');
  const windowHeight = window.innerHeight;

  testimonials.forEach(testimonial => {
    const testimonialTop = testimonial.getBoundingClientRect().top;
    const testimonialBottom = testimonial.getBoundingClientRect().bottom;

    // Check if testimonial is in the viewport
    if (testimonialTop < windowHeight && testimonialBottom > 0) {
      testimonial.classList.add('visible');
    } else {
      testimonial.classList.remove('visible');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);






//BUTTON CLICK




function redirectToLink(event) {
  event.preventDefault(); // Prevents form submission
  window.location.href = "https://famoze3.odoo.com/contactus"; // Replace with your desired link
}
