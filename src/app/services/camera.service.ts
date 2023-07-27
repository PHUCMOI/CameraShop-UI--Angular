import { Injectable } from '@angular/core';
import { Camera } from '../models/camera';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/enviroments/enviroment';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CameraService {
  private url = "cameras"

  constructor(private http: HttpClient) { }

  public getCamera() : Observable<Camera[]> {
    return this.http.get<Camera[]>(`${environment.apiUrl}/${this.url}`);
  }
}
