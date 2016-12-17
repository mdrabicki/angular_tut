﻿import { Input, Component } from '@angular/core';
import { Hero } from './hero';

@Component({
    selector: 'my-hero-details',
    template: `
    <div *ngIf="hero">
        <h2>{{hero.name }} details! </h2>
        <div> 
            <label>name: </label>
            <input [(ngModel)]="hero.name"/>
        </div>
  
`
})

export class HeroDetailsComponent {
    @Input()
    hero: Hero;
}