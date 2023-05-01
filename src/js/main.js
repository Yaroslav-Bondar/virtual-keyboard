const { Model } = require('./modules/model');
const { View } = require('./modules/view');
const { Controller } = require('./modules/controller');

const data = {
  mountId: 'root', language: 'en',
};

const controller = new Controller(Model, View, data);

module.exports.controller = controller;
