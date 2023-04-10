class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }

  addClock(time, callback) {
    if (!callback || !time) {
      throw new Error("Отсутствуют обязательные аргументы");
    }
    for (let key in this.alarmCollection) {
      if (this.alarmCollection[key].time === time) {
        console.warn("Уже присутствует звонок на это же время");
      }
    }
    this.alarmCollection.push({
      time: time,
      callback: callback,
      canCall: true,
    });
  }

  removeClock(time) {
    this.alarmCollection = this.alarmCollection.filter((element) => element.time !== time);
  }

  getCurrentFormattedTime() {
    return new Date().toLocaleTimeString().slice(0, 5);
  }

  start() {
    if (this.intervalId) {
      return false;
    }

    this.intervalId = setInterval(() => {
      this.alarmCollection.forEach((element) => {
        if (
          this.getCurrentFormattedTime() === element.time &&
          element.canCall === true
        ) {
          element.canCall = false;
          element.callback();
        }
      });
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  resetAllCalls() {
    this.alarmCollection.forEach((element) => element.canCall = true);
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}