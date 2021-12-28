import { IEmployee } from './../../models/employees.interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EmployeesService } from './../../services/employees.service';

@Component({
  selector: 'app-list-detail',
  templateUrl: './list-detail.component.html',
  styleUrls: ['./list-detail.component.scss'],
})
export class ListDetailComponent implements OnInit {
  private URL: string = 'https://randomuser.me/api/';
  // public dataInfo: IEmployee = {
  //   gender: {},
  //   email: '',
  //   phone: '',
  // };
  public dataInfo: any = [];
  public employeeId?: any;

  constructor(
    private employeesService: EmployeesService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      this.employeeId = params.idEmployee;
    });
  }

  public RecoverEmployeesData(idEmployee: any) {
    this.employeesService
      .getData(this.URL + idEmployee)
      .subscribe((data: any) => {
        this.dataInfo = data.results;
        console.log(data.results);
      });
  }
}
