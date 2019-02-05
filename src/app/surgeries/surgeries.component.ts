import {Component, OnChanges, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {SurgeryModel} from './surgery-model';

@Component({
  selector: 'app-surgeries',
  templateUrl: './surgeries.component.html',
  styleUrls: ['./surgeries.component.scss']
})
export class SurgeriesComponent implements OnInit {

  url: string = 'http://api.pvisioncenter.com/bravo-backend/api/surgery/getAll';
  surgeries: SurgeryModel[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.url).pipe(map(res => {
      return res;
    })).subscribe(
      data => {
        if (data.status == 200) {
          this.surgeries = data.data;
          console.log(this.surgeries);
        }
      }
    )
  }

}
