import { html, render } from '/vendor/htm.js';
import { App } from '/components/App.js';

render(
  html`<${App}/>`,
  document.getElementById('root'),
);
