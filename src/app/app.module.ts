import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';
import { MobileNavigationComponent } from './main-navigation/mobile-navigation/mobile-navigation.component';
import { ToolbarNavigationComponent } from './main-navigation/toolbar-navigation/toolbar-navigation.component';
import { userComponent } from './main-navigation/user/user.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { ContractsModule } from './+contracts/contracts.module';
import { ChatComponent } from './chat/chat.component';

const modules = [
  AppRoutingModule,
  BrowserAnimationsModule,
  BrowserModule,
  ContractsModule,
  RouterModule,
  SharedModule
];

const components = [
  AppComponent,
  ChatComponent,
  MainNavigationComponent,
  MobileNavigationComponent,
  ToolbarNavigationComponent,
  userComponent
]

@NgModule({
  declarations: [...components],
  imports: [...modules],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
