import { Component, Input, OnInit } from '@angular/core';

@Component({
  templateUrl: './modal.html',
  styleUrls: ['./style.scss', "../../../node_modules/bootstrap/dist/css/bootstrap.min.css",]
})

export class TestModal implements OnInit {
  @Input() url;

  constructor() { }

  ngOnInit() {
    console.log(this.url)
  }


}
