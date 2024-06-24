const startBtn: Element = <HTMLButtonElement>(
  document.querySelector(".start-btn")
);

const homePage = `<div class="h-screen flex items-center justify-center">
<button
  class="btn btn-primary btn-lg start-btn btn-wide rounded-full no-animation"
>
  start
</button>
</div>`;

startBtn.addEventListener("click", (): void => {
  startBtn.classList.replace("start-btn", "start-btn-active");
});

export { homePage };
