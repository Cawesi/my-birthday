const dataEvento = new Date("Jul 9, 2023 19:00:00");
const timeStampEvento = dataEvento.getTime();

const contaTempo = setInterval(function(){
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaEvento = timeStampEvento - timeStampAtual;

    const diasEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const dias = Math.floor(distanciaEvento / diasEmMs);
    const horas = Math.floor((distanciaEvento % diasEmMs) / horaEmMs);
    const minutos = Math.floor((distanciaEvento % horaEmMs) / minutoEmMs);
    const segundosAteEvento = Math.floor((distanciaEvento % minutoEmMs) / 1000);

    document.getElementById('contador').innerHTML = `Faltam - ${dias} d. ${horas} hrs. ${minutos} min. ${segundosAteEvento} seg.`;
    document.getElementById('contador2').innerHTML = `Faltam  - ${dias} d. ${horas} hrs. ${minutos} min. ${segundosAteEvento} seg.`;

    if (distanciaEvento < 0) {
        clearInterval(contaTempo);
        document.getElementById('contador').innerHTML = "Evento expirado."
    }

}, 1000);