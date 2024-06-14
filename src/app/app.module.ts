import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";


import { AppComponent } from "./app.component";
import { DepartmentComponent } from "./department/department.component";
import { ShowDepComponent } from "./department/show-dep/show-dep.component";
import { AddEditDepComponent } from "./department/add-edit-dep/add-edit-dep.component";
import { EmployeeComponent } from "./employee/employee.component";
import { AddEditEmpComponent } from "./employee/add-edit-emp/add-edit-emp.component";
import { ShowEmpComponent } from "./employee/show-emp/show-emp.component";
import { SharedService } from "./shared.service";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
//import { NgModule } from "@angular/core";    // aver
//import { BrowserModule } from "@angular/platform-browser";  // aver



NgModule({
    declarations: [
        AppComponent,
        DepartmentComponent,
        ShowDepComponent,
        AddEditDepComponent,
        EmployeeComponent,
        AddEditEmpComponent,
        ShowEmpComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [SharedService],
    bootstrap: [AppComponent]
})