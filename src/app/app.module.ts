import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './components/shared/content/content.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { MenuComponent } from './components/shared/menu/menu.component';
import { SettingComponent } from './components/shared/setting/setting.component';
import { HomeComponent } from './components/home/home.component';
import { GrecursosComponent } from './components/grecursos/grecursos.component';
import { GpersonalComponent } from './components/gpersonal/gpersonal.component';
import { TipodenunciaComponent } from './components/tipodenuncia/tipodenuncia.component';
import { AsigrecursosComponent } from './components/asigrecursos/asigrecursos.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    SettingComponent,
    HomeComponent,
    GrecursosComponent,
    GpersonalComponent,
    TipodenunciaComponent,
    AsigrecursosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
