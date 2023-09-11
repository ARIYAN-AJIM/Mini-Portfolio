// click events for buttons

const portfolio = document.getElementById('portfolio');
const portfolioBtn = document.getElementById('portfolio-btn');

const skill = document.getElementById('skills');
const skillBtn = document.getElementById('skills-btn');

portfolioBtn.addEventListener('click', (event) => {
    skill.style.display = 'none';
    portfolio.style.display = 'flex';
    skillBtn.classList.remove('active-btn');
    portfolioBtn.classList.add('active-btn')
});

skillBtn.addEventListener('click', (event) => {
    portfolio.style.display = 'none';
    skill.style.display = 'flex';
    portfolioBtn.classList.remove('active-btn');
    skillBtn.classList.add('active-btn')
});

// light to dark mode code

document.addEventListener('DOMContentLoaded', () => {
    const toggleThemeBtn = document.getElementById('toggleTheme');
    const themeIcon = document.querySelector('img[alt="theme-icon"]');
    const githubLogo = document.querySelector('img[alt="github-logo"]');
    const linkedInLogo = document.querySelector('img[alt="linkedin-logo"]');
    const emailLogo = document.querySelector('img[alt="email-logo"]');

    const lightLogos = {
        github: "assets/github_light.png",
        linkedin: "assets/linkedin_light.png",
        email: "assets/email_light.png",
        theme: "assets/theme_light.png",
    }

    const darkLogos = {
        github: "assets/github_dark.png",
        linkedin: "assets/linkedin_dark.png",
        email: "assets/email_dark.png",
        theme: "assets/theme_dark.png",
    }

    function setTheme(isDark) {
        githubLogo.src = isDark ? darkLogos.github : lightLogos.github
        linkedInLogo.src = isDark ? darkLogos.linkedin : lightLogos.linkedin
        emailLogo.src = isDark ? darkLogos.email : lightLogos.email
        themeIcon.src = isDark ? darkLogos.theme : lightLogos.theme
    }

    toggleThemeBtn.addEventListener('click', ()=>{
        const isDark = document.body.classList.toggle("dark-theme");
        localStorage.setItem("isDark", isDark);
        setTheme(isDark);
    });


    const loadTheme = () => {
        const isDark = localStorage.getItem('isDark') === "true";

        document.body.classList.toggle("dark-theme", isDark);

        setTheme(isDark);
    };
    loadTheme();

})