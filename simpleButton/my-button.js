"use strict";

import { LitElement, html, css } from "lit-element";

class MyButton extends LitElement {
  constructor() {
    super();
    this.disabled = false;
    this.name = "button";
  }

  static get properties() {
    return {
      disabled: { type: Boolean, reflect:true },
      name: { type: String },
      nameEvent:{type:String}
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
        box-sizing: border-box;
      }
    `;
  }

  render() {
    return html`
       <slot></slot>
      <button 
          ?disabled=${this.disabled} 
          @click="${this._handleClick}">
          ${this.name}
      </button>
    `;
  }

  _handleClick(e) {

    this.dispatchEvent(
      new CustomEvent("my-button-click", {
        bubbles: true,
        composed: true,
        detail: {namButton:'', side:'right'}
      })
    );
  }
}

customElements.define("my-button", MyButton);
