import { LitElement, html } from 'lit-element';

class LifeCompponent extends LitElement {

  constructor() {
    super();
    this.title = 'No title';
    this.subTitle = undefined;
  }

  static get properties() {
    return {
      title: {type: String},
      subTitle: {type: String}
    };
  }

//   connectedCallback() {
//   super.connectedCallback()

//   console.log('connected')
// }

  render() {
    console.log('    render');
    return html`
      <h1>Title is: ${this.title}</h1>
      <h3>Subtitle is: ${this.subTitle}</h3>
      <button @click="${this.changeTitle}">Change title</button>
    `;
  }

  // Private method!!!
  // Don't use. Don't override.
  // Showing here just for educational purposes only.
  // _enqueueUpdate() {
  //   console.log('_enqueueUpdate called');
  //   const result = super._enqueueUpdate();
  //   console.log('_enqueueUpdate returns ' + result);
  //   return result;
  // }

  // // Private method!!!
  // // Don't use. Don't override.
  // // Showing here just for educational purposes only.
  // _requestUpdate(propertyName, oldValue) {
  //   console.log('_requestUpdate called with args: ' + propertyName + ', ' + oldValue);
  //   const result = super._requestUpdate(propertyName, oldValue);
  //   return result;
  // }


  //si es necesario actualizar se ejecuta y procesa properties, atributor y renderea el elemento
  performUpdate() {
    console.log('performUpdate starts');
    const result = super.performUpdate();
    console.log('performUpdate ends');
    console.log('--------------------------------------------------');
    return result;
  }

  shouldUpdate(args) {
    console.log('  shouldUpdate called with args: ' + JSON.stringify(args));
    const result = super.shouldUpdate(args);
    console.log('  shouldUpdate returns: ' + result);
    return result;
  }

  update(args) {
    console.log('  update called with args: ' + JSON.stringify(args));
    const result = super.update(args);
    console.log('  update returns: ' + result);
    return result;
  }

  firstUpdated(args) {
    console.log('  firstUpdated called with args: ' + JSON.stringify(args));
    const result = super.firstUpdated(args);
    console.log('  firstUpdated returns: ' + result);
    return result;
  }

  updated(args) {
    console.log('  updated called with args: ', + JSON.stringify(args));
    const result = super.updated(args);
    console.log('  updated returns: ' + result);
    return result;
  }


  changeTitle(){
      this.title = 'nuevo titulo'
      this.subTitle = 'subtitle'
  }
}

customElements.define('life-component', LifeCompponent);