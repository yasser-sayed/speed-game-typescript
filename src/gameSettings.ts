import words from "./words";

type lifesNum = 3 | 2 | 1 | 0;

interface GameSettings {
  timer: number;
  lifes: lifesNum;
  score: number;
  message: string;
  word?: string;
  setTimer(sec: number): void;
  getWord(): void;
  setScore(scoreVal: number): void;
  setMessage(msg: string): void;
  minuseLife(): void;
  timerRun(): void;
}

class Game implements GameSettings {
  public static highScore: number = 0;

  constructor(
    public timer: number,
    public lifes: lifesNum,
    public score: number,
    public message: string = "hurry up!",
    public word: string
  ) {}

  setTimer(sec: number): void {
    this.timer = sec;
  }

  getWord(): void {
    this.word = words[Math.floor(Math.random() * words.length)];
  }

  setScore(scoreVal: number): void {
    this.score = scoreVal;

    if (this.score > Game.highScore) {
      Game.highScore = this.score;
    }
  }

  setMessage(msg: string): void {
    this.message = msg;
  }

  minuseLife(): void {
    if (this.lifes > 0) {
      this.lifes--;
    }
  }

  timerRun(): void {
    if (this.timer > 0) {
      this.timer--;
    }
  }
}

export default Game;
