import Game from "./gameSettings";
import "./style/index.css";

const page: Element = <HTMLDivElement>document.querySelector("#page")!;
const dialog: HTMLDialogElement = document.querySelector(
  "#my_modal_5"
) as HTMLDialogElement;
const restart: HTMLButtonElement = document.querySelector(
  ".restart"
) as HTMLButtonElement;

//home page
const homePage: string = `<div class="h-screen w-full flex items-center justify-center">
<button
  class="btn GRD-btn text-white border-0 btn-lg start-btn btn-wide rounded-full no-animation"
>
  start
</button>
</div>`;

const gamePage: string = ` <div class="min-h-[80vh] w-full game-page flex items-center justify-evenly flex-col">
<div class="w-full flex items-center justify-around">
  <h1 id="message" class="text-2xl message-effect2 font-bold">hurry up!</h1>

  <div class="flex items-center justify-center gap-3 w-28">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
      <path
      id='heart1'
        fill="#ff0000"
        d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"
      />
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
      <path
      id='heart2'
      fill="#ff0000"
        d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"
      />
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
      <path
      id='heart3'
      fill="#cccccc"
        d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"
      />
    </svg>
  </div>
</div>

<div class="w-full flex items-center flex-col justify-center gap-16">
  <h1 id="word" class="text-4xl font-bold">perfect</h1>

  <input
    id="txtInp"
    type="text"
    placeholder="Type here"
    class="input bg-white text-black w-full max-w-xs"
  />
  <div
    class="flex items-center justify-evenly w-full gap-6 text-center"
  >
    <h1 class="text-2xl font-bold">score : <span id="score" ></span></h1>

    <h1 class="text-2xl font-bold">time left : <span id="timer" ></span></h1>
  </div>

  <h1 class="text-2xl font-bold">high score : <span id="highScore" ></span></h1>
</div>
</div>`;

page.innerHTML = homePage;
/////////////////////////////////////

//from home to game page function
const startBtn: HTMLButtonElement = <HTMLButtonElement>(
  document.querySelector(".start-btn")!
);

let game = new Game(15, 3, 0, "lets do it", "");

startBtn.addEventListener("click", (): void => {
  startBtn.classList.replace("start-btn", "start-btn-active");

  setTimeout((): void => {
    page.innerHTML = gamePage;
    game.getWord();
    updateElements();
    inpHandler();
  }, 1000);
});
//////////////////////////////////

//game functionality

//function elements update and game settings with setinternval
function updateElements(): void {
  const msg: HTMLElement = <HTMLElement>document.querySelector("#message");
  const heart1: HTMLElement = <HTMLElement>document.querySelector("#heart1");
  const heart2: HTMLElement = <HTMLElement>document.querySelector("#heart2");
  const heart3: HTMLElement = <HTMLElement>document.querySelector("#heart3");
  const word: HTMLElement = <HTMLElement>document.querySelector("#word");
  const score: HTMLElement = <HTMLElement>document.querySelector("#score");
  const timer: HTMLElement = <HTMLElement>document.querySelector("#timer");
  const highScore: HTMLElement = <HTMLElement>(
    document.querySelector("#highScore")
  );

  setInterval(() => {
    msg.innerHTML = game.message;
    word.innerHTML = game.word;
    score.innerHTML = game.score.toString();
    timer.innerHTML = game.timer.toString();
    highScore.innerHTML = Game.highScore.toString();
    heart1.setAttribute("fill", game.lifes >= 1 ? "#ff0000" : "#cccccc");
    heart2.setAttribute("fill", game.lifes >= 2 ? "#ff0000" : "#cccccc");
    heart3.setAttribute("fill", game.lifes >= 3 ? "#ff0000" : "#cccccc");

    if (!game.lifes) {
      if (localStorage.highScore < game.score) {
        localStorage.highScore = game.score;
      }
      dialog.showModal();
      restart.addEventListener("click", () => {
        game = new Game(15, 3, 0, "lets try again", "");
        game.getWord();
      });
    } else if (!game.timer) {
      game.minuseLife();
      game.setTimer(15);
      game.getWord();
      game;
    }

    if (game.timer < 6) {
      game.setMessage("hurry up!");

      //message animation
      msg.classList.add("message-effect");

      setTimeout(() => {
        msg.classList.remove("message-effect");
      }, 1000);
      ////////////////////

      timer.classList.add("text-red-600");
    } else {
      timer.classList.remove("text-red-600");
    }
  }, 500);

  setInterval(() => {
    game.timerRun();
  }, 1000);
}
/////////////////////////////////////////////////////////////////////

//function handle input text
function inpHandler(): void {
  const msg: HTMLElement = <HTMLElement>document.querySelector("#message");
  const txtInp: HTMLInputElement = <HTMLInputElement>(
    document.querySelector("#txtInp")
  );
  let inpVal: string = "";

  txtInp.addEventListener("keyup", (event) => {
    const target = event.target as HTMLInputElement;
    inpVal = target.value;

    if (inpVal == game.word) {
      game.setScore(game.score + 5);
      game.setMessage(game.timer > 10 ? "perfect" : "keep going!");

      //message animation
      msg.classList.add("message-effect");

      setTimeout(() => {
        msg.classList.remove("message-effect");
      }, 1000);
      //////////////////////////

      game.setTimer(15);
      game.getWord();
      target.value = "";
    }
  });
}
//////////////////////////////////////////////
