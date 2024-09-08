const toggleSkillsBtn= document.getElementById('toggle-skills') as HTMLButtonElement;
const skillsSec = document.getElementById('skill-sec') as HTMLElement;

toggleSkillsBtn.addEventListener('click', () => {
    if (skillsSec.style.display === 'none') {
        skillsSec.style.display = 'block';
    } else {
        skillsSec.style.display = 'none';
    }
});