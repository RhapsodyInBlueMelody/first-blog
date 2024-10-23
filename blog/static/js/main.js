const mobileMenuButton = document.getElementById('mobile-menu')
const mobileMenu = document.querySelector('[role="mobile-menu"]')
const myJournalTab = document.getElementById('my-journal')
const projectsTab = document.getElementById('projects')

mobileMenuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden'); 
});

myJournalTab.addEventListener('click', () => {
    localStorage.setItem('activeTab', 'myJournal');
    updateTabs();
});

projectsTab.addEventListener('click', () => {
    localStorage.setItem('activeTab', 'projects');
    updateTabs();
});


function updateTabs() {
    const activeTab = localStorage.getItem('activeTab');
    if (activeTab === 'myJournal') {
        myJournalTab.classList.add('bg-gray-900');
        projectsTab.classList.remove('bg-gray-900');
    } else if (activeTab === 'projects') {
        myJournalTab.classList.remove('bg-gray-900');
        projectsTab.classList.add('bg-gray-900');
    }
}



window.addEventListener('load', updateTabs);

