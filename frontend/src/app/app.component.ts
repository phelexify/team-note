import {Component, OnInit} from "@angular/core";
import {Task} from "./app-entities/task.entity";
import {SidebarService} from "./sidebar/sidebar.service";
import {TestTaskBD} from "./testTaskBD";
import * as firebase from "firebase";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SidebarService]
})
export class AppComponent implements OnInit {
  loadedFeature: string = 'inputTasks';

  taskArray: Task[] = this.testTaskBD.taskInputArray;

  constructor(private sidebarService: SidebarService,private testTaskBD:TestTaskBD) {

    this.sidebarService.selectItemEmitter.subscribe(
      (feature) => {
        this.loadedFeature = feature;
        if (this.loadedFeature === 'inputTasks') {
          this.taskArray = this.testTaskBD.taskInputArray;
        }
        if (this.loadedFeature === 'outputTasks') {
          this.taskArray = this.testTaskBD.taskOutputArray;
        }
      }
    );
  }

  ngOnInit() {
   /* firebase.initializeApp({
      apiKey:"AIzaSyCa4k6Blrw70Xr7PpTHJuM7e7jZVnDYdyE",
      authDomain:"https://team-note-firebase.firebaseio.com/"
    });*/
  }
}
