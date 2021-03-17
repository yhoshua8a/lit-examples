import { html, css, LitElement } from "lit-element";

export class LitInputMolecule extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
      }
    `;
  }

  static get properties() {
    return {
      _inputValue: {
        type: String,
        attribute:"input-value"
        //observer
      },
      btnText: {
        type: String,
        attribute: "btn-text",
      },
    };
  }

  constructor() {
    super();
    this._inputValue = "busca";
    this.btnText = "Buscar";
  }

  render() {
    return html`
      <h2 id="title">Buscar: ${this._inputValue}</h2>

      <input
        type="text"
        .value="${this._inputValue}"
        @input=" ${ e => this.inputValue = e.target.value }"
      />

      <button @click="${this._handleClickButton}">${this.btnText}</button>
    `;
  }

  attributeChangedCallback(name, oldVal, newVal){
    super.attributeChangedCallback(name, oldVal, newVal);
    console.log("atributechangedcallback.........");

     if(name === 'input-value'){
         console.log("change input", newVal)
         this._observerInputValue(newVal, oldVal);
     }
  }

  set inputValue(newVal) {
    //console.log("observer Set", newVal)
    this._observerInputValue(newVal, this._inputValue);
    this._inputValue = newVal;
  }

  _observerInputValue(newValue, old) {
    console.log("observer input", newValue, old);
    this.fire("input-molecule-chnage", { newValue, old });
  }

  fire(event = "input-molecule-default", detail = {}) {
    this.dispatchEvent(
      new CustomEvent(`${event}`, {
        bubbles: true,
        composed: true,
        detail
      })
    );
  }

  _handleClickButton(event) {
    console.log("Click", this.inputValue);
    this.fire("input-molecule-click-button", { value: this.inputValue });
  }
}
