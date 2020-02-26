import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { takeUntil, startWith } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  // title for the component
  public title = 'client';
  public data$;

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
   this.data$ = this.http.get('http://localhost:8080/api/data').pipe(startWith({name: 'jim', data: 'stuff'}));
  }
}
