class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }

  addClock(time, callback) {
    if (typeof callback === "undefined" || typeof time === "undefined") {
      throw new Error("Отсутствуют обязательные аргументы");
    }
    for (let key in this.alarmCollection) {
      if (this.alarmCollection[key].time === time) {
        console.warn("Уже присутствует звонок на это же время");
      }
    }
    return this.alarmCollection.push({
      time: time,
      callback: callback,
      canCall: true,
    });
  }

  removeClock(time) {
    // this.alarmCollection = this.alarmCollection.filter((element) => {
    //   if (element.time === time) {
    //     delete this.alarmCollection.time;
    //   }
    // });

    for (let key in this.alarmCollection) {
      if (this.alarmCollection[key].time === time) {
        delete this.alarmCollection[key].time;
      }
    }
  }

  getCurrentFormattedTime() {
    return new Date().toLocaleTimeString().slice(0, 5);
  }

  start() {
    if (typeof this.intervalId !== "undefined") {
      return false;
    }

    this.intervalId = setInterval(() => {
      this.alarmCollection.forEach((element) => {
        if (
          getCurrentFormattedTime() === element.time &&
          element.canCall === true
        ) {
          this.alarmCollection.canCall = false;
          this.alarmCollection.callback;
        }
      });
    }, 1000);
  }

  stop() {
    clearInterval();
    this.intervalId = null;
  }

  resetAllCalls() {
    this.alarmCollection.forEach((element) => {
      return element.canCall = true;
    });
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}