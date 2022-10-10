import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trust',
  templateUrl: './trust.component.html',
  styleUrls: ['./trust.component.scss']
})
export class TrustComponent implements OnInit {

   brands = [
  'https://www.datocms-assets.com/38511/1643112397-braze-logo.png?auto=format&dpr=1&w=204',
  'https://www.datocms-assets.com/38511/1643108650-glovo-logo.png?auto=format&dpr=1&w=222',
  'https://www.datocms-assets.com/38511/1610382340-accenturelogo.png?auto=format&dpr=0.94&w=300'
  ,
  'https://www.datocms-assets.com/38511/1643116400-overstock-logo.png?auto=format&dpr=1&w=244',
  'https://www.datocms-assets.com/38511/1643115698-telenor-logo.png?auto=format&dpr=1&w=170',
  'https://www.datocms-assets.com/38511/1610105524-logo-fairmoney.png?auto=format&dpr=0.73&w=384',
  'https://www.datocms-assets.com/38511/1643115738-cloudflare-logo.png?auto=format&dpr=1&w=180',
    'https://www.datocms-assets.com/38511/1609417388-uberlogo.png?auto=format&dpr=1&w=178'
  ]
  constructor() { }

  ngOnInit(): void {
  }


}
