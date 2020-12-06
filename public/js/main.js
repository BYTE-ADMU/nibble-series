// Get modal element
var modal = document.getElementById('modalAlbertYulmo'); 

// Get open modal button or div
var modalOpen = document.getElementById('workshopAlbertYulmo');

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

// Hipster: Frances To
var modalFrancesTo = document.getElementById('modalFrancesTo');
var workshopFrancesTo = document.getElementById('workshopFrancesTo')
workshopFrancesTo.addEventListener('click', openFrancesTo);
window.addEventListener('click', closeFrancesTo);

// Functions
function openFrancesTo() {
    modalFrancesTo.style.display = 'flex';
}

function closeFrancesTo(e) {
    if(e.target == modalFrancesTo) {
        modalFrancesTo.style.display = 'none';
    }
}

// Hustler: Joni Salang-Oy
var modalJoniSalangOy = document.getElementById('modalJoniSalangOy');
var workshopJoniSalangOy = document.getElementById('workshopJoniSalangOy');
workshopJoniSalangOy.addEventListener('click', openJoniSalangOy);
window.addEventListener('click', closeJoniSalangOy);

// Functions
function openJoniSalangOy() {
    modalJoniSalangOy.style.display = 'flex';
}

function closeJoniSalangOy(e) {
    if(e.target == modalJoniSalangOy) {
        modalJoniSalangOy.style.display = 'none';
    }
}

// Culmination: Richard Cruz
var modalRichardCruz = document.getElementById('modalRichardCruz');
var workshopRichardCruz = document.getElementById('workshopRichardCruz');
workshopRichardCruz.addEventListener('click', openRichardCruz);
window.addEventListener('click', closeRichardCruz);

// Functions
function openRichardCruz() {
    modalRichardCruz.style.display = 'flex';
}

function closeRichardCruz(e) {
    if(e.target == modalRichardCruz) {
        modalRichardCruz.style.display = 'none';
    }
}