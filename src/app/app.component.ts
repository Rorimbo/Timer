import { Component } from '@angular/core';
import { CountdownTimer } from './CountdownTimer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  timers: any[] = [
    new CountdownTimer(
      new Date('June 1, 2023 00:00:00'),
      'До конца весны осталось:'
    ),
    new CountdownTimer(
      new Date('March 1, 2023 00:00:00'),
      'С начала весны прошло:'
    ),
  ];

  title: string = '';
  newTimerDate: string = new Date().toString();

  addTimer() {
    if (!this.newTimerDate) {
      alert('Введите дату');
      return;
    }
    let newTimer = new CountdownTimer(
      new Date(this.newTimerDate),
      this.title ? this.title : 'Без названия'
    );
    this.timers.push(newTimer);
    this.newTimerDate = '';
    this.title = '';
  }

  deleteTimer(timer: any) {
    let id = this.timers.findIndex((el) => el == timer);
    this.timers.splice(id, 1);
  }
}
