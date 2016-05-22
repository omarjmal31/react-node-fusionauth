/*
 * Copyright (c) 2016, Inversoft Inc., All Rights Reserved
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
 * either express or implied. See the License for the specific
 * language governing permissions and limitations under the License.
 */

import Ember from "ember";

export default Ember.Route.extend({
  model() {
    return this.store.findAll("todo");
  },
  actions: {
    error() {
      return this.transitionTo("login");
    },
    complete(todo){
      todo.set("completed", !todo.get("completed"));
      todo.save().then(() => {
        return this.store.unloadRecord(todo);
      });
    },
    create(text) {
      var todo = this.store.createRecord("todo", {
        text: text,
        completed: false
      });
      this.controller.set("text", "");
      return todo.save();
    },
    delete(todo) {
      return todo.destroyRecord();
    },
    update(todo) {
      return todo.save();
    }
  }
});
