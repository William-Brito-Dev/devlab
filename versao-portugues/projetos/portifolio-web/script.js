document.addEventListener('DOMContentLoaded', () => {
    const menuAlternar = document.querySelector('.menu-alternar');
    const listaNavegacao = document.querySelector('nav ul');

    if (menuAlternar && listaNavegacao) {
        menuAlternar.addEventListener('click', () => {
            listaNavegacao.classList.toggle('ativo');
            menuAlternar.classList.toggle('ativo');
        });

        listaNavegacao.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (listaNavegacao.classList.contains('ativo')) {
                    listaNavegacao.classList.remove('ativo');
                    menuAlternar.classList.remove('ativo');
                }
            });
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(ancora => {
        ancora.addEventListener('click', function (evento) {
            evento.preventDefault(); 

            const idAlvo = this.getAttribute('href');
            
            if (idAlvo === '#') {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                return;
            }

            const elementoAlvo = document.querySelector(idAlvo);
            if (elementoAlvo) {
                const alturaCabecalho = document.querySelector('header')?.offsetHeight || 0;
                const posicaoElemento = elementoAlvo.getBoundingClientRect().top;
                const posicaoFinal = posicaoElemento + window.pageYOffset - alturaCabecalho;

                window.scrollTo({
                    top: posicaoFinal,
                    behavior: 'smooth'
                });
            }
        });
    });

    const secoesParaAnimar = document.querySelectorAll('.container-secao, .hero h1, .icones-tecnologia img, .cartao-projeto');

    const opcoesObservador = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observador = new IntersectionObserver((entradas, obs) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add('revelar');
                obs.unobserve(entrada.target);
            }
        });
    }, opcoesObservador);

    secoesParaAnimar.forEach(secao => {
        observador.observe(secao);
    });

    const botaoVoltarTopo = document.createElement('button');
    botaoVoltarTopo.innerHTML = '&uarr;';
    botaoVoltarTopo.classList.add('voltar-topo');
    document.body.appendChild(botaoVoltarTopo);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            botaoVoltarTopo.classList.add('mostrar');
        } else {
            botaoVoltarTopo.classList.remove('mostrar');
        }
    });

    botaoVoltarTopo.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});