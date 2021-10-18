import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertModule } from 'ngx-bootstrap/alert';
import { UregistrationComponent } from './components/uregistration/uregistration.component';
import { UlistComponent } from './components/ulist/ulist.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    UregistrationComponent,
    UlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TooltipModule.forRoot(),
    AlertModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule

 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
