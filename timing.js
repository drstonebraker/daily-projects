class Clock {
  constructor() {
    this.time = Date.now();
    this.printTime();

    setInterval(this._tick.bind(this), 1000);
  }

  printTime() {
    const timeNow = new Date(this.time);
    const hours = timeNow.getHours();
    const minutes = timeNow.getMinutes();
    const seconds = timeNow.getSeconds();

    document.getElementById('title').innerHTML =
                        `${hours}:${minutes}:${seconds}`;
    console.log(`${hours}:${minutes}:${seconds}`);

  }

  _tick() {
    this.time += 1000;
    this.printTime();
  }
}

const clock = new Clock();
