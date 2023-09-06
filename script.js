function getComSuit() {
    const com = Math.random();
    if (com <= 0.34) return 'gajah';
    if (com > 0.34 && com <= 0.68) return 'orang';
    return 'semut';
}

function getHasilMain(player, com) {
    if (player == com) return 'SERI';
    if (player == 'gajah') return (com == 'orang') ? 'MENANG' : 'KALAH';
    if (player == 'orang') return (com == 'gajah') ? 'KALAH' : 'MENANG';
    if (player == 'semut') return (com == 'orang') ? 'KALAH' : 'MENANG';
}

function putar() {
    const jariCom = document.querySelector('div.area-com img');
    const jari = ['gajah', 'orang', 'semut'];
    let i = 0;
    const waktuAwal = new Date().getTime();
    
    setInterval(function () {
        
        if (new Date().getTime() - waktuAwal >= 2000) {
            clearInterval;
            return;
        }

        jariCom.setAttribute('src', 'assets/img/' + jari[i++] + '.png');
        if (i == jari.length) i = 0;
    }, 100);
}

const pOrang = document.querySelectorAll('ul.player li img');
const gCom = document.querySelector('div.area-com img');

pOrang.forEach(function (pil) {
    pil.addEventListener('click', function () {
        const pemainSuit = pil.className;
        const computer = getComSuit();
        const p = document.querySelector('.hasil-main p');
        p.innerHTML = 'VS';

        putar();
        
        setTimeout(function () {
            gCom.setAttribute('src', 'assets/img/' + computer + '.png');
            p.innerHTML = getHasilMain(pemainSuit, computer);
        }, 2000);
    });
});

