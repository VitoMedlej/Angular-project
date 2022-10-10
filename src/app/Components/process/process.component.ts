import {Component, OnInit} from '@angular/core';

@Component({selector: 'app-process', templateUrl: './process.component.html', styleUrls: ['./process.component.scss']})
export class ProcessComponent implements OnInit {

    cards = [
        {
            number: 1,
            title: 'Desgin',
            color: ' purple',
            img : "https://www.datocms-assets.com/38511/1607695154-fpmktshape.svg",
            text: 'Bring the end user’s voice to early product decisions and communicate easily wit' +
                    'h stakeholders.'
        }, {
            number: 2,
            title: 'Desgin',
            img : "https://www.datocms-assets.com/38511/1607695147-fpmshape.svg",

            color: 'green',
            text: 'Bring the end user’s voice to early product decisions and communicate easily wit' +
                    'h stakeholders.'
        }, {
            number: 3,
            img : 'https://www.datocms-assets.com/38511/1607695164-furshape.svg',
            title: 'Desgin',
            color: 'beige ',
            text: 'Bring the end user’s voice to early product decisions and communicate easily wit' +
                    'h stakeholders.'
        }, {
            number: 4,
            title: 'Desgin',
            img : 'https://www.datocms-assets.com/38511/1607695136-fpdshape.svg',
            color: 'red',
            text: 'Bring the end user’s voice to early product decisions and communicate easily wit' +
                    'h stakeholders.'
        }
    ]
    constructor() {}

    ngOnInit() : void {}

}
