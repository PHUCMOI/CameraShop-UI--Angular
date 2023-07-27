import { Component, OnInit } from '@angular/core';
import { Camera } from 'src/app/models/camera';
import { CameraService } from 'src/app/services/camera.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  
  cameras: Camera[] = [];
  constructor(private user: UserService, private cameraService: CameraService) { }

  ngOnInit() {
    this.cameraService.getCamera().subscribe(
      (data: Camera[]) => {
        this.cameras = data;
        console.log(data);
      },
      (error) => {
        console.error('Error fetching cameras:', error);
      }
    );
  }

  logout() {
    this.user.signOut();
  }

}
