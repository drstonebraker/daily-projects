class Clock {
  constructor() {
    this.time = Date.now();


    this.printTime();

    setInterval(this._tick.bind(this), 1000);
    // 1. Create a Date objectvfbf.
    // 2. Store the hours, minutes, and seconds.
    // 3. Call printTime.
    // 4. Schedule the tick at 1 second intervals.
  }

  printTime() {
    const timeNow = new Date(this.time);
    const hours = timeNow.getHours();
    const minutes = timeNow.getMinutes();
    const seconds = timeNow.getSeconds();
    // let time = new Date(timeNow);
    // let hours = time.getHours();
    // let minutes = time.getMinutes();
    // let seconds = time.getSeconds();
    document.getElementById('title').innerHTML = `${hours}:${minutes}:${seconds}`;
    console.log(`${hours}:${minutes}:${seconds}`);
    // Format the time in HH:MM:SS
    // Use console.log to print it.
  }

  _tick() {
    this.time += 1000;
    // 1. Increment the time by one second.


    this.printTime();

    // 2. Call printTime.

  }
}

const clock = new Clock();
