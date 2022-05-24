import Countdown from "./time.js";

export default function initTempoPara() {
  let Tempo = new Countdown("24 December 2022 23:59:59 GMT-0300");

  const dias = document.querySelector(".dias");
  const horas = document.querySelector(".horas");
  const minutos = document.querySelector(".minutos");
  const segundos = document.querySelector(".segundos");
  setInterval(() => {
    const diasTempo = Tempo.total.days;
    const horasTempo = Tempo.total.hours;
    const minutosTempo = Tempo.total.minutes;
    const segundosTempo = Tempo.total.seconds;
    dias.innerHTML = diasTempo;
    horas.innerHTML = horasTempo;
    minutos.innerHTML = minutosTempo;
    segundos.innerHTML = segundosTempo;
    if (horasTempo < 10) {
      horas.innerHTML = "0" + horasTempo;
    }
    if (minutosTempo < 10) {
      minutos.innerHTML = "0" + minutosTempo;
    }
    if (segundosTempo < 10) {
      segundos.innerHTML = "0" + segundosTempo;
    }
  }, 1000);
}
