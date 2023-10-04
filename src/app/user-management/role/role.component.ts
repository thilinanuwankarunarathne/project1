import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AddRoleComponent } from './add-role/add-role.component';
import { EditRoleComponent } from './edit-role/edit-role.component';
import { Role } from '@/model/role/role';
import { Observable } from 'rxjs';
import { RoleService } from '@services/role/role.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit{

  displayedColumns: string[] = ['roleId', 'roleName', 'createdDate', 'createdBy', 'application.applicationName', 'action'];
  dataSource = new MatTableDataSource<any>;
  roles!: Observable<Role[]>;

  constructor(private _liveAnnouncer: LiveAnnouncer, private dialog: MatDialog, private roleService: RoleService) {}

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  // ngAfterViewInit() {
  //   this.dataSource.sort = this.sort;
  //   this.dataSource.paginator = this.paginator;
  // }

  ngOnInit(): void {
    this.loadData();
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  addRole() {
    const dialogRef = this.dialog.open(AddRoleComponent, {
      width: '400px', // You can adjust the width as needed
      // You can add other configuration options here
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      // You can handle the result here if needed
    });
  }


  editRole() {
    const dialogRef = this.dialog.open(EditRoleComponent, {
      width: '400px', // You can adjust the width as needed
      // You can add other configuration options here
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      // You can handle the result here if needed
    });
    
  }

  loadData(){
    this.roleService.getRoles().subscribe({
      next: (res)=>{
        this.dataSource = new MatTableDataSource(res.data)
        this.dataSource.sort = this.sort
        this.dataSource.paginator = this.paginator
        console.log(res)
      },
      error:console.log
    })
  }

}
