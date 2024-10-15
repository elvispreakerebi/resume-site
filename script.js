// code to show menu items on mobile
document.getElementById('lucide-menu').addEventListener('click', function() {
    document.getElementById('mobile-nav-items').style.display = 'flex';
    document.getElementById('lucide-x').style.display = 'inline';
    document.getElementById('lucide-menu').style.display = 'none';
});

// code to hide menu items on mobile
document.getElementById('lucide-x').addEventListener('click', function() {
    document.getElementById('mobile-nav-items').style.display = 'none';
    document.getElementById('lucide-x').style.display = 'none';
    document.getElementById('lucide-menu').style.display = 'inline';
});

// // code to show and hide experiences
// document.querySelectorAll('.experience-container').forEach(container => {
//     container.addEventListener('click', function() {
//         const experiencesContainer = container.querySelector('.experiences-container');
//         const arrowDown = container.querySelector('.arrow-down');
//         const arrowUp = container.querySelector('.arrow-up');

//         if (experiencesContainer.style.display === 'flex') {
//             // Reverse the display changes
//             experiencesContainer.style.display = 'none';
//             arrowDown.style.display = 'flex';
//             arrowUp.style.display = 'none';
//         } else {
//             // Apply the display changes
//             experiencesContainer.style.display = 'flex';
//             arrowDown.style.display = 'none';
//             arrowUp.style.display = 'flex';
//         }
//     });
// });

document.querySelectorAll('.experience-container').forEach(container => {
    container.addEventListener('click', function() {
        // Get the elements within the clicked container
        const experiencesContainer = container.querySelector('.experiences-container');
        const arrowDown = container.querySelector('.arrow-down');
        const arrowUp = container.querySelector('.arrow-up');

        // Toggle the display of the clicked element's children
        const isCurrentlyVisible = experiencesContainer.style.display === 'flex';

        // Hide all .experiences-container elements, show all .arrow-down, and hide all .arrow-up
        document.querySelectorAll('.experiences-container').forEach(el => el.style.display = 'none');
        document.querySelectorAll('.arrow-down').forEach(el => el.style.display = 'flex');
        document.querySelectorAll('.arrow-up').forEach(el => el.style.display = 'none');

        // If the clicked element's experiencesContainer was not visible, show it and update arrows
        if (!isCurrentlyVisible) {
            experiencesContainer.style.display = 'flex';
            arrowDown.style.display = 'none';
            arrowUp.style.display = 'flex';
        }
    });
});

