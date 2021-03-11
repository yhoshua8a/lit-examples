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
      disabled: { type: Boolean, reflect: true },
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
        box-sizing: border-box;
        font-size:7px;
        --my-button-color-blue:rgb(20,20,200);
        --my-button-bgd-warning:red;
        --my-button-bgd-disabled:rgb(200, 200, 200);
        --my-button-color-disabled:rgb(170, 170, 170);
        --my-button-color-white: whitesmoke;
      }

      :host(.warning) button {
        background-color: var(--my-button-bgd-warning, red);
      }

      :host(.send) button {
        background-color: var(--my-button-color-white, whitesmoke);
        color:var(--my-button-color-blue, rgb(20,20,200));
        border:1px solid var(--my-button-color-blue, rgb(20,20,200));
      }

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        max-width: 120px;
        min-width: 120px;
        background-color: var(--my-button-color-blue, rgb(20,20,200));
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 14px;
        margin: 4px 2px;
        cursor: pointer;
      }

      :host button[disabled] {
        background-color: var(--my-button-bgd-disabled, rgb(200, 200, 200));
        color: var(--my-button-color-disabled, rgb(170, 170, 170));
      }
    `;
  }

  render() {
    return html`
      <button ?disabled=${this.disabled} @click="${this._handleClick}">
        <slot></slot>
      </button>
    `;
  }

  _handleClick(e) {
    this.dispatchEvent(
      new CustomEvent("my-button-click", {
        bubbles: true,
        composed: true,
      })
    );
  }
}

customElements.define("my-button", MyButton);
