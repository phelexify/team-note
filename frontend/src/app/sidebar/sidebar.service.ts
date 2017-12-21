import {EventEmitter, Injectable} from "@angular/core";

@Injectable()
export class SidebarService {
  inputItem = {name: "inputTasks", localName: "Входящие задачи",url:"task/all"};
  outputItem = {name: "outputTasks", localName: 'Исходящие задачи',url:"task/all"};
  taskStatusItem = {name: 'taskStatusItem', localName: "Статус выполнения",url:"status_tasks"};
  groups = {name: 'groups', localName: "Группы",url:"groups"};
  projects = {name: 'projects', localName: "Проекты",url:"projects"};
  goals = {name: 'goals', localName: "Цели",url:"goals"};
  reports = {name: 'reports', localName: "Отчет",url:"reports"};
  testRoles = {name:'roles', localName:'Роли',url:'roles'};

  selectItemEmitter = new EventEmitter<string>();
  menuItems: { name: string, localName: string,url:string }[] = [];
  itemSelected: { name: string, localName: string,url:string };

  constructor() {
    this.loadItems();
    this.itemSelected = this.menuItems[0];
  }

  loadItems() {
    this.menuItems.push(this.inputItem);
    this.menuItems.push(this.outputItem);
    this.menuItems.push(this.taskStatusItem);
    this.menuItems.push(this.groups);
    this.menuItems.push(this.projects);
    this.menuItems.push(this.goals);
    this.menuItems.push(this.reports);
    this.menuItems.push(this.testRoles);
  }

}
