import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from "angular-datatables";

import { AppComponent } from './app.component';
import { TeacherComponent } from './teacher/teacher.component';
import { DepartmentComponent } from './department/department.component';
import { ErrorComponent } from './error/error.component';

const appRoutes: Routes = [
{
    path: 'teacher',
    component: TeacherComponent,
    data: { title: 'Teacher List' }
  },
  {
    path: 'department',
    component: DepartmentComponent,
    data: { title: 'Department List' }
  },
  {
    path: 'error',
    component: ErrorComponent,
    data: { title: 'Error' }
  },
  { path: '',
    redirectTo: '/teacher',
    pathMatch: 'full'
  },
   { path: 'department',
    redirectTo: '/department',
    pathMatch: 'full'
  },
   { path: 'error',
    redirectTo: '/error',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TeacherComponent,
    DepartmentComponent,
    ErrorComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    FormsModule,
    DataTablesModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
