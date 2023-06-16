let numeroAtual = 0;

function alteraCor(numeroGerado) {
    if (numeroGerado != numeroAtual) {
        if (numeroGerado == 1) {
            // Preto
            document.documentElement.style.setProperty('--color-primary', '#000');
            // Amarelo
            document.documentElement.style.setProperty('--color-action', '#FFFF00');
            // Preto
            document.documentElement.style.setProperty('--font-color', '#000');
            numeroAtual = 1;
        }
        else if (numeroGerado == 2) {
            // Cinza escuro
            document.documentElement.style.setProperty('--color-primary', '#595959');
            // Cinza claro
            document.documentElement.style.setProperty('--color-action', '#8C8C8C');
            numeroAtual = 2;
        }
        else if (numeroGerado == 3) {
            // Verde cobre
            document.documentElement.style.setProperty('--color-primary', '#527F76');
            // Azul claro
            document.documentElement.style.setProperty('--color-action', '#ADD8E6');
            // Preto
            document.documentElement.style.setProperty('--font-color', 'rgba(0,0,0,.8');
            numeroAtual = 3;
        }
        else if (numeroGerado == 4) {
            // Aquamarine médio
            document.documentElement.style.setProperty('--color-primary', '#32CD99');
            // Aquamarine
            document.documentElement.style.setProperty('--color-action', '#70DB93');
            numeroAtual = 4;
        }
        else if (numeroGerado == 5) {
            // Azul claro
            document.documentElement.style.setProperty('--color-primary', '#9AC1D9');
            // Azul escuro
            document.documentElement.style.setProperty('--color-action', '#3A668C');
            numeroAtual = 5;
        }
        else if (numeroGerado == 6) {
            // Verde escuro
            document.documentElement.style.setProperty('--color-primary', '#30402C');
            // Verde musgo
            document.documentElement.style.setProperty('--color-action', '#535925');
            numeroAtual = 6;
        }
    }
    else {
        escolherNumero();
    }
}

function escolherNumero() {
    var numeroAleatorio = Math.floor(Math.random() * 4) + 1;
    alteraCor(numeroAleatorio);
}
setInterval(escolherNumero, 30000);