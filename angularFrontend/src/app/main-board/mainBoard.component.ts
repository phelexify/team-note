import {Component, Input, OnInit} from "@angular/core";
import {Task} from "./tasks/task.model";
import {SidebarService} from "../sidebar/sidebar.service";
import {TaskService} from "./tasks/task.service";

@Component({
  selector: 'app-main-board',
  templateUrl: './mainBoard.component.html',
  styleUrls: ['./mainBoard.component.css'],
  providers:[TaskService]
})
export class MainBoardComponent implements OnInit {
  @Input() sidebarFeature: string;
  @Input() taskArray: Task[];

  constructor(private sidebarService:SidebarService) {
    this.sidebarFeature = sidebarService.itemSelected.name;
  }

  ngOnInit() {
  }

}
