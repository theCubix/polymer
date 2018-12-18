import { LitElement, html } from '@polymer/lit-element'

class MyComponent extends LitElement {

  /**
   * Implement `render` to define a template for your element.
   * 
   * You must provide an implementation of `render` for any element
   * that uses LitElement as a base class.
   */
  render(){
    /** 
     * `render` must return a lit-html `TemplateResult`. 
     *
     * To create a `TemplateResult`, tag a JavaScript template literal
     * with the `html` helper function: 
     */
    return html`
      <!-- template content -->
      <p>A paragraph</p>
    `;
  }
}
// Register the new element with the browser.
customElements.define('my-component', MyComponent);