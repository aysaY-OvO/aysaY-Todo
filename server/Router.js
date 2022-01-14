module.exports = class Router {
  constructor() {
    this.endpoints = {};
  }

  request(path, handler, method = 'GET') {
    if (!this.endpoints[path]) {
      this.endpoints[path] = {};
    }

    const endpoint = this.endpoints[path];

    if (endpoint[method]) {
      throw new Error(`${method} по адресу ${path} уже существует`);
    }
    endpoint[method] = handler;
  }

  get(path, handler) {
    this.request(path, handler, 'GET');
  }

  post(path, handler) {
    this.request(path, handler, 'POST');
  }
};
