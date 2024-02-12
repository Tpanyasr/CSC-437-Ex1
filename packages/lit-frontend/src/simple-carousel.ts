import {LitElement, html} from 'lit-element';
import {customElement, property, queryAssignedElements} from 'lit/decorators.js';

@customElement('simple-carousel')

export class SimpleCarousel extends LitElement {
    @property({type: Number}) selectedIndex = 0;

    @queryAssignedElements()
    render() {
    return html`<slot></slot>`;
  }
}