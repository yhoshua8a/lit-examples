import { LitElement, css, html } from "./node_modules/lit-element";

class OtherComponent extends LitElement {
  constructor() {
    super();
    this.jedis = [];
    this.newJedi = "Ramdom jedi";
  }

  static get styles() {
    return css`
      h1 {
        color: var(--other-component-title-color, green);
      }
    `;
  }

  static get properties() {
    return {
      jedis: { type: Array },
      newJedi: { type: String },
    };
  }

  _addJedi() {
    const newJedi =  this.newJedi
    const setJedis = new Set([...this.jedis, newJedi]);
    this.jedis = [...setJedis];

    // this.jedis.push(newJedi)
    // this.requestUpdate();
    console.log("PROPERTIE 2", this.jedis);
    
    let myEvent = new CustomEvent('other-component-add-jedi', {
        bubbles:true,
        composed:true,
        detail: newJedi
    });

    this.dispatchEvent(myEvent);
  }

  _deleteJedi(event){
      console.log("delete", event.target)
      const index = event.target.getAttribute('data-delete');

      if(index === null) return;

      console.log("index", index)

      this.jedis.splice(index, 1);
      this.jedis = [...this.jedis]

  }

  _changeInput() {
    console.log("input");
    this.newJedi = this.shadowRoot.querySelector("#input").value;
  }

  render() {
    return html`
      <input
        id="input"
        value=${this.newJedi}
        type="text"
        @input="${this._changeInput}"
      />

      <p>New Jedi: ${this.newJedi}</p>

      <button @click="${this._addJedi}">Add Jedi</button>
      
      <aside @click="${this._deleteJedi}">
      ${this.jedis.map(
        (jedi, index) =>
          html`
            <h2>${jedi}</h2>
            ${jedi === "anakin"
              ? html`<h3>Es oscuro</h3>`
              : html`<h3>No oscuro</h3>`}

              <p data-delete="${index}">&#128465</p>
          `
      )}

      </aside>
    `;
  }
}

customElements.define("other-component", OtherComponent);
