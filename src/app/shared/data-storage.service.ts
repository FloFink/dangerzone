import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, tap} from 'rxjs/operators';
import {Feedback} from './feedback.model';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  private recipesDatabaseUrl = 'https://dangerzone-9219e-default-rtdb.europe-west1.firebasedatabase.app/feedback.json';

  constructor(private httpClient: HttpClient) {
  }

  saveFeedback(feedback: Feedback) {
    this.httpClient.post(this.recipesDatabaseUrl, feedback)
      .subscribe(response => {
        console.log(response);
      });
  }
}
