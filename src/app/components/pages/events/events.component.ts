import {Component, OnInit, ViewChild} from '@angular/core';
import {CalendarOptions, FullCalendarComponent} from '@fullcalendar/angular';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this), // bind is important!
    locale: 'fr',
    nowIndicator: true,
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth'
    },
    eventTextColor: '#000000',
  };

  handleDateClick(arg: any) {
    alert('date click! ' + arg.dateStr)
  }
}
