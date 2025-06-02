function revealOnScroll() {
    const reveals = document.querySelectorAll('section, .card');
    const windowHeight = window.innerHeight;
    reveals.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            el.classList.add('reveal');
        }
    });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});
backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

const navToggle = document.getElementById('navToggle');
const topnav = document.getElementById('myTopnav');
navToggle.addEventListener('click', () => {
    topnav.classList.toggle('open');
});

const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('portfolio-dark', document.body.classList.contains('dark-mode'));
});
if (localStorage.getItem('portfolio-dark') === 'true') {
    document.body.classList.add('dark-mode');
}

const typewriter = document.getElementById('typewriter');
if (typewriter) {
    const text = typewriter.textContent;
    typewriter.textContent = '';
    let i = 0;
    function type() {
        if (i < text.length) {
            typewriter.textContent += text.charAt(i);
            i++;
            setTimeout(type, 60);
        }
    }
    type();
}

document.querySelectorAll('.skill-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        document.querySelectorAll('.card.highlighted').forEach(card => card.classList.remove('highlighted'));
        const skill = this.querySelector('span').textContent.trim();
        document.querySelectorAll('.card').forEach(card => {
            const skills = (card.dataset.skills || '').split(',').map(s => s.trim());
            if (skills.includes(skill)) {
                card.classList.add('highlighted');
                card.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        });
        e.preventDefault();
    });
});