import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-asset-view',
  templateUrl: './asset-view.component.html',
  styleUrls: ['./asset-view.component.css']
})
export class AssetViewComponent implements OnInit {

  Active_Tab;
  bsModalRef: BsModalRef;

  constructor(
    private modalService: BsModalService,
    public router: Router,
    private active_route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  Active_Tab_Change(name) {
    this.Active_Tab = name;
    }
}
