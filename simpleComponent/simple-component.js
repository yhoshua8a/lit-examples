import { LitElement, html, css } from './node_modules/lit-element';
import './other-component';


class SimpleComponent extends LitElement {

    constructor(){
        super();
        this.myTitle = 'title';
        this.jedis = ["anakin", "obi-wan", "samuel", "omar", "yoda"]
        console.log("Constructor")
    }

    connectedCallback(){
        super.connectedCallback();
        const title = this.shadowRoot.querySelector('h1');
        console.log("connectedCallback", title)

        this.addEventListener('other-component-add-jedi', (e)=>{
            console.log("Jedi added", e.detail)
        });
    }

    disconnectedCallback(){
        super.disconnectedCallback()
    }
        

    attributeChangedCallback(name, oldVal, newVal){
        super.attributeChangedCallback();
        console.groupCollapsed('"Atribute change callback');
        console.log("name", name)
        console.log("old",oldVal)
        console.log("new", newVal)
        console.groupEnd();
    }

    firstUpdated(changedProperties){
        console.log('first updated', changedProperties);
        const title = this.shadowRoot.querySelector('h1');
        console.log('title', title)
    }

    static get properties(){
       return {
           myTitle:{
                type:String,
                attribute:'my-title'
            },
           jedis:{type:Array}
       }
    }

    static get styles(){
        return css`
           
           :host{
            --other-component-title-color:red;   
           }

            h1{
                color:red;
            }
        `;
    }

    render(){
        return html`
                <h1>${this.myTitle}</h1>
                <other-component .jedis="${this.jedis}"></other-component>
                
        `;
    }
}

customElements.define('simple-component', SimpleComponent);