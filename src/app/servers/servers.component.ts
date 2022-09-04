import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serverName : string = "";
  status : boolean = false;
  serverCreationMessage : string = "No server was created!";
  serverCreated : boolean = false;
  constructor() {
    setTimeout(() => {
      this.status = true;
    },5000);
   }

  ngOnInit(): void {
  }

  onAddNewServer() : void {
    this.serverCreated = true;
    this.serverCreationMessage = "Server was created! , server name is  " + this.serverName;
  }

}
