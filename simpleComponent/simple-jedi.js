import { LitElement, html, css } from 'lit-element';

'use strict';

class SimpleJedi extends LitElement {
  static get properties() { 
    return { 
            name:{
                type:String,
                hasChanged(newVal, oldVal) {
                    console.log("changed")

                    if(newVal === 'anakin'){
                        console.log("no actualizar")
                        return false;
                    }else{
                        console.log("actualiza")
                        return true
                    } 

                   
                  }
            }
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
        box-sizing:border-box;
      }
    `;
  }


  constructor() {
    super();
    this.name = "Default name"
  }


  render() {
      
    return html`
      <h1>Jedi</h1>
      <h2>${this.name}</h2>
      <button @click="${() => this.name = 'yoda'}">Cambia a yoda</button>
      <button @click="${() => this.name = 'anakin'}">Cambia a anakin</button>
    `;
  }
}
customElements.define('simple-jedi', SimpleJedi);