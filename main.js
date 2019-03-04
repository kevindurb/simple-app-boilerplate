import { html, render } from '/vendor/html.js';
import { App } from '/components/App.js';

render(
  html`<${App}/>`,
  document.getElementById('root'),
);
