import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ClientesComponent } from './clientes/clientes.component';

import { ClienteService } from './clientes/cliente.service';

import { RouterModule, Routes} from '@angular/router';
import { HeaderComponent } from './header/header/header.component';
import { FormComponent } from './clientes/form.component';

const routes:Routes =[
  {path:'', redirectTo:'/clientes', pathMatch:'full'},
  {path:'clientes', component:ClientesComponent},
  {path:'clientes/form',component:FormComponent},
  {path:'clientes/form/:id',component:FormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    HeaderComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
