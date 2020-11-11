// Get modal element
var modal = document.getElementById('speakerNameModal'); 

// Get open modal button or div
var modalOpen = document.getElementById('workshopSpeakerName');

// Listen for click
modalOpen.addEventListener('click', openModal);
window.addEventListener('click', closeModal)

// Open Modal Function
function openModal() {
    modal.style.display = 'flex';
}

function closeModal(e) {
    if(e.target == modal) {
        modal.style.display = 'none';
    }
}

// Repeat these steps for each speaker