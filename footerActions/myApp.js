'use strict';

import { LitElement, html, css } from "lit-element";
import './my-footer';

class MyApp extends LitElement {
  constructor() {
    super();
    
  }

  static get properties() {
    return {
    };
  }

  static get styles() {
    return css`

    `;
  }

  render() {
    return html`
      <my-footer  
         @my-footer-action-return="${this._handleReturn}"
         @my-footer-action-continue="${this._handleContinue}">
    </my-footer>
      
    `;
  }

  _handleReturn(){
    console.log("return")
  }

  _handleContinue(){
    console.log("continue")
  }
}

customElements.define("my-app", MyApp);
