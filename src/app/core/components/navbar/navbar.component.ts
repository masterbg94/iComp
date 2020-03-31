import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    public bindableData:any;

    dataAll = [
        {
            title: 'iPhone',
            description: 'The iPhone uses a touch-screen interface that was unique upon its release. Other smart phone manufacturers have\n' +
                '        since added similar interfaces to their phones, but the iPhone is still the most common. Other smart phones\n' +
                '        offer non-touch screen interfaces for users who prefer keypad or button navigation.',
            item1: {
                img: './assets/iPhone7.png',
                name: 'iPhone 7',
                price: 'Vec od 55.000 Din',
                link: ''
            },
            item2: {
                img: './assets/iPhone7.png',
                name: 'iPhone X',
                price: 'Vec od 75.000 Din',
                link: ''
            },
            featuredimg: './assets/iphone11-pro.png'
        },
        {
            title: 'iMac',
            description: 'The iMac uses a touch-screen interface that was unique upon its release. Other smart phone manufacturers have\n' +
                '        since added similar interfaces to their phones, but the iPhone is still the most common. Other smart phones\n' +
                '        offer non-touch screen interfaces for users who prefer keypad or button navigation.',
            item1: {
                img: './assets/iPhoneX.png',
                name: 'iMac 2019',
                price: 'Vec od 155.000 Din',
                link: ''
            },
            item2: {
                img: './assets/iPhoneX.png',
                name: 'iMac 2020',
                price: 'Vec od 195.000 Din',
                link: ''
            },
            featuredimg: './assets/iphone11-pro.png'
        },
        {
            title: 'iPad',
            description: 'The iPad uses a touch-screen interface that was unique upon its release. Other smart phone manufacturers have\n' +
                '        since added similar interfaces to their phones, but the iPhone is still the most common. Other smart phones\n' +
                '        offer non-touch screen interfaces for users who prefer keypad or button navigation.',
            item1: {
                img: './assets/iPhone7.png',
                name: 'iPad 2019',
                price: 'Vec od 89.000 Din',
                link: ''
            },
            item2: {
                img: './assets/iPhoneX.png',
                name: 'iPad 2020',
                price: 'Vec od 99.000 Din',
                link: ''
            },
            featuredimg: './assets/iphone11-pro.png'
        }
    ];

    selectedVal(x){
        this.bindableData = this.dataAll.find(data => data.title === x);
        console.log(this.bindableData);
    }

    constructor() {
    }

    ngOnInit() {
    }
}
