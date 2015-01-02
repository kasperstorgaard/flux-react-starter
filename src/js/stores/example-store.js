var _ = require('lodash');
var Promise = require('es6-promise').Promise;

var AppDispatcher = require('../dispatchers/app-dispatcher');
var AppConstants = require('../constants/app-constants');
var BaseStore = require('./base-store');

var _items = [];

function _getItems () {
  return _items;
}

function _addItem (item) {
  _items.push(item);
}

var ExampleStore = _.extend(new BaseStore(), {
  getItems: function(){
    return _getItems();
  },
  dispatcherIndex: AppDispatcher.register(function(payload){
    var action = payload.action;
    switch(action.actionType){
      case AppConstants.ADD_ITEM:
        this._emitChange();
        break;
    }

    return true;
  })
})

module.exports = ExampleStore;
