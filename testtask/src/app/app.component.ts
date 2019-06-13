import { Component, OnInit } from '@angular/core';
import { AppServiceService } from "./app.service.service";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TestModal } from './modal/modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', "../../node_modules/bootstrap/dist/css/bootstrap.min.css",]
})
export class AppComponent implements  OnInit{
  title = 'testtask';
  dataTable: Array<object> = [];

  constructor(
              private modalService: NgbModal,
              private appServiceService: AppServiceService) {}

  ngOnInit() {
    this.getData();
  }

  openModal(url) {
    const modal = this.modalService.open(TestModal, {size: 'lg'});

    modal.componentInstance.url = url;
  }

  getData() {
    this.appServiceService.getData().subscribe(data => {
      this.dataTable = data['hits'];
    });

    setInterval( () =>{
      this.appServiceService.getData().subscribe(data => {
      this.dataTable = data['hits'];
      })}, 10000
    )
  }

}
