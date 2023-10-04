import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-edit-role',
  templateUrl: './edit-role.component.html',
  styleUrls: ['./edit-role.component.scss']
})
export class EditRoleComponent implements OnInit{
  
  ngOnInit(): void {
    this.sendData()
}

sendData() {
  alert('Data from child component');
}

}
