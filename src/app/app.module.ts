import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from './modules/auth/auth.module';
import { SystemModule } from './modules/system/system.module';
import { SharedModule } from './modules/shared/shared.module';
import { UserStateService } from './services/user-state.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    SharedModule,
    AuthModule,
    AppRoutingModule,
    SystemModule,
    HttpClientModule
  ],
  providers: [UserStateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
