const htm = require('htm');
const preact = require('preact');

export const html = htm.bind(preact.createElement);
export const render = preact.render;
export const Component = preact.Component;
