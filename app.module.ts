import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorComponent } from './error/error.component';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ProfileComponent } from './profile/profile.component';
import { SettingsProfileComponent } from './profile/settings/settings.component';
import { HelpuserComponent } from './helpuser/helpuser.component';
import { SignUpComponent } from './authentication-new/sign-up/sign-up.component';
import { MyProfileComponent } from './profile/my-profile/my-profile.component';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import { TreeViewModule,ToolbarAllModule, ContextMenuAllModule } from '@syncfusion/ej2-angular-navigations';
import { DropDownListAllModule, MultiSelectAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { MaskedTextBoxModule, UploaderAllModule } from '@syncfusion/ej2-angular-inputs';
import { LoginComponent } from './authentication-new/login/login.component';
import { ButtonAllModule,CheckBoxAllModule } from '@syncfusion/ej2-angular-buttons';
import { DatePickerAllModule, TimePickerAllModule, DateTimePickerAllModule } from '@syncfusion/ej2-angular-calendars';
import { NumericTextBoxAllModule } from '@syncfusion/ej2-angular-inputs';
import { ScheduleAllModule, RecurrenceEditorAllModule } from '@syncfusion/ej2-angular-schedule';
import { MatDialogModule } from '@angular/material/dialog';
import { NgxPubSubModule } from '@pscoped/ngx-pub-sub';
import { AuthInterceptor } from './authentication-new/auth-interceptor';
import { ErrorInterceptor } from './error-interceptor';
import { AuthGuard } from './authentication-new/auth.guard';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from "./filter-pipe/filter.module";
import { FilterPipeComponent } from './filter-pipe/filter-pipe.component';
import { AppRoutingModule } from './app-routing.module';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon'
import { MaterialModule } from './material.module';
import { DashboardComponent } from './full/dashboard/dashboard.component';
import { HeaderComponent } from './full/header/header.component';
import * as TablerIcons from 'angular-tabler-icons/icons';

import { TablerIconsModule } from 'angular-tabler-icons';
import { IconHome, IconSettings, IconUser } from 'angular-tabler-icons/icons';
import { AppNavItemComponent } from './full/sidebar/nav-item/nav-item.component';
import { SidebarComponent } from './full/sidebar/sidebar.component';
import { FullComponent } from './full/full.component';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { WarningComponent } from './warning/warning.component';
import { ExchangeConverterComponent } from './exchange-converter/exchange-converter.component';

@NgModule({
  declarations: [
    DashboardComponent,
    LoginComponent,
    AppComponent,
    ErrorComponent,
    MyProfileComponent,
    ProfileComponent,
    HelpuserComponent,
    SettingsProfileComponent,
    SignUpComponent,
    EditProfileComponent,
    FilterPipeComponent,
    HeaderComponent,
    AppNavItemComponent,
    SidebarComponent,
    FullComponent,
    WarningComponent,
    ExchangeConverterComponent

  ],
  imports: [
    
    NgScrollbarModule,
    TablerIconsModule.pick({ IconHome, IconUser, IconSettings }) ,
    MatIconModule,
    NgxPubSubModule,
    MatDialogModule,
    MaskedTextBoxModule, UploaderAllModule,
    DropDownListAllModule,
    MultiSelectAllModule,
    ToolbarAllModule, ContextMenuAllModule,
    ButtonAllModule, CheckBoxAllModule,
    TreeViewModule,
    ScheduleAllModule,
    MatExpansionModule,
    MaterialModule,
    RecurrenceEditorAllModule,
    NumericTextBoxAllModule,
    DatePickerAllModule,
    TimePickerAllModule,
    DateTimePickerAllModule,
    BrowserAnimationsModule,
    BrowserModule,
    RouterTestingModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    // SortablejsModule.forRoot({}),
    CommonModule,
    NgbModalModule,
    // FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
        provide: DateAdapter,
        useFactory: adapterFactory
    }),
    // SharedModule
],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true
  },
    AuthGuard,
  ],
  bootstrap: [AppComponent],
  // entryComponents: [ErrorComponent]
})
export class AppModule { }
