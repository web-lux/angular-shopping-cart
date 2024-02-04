import { Component } from '@angular/core';

@Component({
  selector: 'section[app-banner]',
  standalone: true,
  imports: [],
  template: `
    <ul aria-label="Avantages de Run'zik" class="banner">
        <li>
            <img src="/assets/truck.svg" alt="" />
            <span>Livraison gratuite en Europe</span>
        </li>
    
        <li>
            <img src="/assets/headphone.svg" alt="" />
            <span>Service après-vente réactif</span>
        </li>
    
        <li>
            <img src="/assets/shield.svg" alt="" />
            <span>Garantie 2 ans</span>
        </li>
    
        <li>
            <img src="/assets/smile.svg" alt="" />
            <span>Satisfait ou remboursé sous 15 jours</span>
        </li>
    </ul>
  `,
  styles: `
  .banner {
    background: var(--white);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 60px;
    padding: 30px 0;
    flex-wrap: wrap;
  
    li {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      gap: 25px;
      flex-basis: 200px;
  
      span {
        color: var(--black);
        font-weight: bold;
        max-width: 200px;
        text-align: center;
        line-height: 150%;
      }
    }
  }
  `
})
export class BannerComponent {

}
