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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { StepsModule } from 'primeng/steps';
import { DividerModule } from 'primeng/divider';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { DialogModule } from 'primeng/dialog';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    NavBarComponent
  ],
  imports: [
    CommonModule,
    MenubarModule
  ],
  exports: [
    // Angular
    FormsModule,
    // Primge NG
    ButtonModule, 
    AutoCompleteModule,
    CalendarModule,
    CheckboxModule,
    ConfirmPopupModule,
    ConfirmDialogModule,
    DialogModule,
    DividerModule,
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
    TableModule,
    ReactiveFormsModule,
    StepsModule,
    MessagesModule,
    ToastModule,
  ]
})
export class SharedModule { }
