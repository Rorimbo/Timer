export class CountdownTimer {
  constructor(deadline: Date, title: string) {
    this.deadline = deadline;
    this.timerId = null;
    this.out = {
      days: '',
      hours: '',
      minutes: '',
      seconds: '',
      daysTitle: '',
      hoursTitle: '',
      minutesTitle: '',
      secondsTitle: '',
    };
    this.title = title;
    this.start();
  }

  deadline: Date;
  timerId: any;
  out: any;
  title: string;

  static declensionNum(num: number, words: any) {
    return words[
      num % 100 > 4 && num % 100 < 20
        ? 2
        : [2, 0, 1, 1, 1, 2][num % 10 < 5 ? num % 10 : 5]
    ];
  }

  start() {
    this.calc();
    this.timerId = setInterval(this.calc.bind(this), 1000);
  }

  calc() {
    let diff = this.deadline.getTime() - new Date().getTime();
    if (diff < 0) {
      diff = -diff;
    }
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    this.out.days = days < 10 ? '0' + days : days;
    this.out.hours = hours < 10 ? '0' + hours : hours;
    this.out.minutes = minutes < 10 ? '0' + minutes : minutes;
    this.out.seconds = seconds < 10 ? '0' + seconds : seconds;
    this.out.daysTitle = CountdownTimer.declensionNum(days, [
      'день',
      'дня',
      'дней',
    ]);
    this.out.hoursTitle = CountdownTimer.declensionNum(hours, [
      'час',
      'часа',
      'часов',
    ]);
    this.out.minutesTitle = CountdownTimer.declensionNum(minutes, [
      'минута',
      'минуты',
      'минут',
    ]);
    this.out.secondsTitle = CountdownTimer.declensionNum(seconds, [
      'секунда',
      'секунды',
      'секунд',
    ]);
  }
}
