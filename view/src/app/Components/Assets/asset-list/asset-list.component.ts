import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-asset-list',
  templateUrl: './asset-list.component.html',
  styleUrls: ['./asset-list.component.css']
})
export class AssetListComponent implements OnInit {

  assetdataSource = [];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) pagination: MatPaginator;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToUrl(){
  
  }

}
