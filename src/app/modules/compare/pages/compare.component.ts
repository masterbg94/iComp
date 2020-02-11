import {Component} from '@angular/core';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.scss']
})
export class CompareComponent {

  telefoni: any = [
    {
      name: 'iPhone XR',
      img: './assets/compare1.png',
      colors: {
        White: '#FFF',
        Black: '#000',
        Blue: '#4e41fe',
        Coral: '#eaa499',
        Yellow: '#e8f113'
      },
      price: 'Vec od 90.000',
      screen: {
        size: '6.1',
        desc: 'Liquid Retina HD display'
      },
      body: 'Aluminium',
      kamere: [
        {
          type: 'Wide',
          desc: 'Jedna 12MP Wide camera'
        },
        {
          type: 'TrueDepth',
          desc: '7MP kamera sa 1080p HD video zapisom i do 60 fps'
        }
      ],
      lock: 'Face ID',
      chip: {
        type: 'A12',
        desc: 'A12 Bionic cip sa prirodnim procesorom druge generacije'
      }
    }
    ,
    {
      name: 'iPhone XS',
      img: './assets/compare2.png',
      colors: {
        White: '#FFF',
        Black: '#000',
        Coral: '#eaa499'
      },
      price: 'Vec od 70.000',
      screen: {
        size: '5.8',
        desc: 'Super Retina HD display'
      },
      body: 'Glass & stainless steel',
      kamere: [
        {
          type: 'Wide',
          desc: 'Dupla 12MP Wide kao i Telephoto kamere'
        },
        {
          type: 'TrueDepth',
          desc: '7MP kamera sa 1080p HD video zapisom i do 60 fps'
        }
      ],
      lock: 'Face ID 2',
      chip: {
        type: 'A12',
        desc: 'A12 Bionic cip sa prirodnim procesorom druge generacije'
      }
    }
    ,
    {
      name: 'iPhone X',
      img: './assets/compare3.png',
      colors: {
        White: '#FFF',
        Black: '#000',
        Coral: '#eaa499'
      },
      price: 'Vec od 80.000',
      screen: {
        size: '5.8',
        desc: 'Super Retina HD display'
      },
      body: 'Glass & stainless steel',
      kamere: [
        {
          type: 'Wide',
          desc: 'Dupla 12MP Wide kao i Telephoto kamere'
        },
        {
          type: 'TrueDepth',
          desc: '7MP kamera sa 1080p HD video zapisom i do 60 fps'
        }
      ],
      lock: 'Face ID 3',
      chip: {
        type: 'A11',
        desc: 'A11 Bionic cip sa prirodnim procesorom'
      }
    }
  ];

  public phone1selected: any;
  public phone2selected: any;
  public phone3selected: any;


  phoneChange(v) {
    console.log(v);
    this.phone1selected = this.telefoni.find(x => x.name == v);
    console.log(this.phone1selected);
  }

  phoneChange2(v) {
    console.log(v);
    this.phone2selected = this.telefoni.find(x => x.name == v);
    console.log(this.phone2selected);
  }

  phoneChange3(v) {
    console.log(v);
    this.phone3selected = this.telefoni.find(x => x.name == v);
    console.log(this.phone3selected);
  }

}
