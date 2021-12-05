import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-pages',
    template: `
    <app-main-nav>
        <router-outlet></router-outlet>
    </app-main-nav>
    `
})

export class PagesComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}