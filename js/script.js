// script.js
document.addEventListener('DOMContentLoaded', function() {
    const yearSpan = document.getElementById('current-year');
    yearSpan.textContent = new Date().getFullYear();
});
<footer>
    <p>&copy; <span id="current-year"></span> Shrutigyan Foundation. All rights reserved.</p>
</footer>


function toggleVisibility(id) {
    const section = document.getElementById(id);
    if (section.style.display === 'none') {
        section.style.display = 'block';
    } else {
        section.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const eventsButton = document.getElementById('toggle-events');
    eventsButton.addEventListener('click', function() {
        toggleVisibility('events');
    });
});

<section id="events">
    <h2>Upcoming Events</h2>
    <button id="toggle-events">Show/Hide Events</button>
    <p>Details about upcoming events and workshops will be listed here.</p>
</section>

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevents actual submission for demonstration
        alert('Thank you for your message. We will get back to you soon!');
    });
});
// script.js
document.addEventListener('DOMContentLoaded', function() {
    const yearSpan = document.getElementById('current-year');
    yearSpan.textContent = new Date().getFullYear();
});

