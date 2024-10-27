const mobileMenuButton = document.getElementById('mobile-menu')
const mobileMenu = document.querySelector('[role="mobile-menu"]')
const myJournalTab = document.getElementById('my-journal')
const projectsTab = document.getElementById('projects')
const aboutMeTab = document.getElementById('aboutMe')
const pageContainer = document.getElementById('contentContainer')
  
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

aboutMeTab.addEventListener('click',() => {
  localStorage.setItem('activeTab','aboutMe');
  updateTabs();
}) 

    
function updateTabs() {
    const activeTab = localStorage.getItem('activeTab');
    if (activeTab === 'myJournal') {
        myJournalTab.classList.add('bg-purple-400');
        projectsTab.classList.remove('bg-purple-400');
        aboutMeTab.classList.remove('bg-purple-400');
    } else if (activeTab === 'projects') {
        myJournalTab.classList.remove('bg-purple-400');
        projectsTab.classList.add('bg-purple-400');
        aboutMeTab.classList.remove('bg-purple-400');
    } else if (activeTab === 'aboutMe') {
        myJournalTab.classList.remove('bg-purple-400');
        aboutMeTab.classList.add('bg-purple-400, bg-opacity-');
        projectsTab.classList.remove('bg-purple-400');
    }
}









window.addEventListener('load', updateTabs);
document.addEventListener('DOMContentLoaded', updateTabs);
