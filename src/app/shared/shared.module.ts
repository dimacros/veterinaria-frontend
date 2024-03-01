import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { EditorModule } from 'primeng/editor';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { MenubarModule } from 'primeng/menubar';
import { MultiSelectModule } from 'primeng/multiselect';
import { PasswordModule } from 'primeng/password';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { TableModule } from 'primeng/table';
import { SkeletonModule } from 'primeng/skeleton';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { StepsModule } from 'primeng/steps';


@NgModule({
  declarations: [
    NavBarComponent
  ],
  imports: [
    CommonModule,
    MenubarModule
  ],
  exports: [
    ButtonModule, 
    AutoCompleteModule,
    CalendarModule,
    CheckboxModule,
    DropdownModule,
    EditorModule,
    InputGroupModule,
    InputGroupAddonModule,
    InputTextModule,
    InputTextareaModule,
    InputNumberModule,
    MenubarModule,
    MultiSelectModule,
    PasswordModule,
    RadioButtonModule,
    ChipModule,
    SkeletonModule,
    NavBarComponent,
    CardModule,
    DropdownModule,
    TableModule,
    ReactiveFormsModule,
    StepsModule,
  ]
})
export class SharedModule { }
