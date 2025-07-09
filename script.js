function redirectTo(language) {
    if (language === 'pt') {
        window.location.href = './versao-portugues/projetos/portifolio-web/index.html';
    } else if (language === 'en') {
        window.location.href = './english-version/projects/portifolio-website/index.html';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const redirectMessage = document.getElementById('redirectMessage');
    const userLang = navigator.language || navigator.userLanguage;

    let preferredLang = 'pt';

    if (userLang.startsWith('en')) {
        preferredLang = 'en';
    } else if (userLang.startsWith('pt')) {
        preferredLang = 'pt';
    }

    if (preferredLang === 'pt') {
        redirectMessage.textContent = "Detectamos que seu idioma preferencial é Português. Redirecionando...";
    } else {
        redirectMessage.textContent = "We detected your preferred language is English. Redirecting...";
    }

    setTimeout(() => {
        redirectTo(preferredLang);
    }, 2500);
});