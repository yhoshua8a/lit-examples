'use strict';

import { LitElement, html, css } from "lit-element";
import './my-button';

class MyFooter extends LitElement {
  constructor() {
    super();
    
  }

  static get properties() {
    return {
      disabled: { type: Boolean},
    };
  }

  static get styles() {
    return css`
      :host{
        display: block;
        box-sizing: border-box;
      }

      .footer{
          box-sizing:border-box;
          padding:16px;
          width:100%;
          height:150px
          background:whitesmoke;
          display:flex;
          align-items:center;
          justify-content:space-between;
      }



    `;
  }

  render() {
    return html`
        <footer class="footer">
          <my-button @my-button-click="${this._handleReturn}" class="send">Regresar</my-button>
          <my-button @my-button-click="${this._handleContinue}">Continuar</my-button>
        </footer>
    `;
  }

  _handleReturn(){
      this._fireEvent('my-footer-action-return');
  }

  _handleContinue(){
    this._fireEvent('my-footer-action-continue');
  }

  _fireEvent(name = 'my-footer-action', detail={}) {
    this.dispatchEvent(
      new CustomEvent(name, {
        bubbles: true,
        composed: true,
        detail
      })
    );
  }
}

customElements.define("my-footer", MyFooter);
