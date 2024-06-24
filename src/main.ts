import "./style/index.css";

const app: Element = <HTMLDivElement>document.querySelector("#app")!;

const homePage: string = `<div class="h-screen flex items-center justify-center">
<button
  class="btn GRD-btn text-white border-0 btn-lg start-btn btn-wide rounded-full no-animation"
>
  start
</button>
</div>`;

const selectDefPage: string = `<div class='flex items-center justify-center text-red-500'>
<h1>yasser</h1>
</div>`;

// app.innerHTML = homePage;

const startBtn: HTMLButtonElement = <HTMLButtonElement>(
  document.querySelector(".start-btn")!
);

startBtn.addEventListener("click", (): void => {
  startBtn.classList.replace("start-btn", "start-btn-active");

  setTimeout((): void => {
    app.innerHTML = selectDefPage;
  }, 1500);
});

homePage;
