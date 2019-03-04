window.process = {
  env: {
    NODE_ENV: 'development',
  },
};

window.require = (name) => {
  return window[name];
};
