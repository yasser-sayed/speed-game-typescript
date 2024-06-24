import "./style/index.css";

const page: Element = <HTMLDivElement>document.querySelector("#page")!;

const homePage: string = `<div class="h-screen flex items-center justify-center">
<button
  class="btn GRD-btn text-white border-0 btn-lg start-btn btn-wide rounded-full no-animation"
>
  start
</button>
</div>`;

const gamePage: string = ` <div class="min-h-[80vh] start-btn flex items-center justify-evenly flex-col">
<div class="w-full flex items-center justify-around">
  <h1 class="text-2xl font-bold">hurry up!</h1>

  <div class="flex items-center justify-center gap-3 w-28">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
      <path
        fill="#ff0000"
        d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"
      />
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
      <path
        fill="#ff0000"
        d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"
      />
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
      <path
        fill="#cccccc"
        d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"
      />
    </svg>
  </div>
</div>

<div class="w-full flex items-center flex-col justify-center gap-16">
  <h1 class="text-4xl font-bold">perfect</h1>

  <input
    id="txtInp"
    type="text"
    placeholder="Type here"
    class="input bg-white text-black w-full max-w-xs"
  />
  <div
    class="flex items-center justify-evenly w-full gap-6 text-center"
  >
    <h1 class="text-2xl font-bold">score : 4</h1>

    <h1 class="text-2xl font-bold">time left : 10</h1>
  </div>

  <h1 class="text-2xl font-bold">high score : 500</h1>
</div>
</div>`;

page.innerHTML = homePage;

const startBtn: HTMLButtonElement = <HTMLButtonElement>(
  document.querySelector(".start-btn")!
);

startBtn.addEventListener("click", (): void => {
  startBtn.classList.replace("start-btn", "start-btn-active");

  setTimeout((): void => {
    page.innerHTML = gamePage;
  }, 1500);
});

homePage;
