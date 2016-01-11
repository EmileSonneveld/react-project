/*
 * Copyright (c) 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * DispatchedActions
 */

const AppDispatcher = require('../dispatcher/AppDispatcher');
const TodoConstants = require('../constants/TodoConstants');

const DispatchedActions = {

  addToValue: function(extraValue) {
    AppDispatcher.dispatch({
      actionType: TodoConstants.INCREASE_COUNT_VALUE,
      extraValue: extraValue,
    });
  },

  // ...

};

module.exports = DispatchedActions;
