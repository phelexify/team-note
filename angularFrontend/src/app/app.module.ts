import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterModule, Routes} from '@angular/router'

import { AppComponent } from './app.component';
import { MainBoardComponent } from './main-board/mainBoard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TasksComponent } from './main-board/tasks/tasks.component';
import { TaskListComponent } from './main-board/tasks/task-list/task-list.component';
import { TaskItemComponent } from './main-board/tasks/task-list/task-item/task-item.component';
import { TaskEditComponent } from './main-board/tasks/task-edit/task-edit.component';
import { StatusTasksComponent } from './main-board/status-tasks/status-tasks.component';
import { GroupsComponent } from './main-board/groups/groups.component';
import { ProjectsComponent } from './main-board/projects/projects.component';
import { GoalsComponent } from './main-board/goals/goals.component';
import { ReportsComponent } from './main-board/reports/reports.component';
import {TestTaskBD} from "./testTaskBD";


const routes:Routes = [
  {path:"tasks/:executor",component:TasksComponent},
  {path:"goals",component:GoalsComponent},
  {path:"groups",component:GroupsComponent},
  {path:"projects",component:ProjectsComponent},
  {path:"reports",component:ReportsComponent},
  {path:"status_tasks",component:StatusTasksComponent},
  {path:"tasks/:executor/:changeOperation/:id",component:TaskEditComponent},
  {path:"tasks/:executor/:changeOperation",component:TaskEditComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MainBoardComponent,
    NavbarComponent,
    SidebarComponent,
    TasksComponent,
    TaskListComponent,
    TaskItemComponent,
    TaskEditComponent,
    StatusTasksComponent,
    GroupsComponent,
    ProjectsComponent,
    GoalsComponent,
    ReportsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [TestTaskBD],
  bootstrap: [AppComponent]
})
export class AppModule { }
