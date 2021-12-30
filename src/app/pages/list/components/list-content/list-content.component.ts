import { EmployeesService } from './../../services/employees.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-content',
  templateUrl: './list-content.component.html',
  styleUrls: ['./list-content.component.scss'],
})
export class ListContentComponent implements OnInit {
  private URL: string = 'https://randomuser.me/api/?results=500';
  public dataInfo: any = [];

  constructor(private employeesService: EmployeesService) {}

  ngOnInit(): void {
    this.RecoverEmployeesData();
  }
  public RecoverEmployeesData() {
    this.employeesService.getData(this.URL).subscribe((data: any) => {
      this.dataInfo = data.results;
      console.log(data.results);
    });
  }
}
