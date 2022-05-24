import Countdown from "./time.js";

export default function initTheme() {}

const select = document.querySelector(".select");
const selectBackground = document.querySelector(".select-bg");
const contagemBackground = document.querySelectorAll(".contagem");
const titleH1Background = document.querySelector(".title h1");
const titleSpanEmoji = document.querySelectorAll(".title span");
select.addEventListener("change", handelSelect);

function handelSelect(event) {
  const selecao = event.target.value;
  if (selecao === "1") {
    titleSpanEmoji[0].innerHTML = "🎄";
    titleSpanEmoji[1].innerHTML = "🎅🏻";
    selectBackground.classList.add("natal");
    contagemBackground.forEach((i) => i.classList.add("natal"));
    titleH1Background.classList.add("natal");

    selectBackground.classList.remove("halloween", "ano");
    contagemBackground.forEach((i) => i.classList.remove("halloween", "ano"));
    titleH1Background.classList.remove("halloween", "ano");
  } else if (selecao === "2") {
    titleSpanEmoji[0].innerHTML = "💀";
    titleSpanEmoji[1].innerHTML = "🎃";
    selectBackground.classList.add("halloween");
    contagemBackground.forEach((i) => i.classList.add("halloween"));
    titleH1Background.classList.add("halloween");

    selectBackground.classList.remove("natal", "ano");
    contagemBackground.forEach((i) => i.classList.remove("natal", "ano"));
    titleH1Background.classList.remove("natal", "ano");
  } else if (selecao === "3") {
    titleSpanEmoji[0].innerHTML = "🎉";
    titleSpanEmoji[1].innerHTML = "🥂";
    selectBackground.classList.add("ano");
    contagemBackground.forEach((i) => i.classList.add("ano"));
    titleH1Background.classList.add("ano");

    selectBackground.classList.remove("halloween", "natal");
    contagemBackground.forEach((i) => i.classList.remove("halloween", "natal"));
    titleH1Background.classList.remove("halloween", "natal");
  }
}

console.log(titleSpanEmoji[0].innerHTML);
