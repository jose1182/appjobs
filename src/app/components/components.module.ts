import { RouterModule } from '@angular/router';
import { NavbarModule } from './navbar/navbar.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [],
    imports: [ CommonModule, NavbarModule, RouterModule],
    exports: [ NavbarModule],
    providers: [],
})
export class ComponentsModule {}