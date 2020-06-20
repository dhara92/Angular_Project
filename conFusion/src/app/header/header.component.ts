import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatDialogRef } from "@angular/material/dialog";
import { LoginComponent } from '../login/login.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog ) { }

  ngOnInit() {
  }

  openLoginForm() {
    const dialogConfig = new MatDialogConfig();
    this.dialog.open(LoginComponent, {width: '500px', height: '450px'});
  }

}
  