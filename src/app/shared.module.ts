import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from './thema/angular-material/angular-material.module';



@NgModule({
    declarations: [
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AngularMaterialModule,
        RouterModule,

    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AngularMaterialModule,
        RouterModule,
    ],
})
export class SharedModule {
}
