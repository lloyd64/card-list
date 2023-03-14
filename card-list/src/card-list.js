import { LitElement, html, css } from 'lit';

import "team-card-lloyd/src/team-card.js";
import "team-card3/src/team-card3.js";

class CardList extends LitElement {
  static properties = {
    header: { type: String },
  }

  static styles = css`
    :host {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      font-size: calc(10px + 2vmin);
      color: #1a2b42;
      max-width: 960px;
      margin: 0 auto;
      text-align: center;
      background-color: var(--card-list-background-color);
    }

    main {
      flex-grow: 1;
    }

    .logo {
      margin-top: 36px;
      animation: app-logo-spin infinite 20s linear;
    }

    @keyframes app-logo-spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    .app-footer {
      font-size: calc(12px + 0.5vmin);
      align-items: center;
    }

    .app-footer a {
      margin-left: 5px;
    }
  `;

  constructor() {
    super();
    this.header = 'My app';
  }

  render() {
    return html`
  <team-card>
      <img slot="imagelocation" src="https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2022/10/1440/810/bryce-hr.jpg?ve=1&tl=1"/>
    <ul>
      <li>2-4, 2 RBI, 1 HR</li>
      <li>8th inning go ahead HR</li>
      <li>Murdered the spirit of thousands of San Diegoans</li>
    </ul>
  </team-card>
  <team-card3>
   <img slot="imagelocation" src=""/>
    <ul>
      <li>103-90 Warriors</li>
    </ul>
  </team-card3>

 
    `;
  }
}

customElements.define('card-list', CardList);