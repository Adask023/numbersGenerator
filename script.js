class Generator {
  constructor(loops, numberLimit, column) {
    this.loops = loops;
    this.numberLimit = numberLimit;
    this.column = column;

    this.numbers = [];
    this.even = [];
    this.odds = [];
  }

  resetNumbers = () => {
    this.numbers = [];
    this.even = [];
    this.odds = [];
  };

  generateNumbers = () => {
    for (let i = 0; i < this.loops; i++) {
      this.numbers.push(Math.round(Math.random() * (this.numberLimit - 1)) + 1);
    }
  };

  sortNumbers = () => {
    this.numbers
      .sort(function (a, b) {
        return a - b;
      })
      .forEach((item) => {
        item % 2 === 0 ? this.even.push(item) : this.odds.push(item);
      });
  };

  displayNumbers = () => {
    const column = document.getElementById(`${this.column}`);

    let first = column.firstElementChild;
    while (first) {
      first.remove();
      first = column.firstElementChild;
    }

    let max;
    this.even.length > this.odds.length
      ? (max = this.even.length)
      : (max = this.odds.length);

    const div = document.createElement("div");
    for (let i = 0; i < max; i++) {
      const line = document.createElement("p");
      const span = document.createElement("span");
      const span2 = document.createElement("span");

      if (this.even[i] !== undefined) {
        span.innerHTML = this.even[i];
      }

      if (this.odds[i] !== undefined) {
        span2.innerHTML = this.odds[i];
      }

      line.appendChild(span);
      line.appendChild(span2);
      div.appendChild(line);
    }
    column.appendChild(div);
  };

  run = () => {
    this.resetNumbers();
    this.generateNumbers();
    this.sortNumbers();
    this.displayNumbers();
  };
}

const app = () => {
  const gen1 = new Generator(20, 100, "column");

  const randomButton = document.querySelector("#random__button");
  randomButton.addEventListener("click", gen1.run);
};

app();
